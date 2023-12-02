const fs = require('fs/promises');

const OpenAI = require('openai');

const {Octokit} = require("@octokit/core");

const {encode} = require("gpt-tokenizer");

const openai = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"]
});

const octokit = new Octokit({
    auth: process.env["GITHUB_PERSONAL_ACCESS_TOKEN"]
})
  
  

async function main() {
  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: 'Say this is a test' }],
    model: 'gpt-3.5-turbo',
  });
}

async function getLastFileVersion(owner, repoName, path) {
    let docFiles = [];
    const response = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
        owner: owner,
        repo: repoName,
        path: path,
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
        }
      })
    for (const file of response.data) {
        if (file.type === 'dir') {
            const files = await getLastFileVersion(owner, repoName, file.path);
            docFiles = docFiles.concat(files);
        }
        if (file.type === 'file' && file.name.endsWith('.md')) {
            docFiles.push(file);
        }
    }
    return docFiles;
}

async function listDocFiles(files, owner, repoName, path) {
   let newFiles = await getLastFileVersion(owner, repoName, path);

   for (let file of newFiles) { 
        let fileHandledFlag = false;
        for (let [index, oldFile] of files.entries()) {
            if (oldFile.path === file.path && oldFile.sha !== file.sha) {
                // TODO: handle files updates here, so we don't have to retranslate them
                fileHandledFlag = true;
                files[index] = file;
                file.history = oldFile;
                break;
            }
            else if (oldFile.path === file.path) {
                fileHandledFlag = true;
                break;
            }
        }

        if (!fileHandledFlag) {
            // add a new file
            files.push(file);
        }

   }
}

async function loadFiles(owner, repoName, files) {
    
    for (let file of files) {
        const response = await fetch(file.download_url);
        const text = await response.text();
        
        file.raw = text;
        file.token = encode(text).length;
    }
}
 
// a function that takes a md file as a string and return a document hierarchical object
function parseMdStrToTree(file) {
    const lines = file.split('\n');
    const doc = [];
    let section = null;
    for (let line of lines) {
        const match = line.match(/^(#{1,6}) /);
        if (match) {
            const level = match[1].length;
            const title = line.substring(level + 1);
            section = {
                title: title,
                level: level,
                content: ''
            };
            doc.push(section);
        } else if (section) {
            section.content += line + '\n';
        }
    }
    return doc;
}

// a function that take a document hierarchical object and return a md file as a string
function parseTreeToMdStr(doc, code='') {
    let str = '';

    for (let block of doc) {
        if (code) {
            str += '#'.repeat(block.level) + ' ' + block[`title_${code}`][0] + '\n';
            str += block[`content_${code}`][0] + '\n';
        }
        else {
            str += '#'.repeat(block.level) + ' ' + block[`title`] + '\n';
            str += block[`content`] + '\n';
        }

    }
    return str;
}

// a sleep function as async
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function translateTextTree(textTree, language, temp=0) {
         
    let text = parseTreeToMdStr(textTree);
    try {
        let messages = [
            {
                "role": "system",
                "content": `Your are task with translating a technical documentation in ${language}. The user will provide the documentation in a markdown format. Translate it to ${language}. Only output the translated documentation in Markdown, do not add or remove content. Do not try to translate function/api endpoint name, only translate the documentation. If the documentation contain codeblocks, only translate commentaries, do not translate variablenames / function names. Try to output it in a {language} that is easy to read, do not try to translate all expressions verbatim, make it so it feel professional. If {language} usually use the enlish word for a thing, keep it in English. Notes: it's a computer doc, build mean 'compile', watch mean 'looking at file that change', ... Keep the same structure as the original documentation, and retain ALL the links / images.`,
            },
            {
                "role": "user",
                "content": `The markdown to translate (remeber do not add extra content or remove content, just translate verbatim).\n Do not expend on content, only translate the documentation. The proposed text to translate may only contain a title, in this case only translate the titel. Original in English:\n\n ${text} "\n\nTranslation in ${language}:\n\n`
            }
        ];
        const chatCompletion = await openai.chat.completions.create({
            messages: messages,
            model: 'gpt-3.5-turbo',
            temperature: temp
        });

        console.log(chatCompletion.choices[0].message.content)


        let translationTree = parseMdStrToTree(chatCompletion.choices[0].message.content);
       
        let linkmatchesTranslated = chatCompletion.choices[0].message.content.match(/\[.*\]\(.*\)/g);

        let matchesNonTranslated = text.match(/\[.*\]\(.*\)/g);

        // Not a good translation, try again
        while (
            linkmatchesTranslated != matchesNonTranslated 
            &&translationTree.length != textTree.length 
            && messages.length < 10) {
           messages.push({
            "role": "assistant",
            "content" : chatCompletion.choices[0].message.content
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
                    "content" : "The translation is seems too short, did you forget some content? redo it correctly. Only output the translation, no other contexts"
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


            chatCompletion = await openai.chat.completions.create({
                messages: messages,
                model: 'gpt-3.5-turbo-16k',
                temperature: temp
            });
            translationTree = parseMdStrToTree(chatCompletion.choices[0].message.content);
            linkmatchesTranslated = chatCompletion.choices[0].message.content.match(/\[.*\]\(.*\)/g);   
            
            console.log(chatCompletion.choices[0].message.content)
        }

        

        return translationTree;
    }
    catch (e) {
        console.log(e);
        console.log('sleeping');
        await sleep(30000)
        return translateTextTree(textTree, language, temp);
    }
    
}


async function translateFile(file, language, code) {
    if (!file.doc) {
        file.doc = parseMdStrToTree(file.raw);
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

        let translationTree = await translateTextTree(blocks, language, 0);

        for (let j = 0; j < blocks.length; j++) {
            if (!blocks[j]["title_" + code]) {
                blocks[j]["title_" + code] = []
            }
            if (!blocks[j]["content_" + code]) {
                blocks[j]["content_" + code] = []
            }
            blocks[j]["title_" + code].push(translationTree[j].title);
            blocks[j]["content_" + code].push(translationTree[j].content);
        }
    }

}

async function translateFiles(files, language, code, savepath) {
    let finished_jobs = 0;
    let started_jobs = 0;
    for (let file of files) {
        started_jobs++;
        let fn = async function() {
            await translateFile(file, language, code);
            await fs.writeFile(savepath, JSON.stringify(files, null, 2), 'utf8');
            finished_jobs++;
        }
        fn();
    }
    // wait that all jobs finished
    while (finished_jobs < started_jobs) {
        await sleep(1000);
        console.log(finished_jobs + '/' + started_jobs);
    }
}


async function correctLinkInFile(file, languageCode, docDir) {
    for (let block of file.doc) { 
        // find all markdown local link in block.content, BUT NOT IMAGES
        console.log(block,  block[`content_${languageCode}`][0], `content_${languageCode}`);
    
        let matchesTranslated = block[`content_${languageCode}`][0].match(/\[.*\]\(.*\)/g);

        let matchesNonTranslated = block[`content`].match(/\[.*\]\(.*\)/g);

        if (!matchesTranslated?.length != matchesNonTranslated?.length) {
            file.likelyLinkError = true;
            block[`likelyLinkError_${languageCode}`]= true;
            continue;
        }

        if (matchesNonTranslated?.length) {
        
            for (let [index, nonTranslatedMatch] of matchesNonTranslated.entries()) {
                let translatedMatch = matchesTranslated[index];

                // replace translatedMatch with nonTranslatedMatch url with /{languageCode}/ append
                let newUrl = nonTranslatedMatch.match(/\(.*\)/)[0];

                // check if url is a local link (start with . or .. or /)
                if (newUrl.match(/^\(.*\)$/)) {
                    // MAKE THE URL RELATIVE TO `/${docDir}/${languageCode}/`
                    newUrl = newUrl.substring(1, newUrl.length - 1);
                    newUrl = `(/${docDir}/${languageCode}/${newUrl})`;     
                }

          

                let urlText =   translatedMatch.match(/\[.*\]/)[0];
                urlText = urlText.substring(1, urlText.length - 1);
                urlText = `[${urlText}]`;

                console.log('Replace by', urlText + newUrl, 'match', translatedMatch);

                console.log( block[`content_${languageCode}`])
                block[`content_${languageCode}`][0] = block[`content_${languageCode}`][0].replace(translatedMatch, urlText + newUrl);


            }

        } 
                

    }

}

async function buildOutputMd(files, owner, repoName, repoDocDir, languageCode) { 
    let targetDir = `${__dirname}/build/${owner}/${repoName}/${repoDocDir}/${languageCode}`;
    
    for (let file of files) {
        await correctLinkInFile(file, languageCode);

        let translatedMd = parseTreeToMdStr(file.doc, languageCode);  
        let path = file.path.replace(repoDocDir, targetDir);
        // check if every directory in path exists and create if not
        let dirs = path.split('/');
        let dir = '';
        for (let i = 0; i < dirs.length - 1; i++) {
            dir += dirs[i] + '/';
            try {
                await fs.access(dir);
            } catch (error) {
                await fs.mkdir(dir);
            }
        }
        await fs.writeFile(path, translatedMd, 'utf8');
    }
}

async function printFiles(files, owner, repoName, repoDocDir) {
    let targetDir = `${__dirname}/build/${owner}/${repoName}/${repoDocDir}`;
    for (let file of files) {
  
        let path = file.path.replace(repoDocDir, targetDir);
        // check if every directory in path exists and create if not
        let dirs = path.split('/');
        let dir = '';
        for (let i = 0; i < dirs.length - 1; i++) {
            dir += dirs[i] + '/';
            try {
                await fs.access(dir);
            } catch (error) {
                await fs.mkdir(dir);
            }
        }
        await fs.writeFile(path, file.raw, 'utf8');
    }
}

async function translateDoc(owner, repoName, repoDocDir, language, code) {
    
    // const files = await listDocFiles(owner, repoName, repoDocDir);
    let files = [];
    let savepath  = `${__dirname}/tmp/save-${owner}-${repoName}.json`;
    try {
        await fs.access(savepath);
        files = require(savepath)
    } catch {
       
    }
    
    await listDocFiles(files, owner, repoName, repoDocDir);

    await loadFiles(owner, repoName, files);
    
    await printFiles(files, owner, repoName, repoDocDir);
 
    await translateFiles(files, language, code, savepath);

    await buildOutputMd(files, owner, repoName, repoDocDir, code)
}


translateDoc('run-llama', 'llama_index', 'docs', 'French', 'fr')
module.exports = translateDoc;