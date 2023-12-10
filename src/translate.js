const fs = require('fs/promises');

const { OpenAI }  = require("llamaindex");

const githubUtils = require('./githubUtils');
const mdUtils = require('./mdUtils');

const llm = new OpenAI({ model: "gpt-3.5-turbo-1106", temperature: 0,  apiKey: process.env["OPENAI_API_KEY"], maxRetries: 2});



let suportedLanguages = require('./supportedLanguages.json');




/**
 * Wait a little
 *
 * @param {string} ms - The number of milliseconds to wait.
 *
 * @returns {Promise<void>} A promise that resolves when the time has elapsed.
 */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Detects a repeated pattern at the end of a string.
 *
 * @param {string} str - The string in which to detect a repeated pattern.
 *
 * @returns {string} The detected pattern. If no pattern is detected, the function returns an empty string.
 *
 * This function starts from the end of the string and checks for repeated patterns. It constructs a potential pattern by adding one character at a time from the end of the string. If the end of the string matches four repetitions of the potential pattern, the function assumes that it has found the repeated pattern.
 */
function detectRepeatedPattern(str) {
    let pattern = '';
    for (let i = str.length - 1; i >= 0; i--) {
        pattern = str[i] + pattern;
        const patternRepeated = pattern + pattern + pattern + pattern;
        if (str.endsWith(patternRepeated)) {
            return pattern;
        }
    }
    return '';
}

/**
 * Removes repeated patterns from the end of a string. This tend to happen with bad LLM that will repeat the same token many times.
 *
 * @param {string} str - The string from which to remove repeated patterns.
 *
 * @returns {string} The string with repeated patterns removed from the end. If a pattern is detected, the function removes all repetitions of it from the end of the string, then appends one instance of the pattern. If no pattern is detected, the function returns the original string.
 *
 * This function uses the `detectRepeatedPattern` function to identify the repeated pattern. If `detectRepeatedPattern` returns an empty string, this function assumes that there is no repeated pattern.
 */
function removeRepeatedPattern(str) {
    const pattern = detectRepeatedPattern(str);
    if (pattern !== '') {
        while (str.endsWith(pattern)) {
            str = str.substring(0, str.length - pattern.length);
        }
        return str + pattern;
    }

    return str;
}


/**
 * Translates a tree of text into a specified language.
 *
 * @param {Array} textTree - An array of text blocks to be translated. Each block should be an object with `title` and `content` properties.
 * @param {string} language - The language for the translation.
 *
 * @returns {Promise<Array>} A promise that resolves to an array of translated text blocks. Each block is an object with `title` and `content` properties.
 *
 * This function uses a chat-based model to translate the text. It sends a series of messages to the model, instructing it to translate the text. If the model's response does not meet certain criteria (e.g., the translated text has the same number of links as the original), the function sends additional messages to correct the translation.
 */
async function translateTextTree(textTree, language) {
    // TODO: broke this function into a pipeline
    let text = mdUtils.parseTreeToMdStr(textTree);
    let messages = [];
    let translationTree = [];
    try {

         messages = [
            {
                "role": "system",
                "content": `
You are a expert technical writer. Your goal is to translate a technical documentation in ${language}. The user will provide the documentation in a markdown format. Translate it to ${language}. 

Guidelines:
- Only output the translated documentation in Markdown, do not add or remove content. 
- Do not try to translate function/api endpoint name, only translate the documentation. 
- If the documentation contain codeblocks, only translate commentaries, do not translate variable names / function names.
- Try to output it in ${language} that is easy to read, do not try to translate all expressions verbatim, make it so it feel professional. 
- If ${language} usually use the english word for a thing, keep it in English.
- Module names should be kept in English, add best effort translation. Always keep the original name in parenthesis, e.g. "聊天引擎 (ChatEngine)"

Additional Notes:
- it's a computer doc, build mean 'compile', watch mean 'looking at file that change',
- Keep the same structure as the original documentation, and retain ALL the links / images.
- Do not encapsulate the translation in a codeblock (\`\`\`mardown \`\`\`), only output the translation in markdown.
`,
            },
            {
                "role": "user",
                "content": `The markdown to translate (remember do not add extra content or remove content, just translate verbatim).
Do not expend on content, only translate the documentation.
The proposed text to translate may only contain a title, in this case only translate the title.
Do not encapsulate the translation in a codeblock (\`\`\`mardown \`\`\`), only output the translation in markdown.
Original in English:\n\n ${text} "\n\nTranslation in ${language}:\n\n`
            }
        ];

        let chatCompletion = await llm.chat(messages);
        
        translationTree = mdUtils.parseMdStrToTree(removeRepeatedPattern(chatCompletion.message.content));
        
        let linkmatchesTranslated =chatCompletion.message.content.match(/\[.*\]\(.*\)/g);

        let matchesNonTranslated = text.match(/\[.*\]\(.*\)/g);

        // Not a good translation, try again
        while (
            linkmatchesTranslated != matchesNonTranslated 
            && translationTree.length != textTree.length 
            && messages.length < 5) {
            messages.push({
                "role": "assistant",
                "content" : removeRepeatedPattern(chatCompletion.message.content)
            });

            // TODO: add more checks here
            if (translationTree.length > textTree.length) {
                messages.push({
                    "role": "user",
                    "content" : "The translation is seems too long, did you add too much content? redo it correctly. Only output the translation, no other contexts"
                });
            }
            else if (translationTree.length < textTree.length) {
                messages.push({
                    "role": "user",
                    "content" : "The translation is seems too miss some paragraph, did you forget some content? redo it correctly. Only output the translation, no other contexts"
                });
            }
            else if (linkmatchesTranslated < matchesNonTranslated) { 
                messages.push({
                    "role": "user",
                    "content" : "The translation is missing some Links!. Redo it correctly. Only output the translation, no other contexts"
                });
            }
            else if (linkmatchesTranslated > matchesNonTranslated) { 
                messages.push({
                    "role": "user",
                    "content" : "The translation have EXTRA Links!. Redo it correctly. Only output the translation, no other contexts"
                });
            }

            chatCompletion = await llm.chat(messages);
            translationTree = mdUtils.parseMdStrToTree(removeRepeatedPattern(chatCompletion.message.content));
            linkmatchesTranslated = chatCompletion.message.content.match(/\[.*\]\(.*\)/g);           
        }

    }
    catch (error) {
        console.log("Error", error);
    }
    return translationTree;
}

/**
 * Translates a single file into a specified language.
 *
 * @param {Object} file - The file object to be translated. It should have a `raw` property containing the content to be translated, and a `name` property for logging purposes.
 * @param {string} language - The language for the translation.
 * @param {string} code - The language code for the translation.
 *
 * @returns {Promise<void>} A promise that resolves when the file has been translated. The translated content is stored in the `title_<code>` and `content_<code>` properties of each block in the file's `doc` property.
 */
async function translateAFile(file, language, code) {
    console.log(`translating file: ${file.name} to ${suportedLanguages[code]} (${code})`);
    if (!file.doc) {
        file.doc = mdUtils.parseMdStrToTree(file.raw);
    }
    // translate from bottom up to avoid solo title.
    for (let i = file.doc.length - 1; i >= 0; i--) {
        let block = file.doc[i];

        if (block["title_" + code] || block["content_" + code]) {
            // do not retranslate block!
            continue;
        }

        let blocks = [block];
        let level = block.level;

        for (j = i - 1; j >= 0; j--) {
            if (file.doc[j].level < level) {
                level = file.doc[j].level;
                blocks.unshift(file.doc[j]);
            }
        }

        let translationTree = await translateTextTree(blocks, language);
        
        if (translationTree.length != blocks.length) { 
            if (!file.translationError) {
                file.translationError = {};
            }
            file.translationError[code] = true;

        }

        for (let j = 0; j < blocks.length; j++) {
            if (!blocks[j]["title_" + code]) {
                blocks[j]["title_" + code] = []
            }
            if (!blocks[j]["content_" + code]) {
                blocks[j]["content_" + code] = []
            }

            blocks[j]["title_" + code].push(translationTree[j]?.title || '\n');
            blocks[j]["content_" + code].push(translationTree[j]?.content || '\n');
        }

    }

}

/**
 * Translates a list of files into a specified language.
 *
 * @param {Array} files - An array of file objects to be translated. Each object should have a `raw` property containing the content to be translated.
 * @param {string} language - The language for the translation.
 * @param {string} code - The language code for the translation.
 * @param {string} savepath - The path where the translated documentation should be saved.
 *
 * @returns {Promise<void>} A promise that resolves when all files have been translated. The translated content of each file is stored in its `raw` property.
 */
async function translateFiles(files, language, code, savepath, translateMode) {
    let finished_jobs = 0;
    let started_jobs = 0;
    for (let file of files) {
        if (translateMode == 'readme' && file.path !== 'README.md') { 
            continue;
        }
        started_jobs++;
        let fn = async function() {
            await translateAFile(file, language, code);
            await fs.writeFile(savepath, JSON.stringify(files, null, 2), 'utf8');
            finished_jobs++;
        }
        fn();
    }
    let previously_display_finished_job = 0;
    // wait that all jobs finished
    while (finished_jobs < started_jobs) {
        await sleep(100);
        if (previously_display_finished_job != finished_jobs) {
            console.log(finished_jobs + '/' + started_jobs);
            previously_display_finished_job = finished_jobs;
        }
    }
}

/**
 * Translates the documentation files from a given GitHub repository.
 *
 * @param {Object} options - The options for the translation.
 * @param {string} options.repoOwner - The owner of the repository.
 * @param {string} options.repoName - The name of the repository.
 * @param {string} options.repoDocDir - The directory of the documentation in the repository.
 * @param {string} options.language - The language for the translation.
 * @param {string} options.languageCode - The language code for the translation.
 * @param {string} options.savePath - The path where the translated documentation should be saved.
 * @param {boolean} [options.loadFile=true] - Whether to load the files from GitHub (default is true).
 *
 * @returns {Promise<void>} A promise that resolves when the translation is complete.
 */
async function translate(options) {

    const repoOwner = options.repoOwner;
    const repoName = options.repoName;
    const repoDocDir = options.repoDocDir;
    const language = options.language;
    const languageCode = options.languageCode;
    const savePath = options.savePath;
    const loadFile = options.loadFile || (options.loadFile === undefined) ? true : false; // default to true
    const translateMode = options.translateMode;

    let files = [];
    let savepath  = `${savePath}/${repoOwner}/${repoName}.json`;
    try {
        await fs.access(savepath);
        files = require(savepath);
    } catch {
        console.log("Creating new save file!");
        // create the save oath
        let dirs = savepath.split('/');
        let dir = '';
        for (let i = 0; i < dirs.length - 1; i++) {
            dir += dirs[i] + '/';
            try {
                await fs.access(dir);
            } catch (error) {
                await fs.mkdir(dir);
            }
        }
    }
    
    if (loadFile) {
        console.log("Loading files from Github");
        if (translateMode == 'readme') {
            await githubUtils.listDocumentationFiles(files, repoOwner, repoName, repoDocDir, ['.md', '.mdx'], ['README.md']);
        }
        else {
            await githubUtils.listDocumentationFiles(files, repoOwner, repoName, repoDocDir, ['.md', '.mdx']);
        }
        await githubUtils.downloadDocumentationFiles(repoOwner, repoName, files);
    }

    await translateFiles(files, language, languageCode, savepath, translateMode);
}



module.exports = translate;