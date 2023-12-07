const fs = require('fs/promises');
const existsSync = require('fs').existsSync;
const mdUtils = require('./mdUtils');

const supportedLanguages = require('./supportedLanguages.json');
const translationDisclaimer = require('./supportedLanguagesWarning.json');
const e = require('express');

/**
* Corrects the links in a given file for a specific language.
* If there is a mismatch between the number of links in the translated and non-translated content add a `likelyLinkError_${languageCode}` property to the block. 
*
* @param {Object} file - The file object where the links should be corrected.
* @param {string} languageCode - The language code for the translation.
* @param {string} docDir - The directory of the documentation in the repository.
*
* @returns {Promise<void>} A promise that resolves when the links in the file are corrected.
*
*/
async function correctLinkInFile(file, languageCode, docDir) {
    for (let block of file.doc) { 
        // find all markdown local link in block.content, BUT NOT IMAGES
        if (!block[`content_${languageCode}`]) {
            continue
        }
    
        let matchesTranslated = block[`content_${languageCode}`][0].match(/\[.*\]\(.*\)/g);

        let matchesNonTranslated = block[`content`].match(/\[.*\]\(.*\)/g);

        if (!matchesTranslated?.length != matchesNonTranslated?.length) {
            file.likelyLinkError = true;
            block[`likelyLinkError_${languageCode}`]= true;
            continue;
        }

        if (matchesNonTranslated?.length && matchesTranslated?.length) {

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

                block[`content_${languageCode}`][0] = block[`content_${languageCode}`][0].replace(translatedMatch, urlText + newUrl);


            }
        } 
    }
}

/**
 * Builds the output markdown files for the translated documentation.
 *
 * @param {Array} files - The files to be processed.
 * @param {string} languageCode - The language code for the translation.
 * @param {string} targetDir - The directory where the output files should be saved.
 * @param {string} prefixToRemove - The prefix to remove from the file paths.
 *
 * @returns {Promise<void>} A promise that resolves when the output markdown files are built.
 *
 * @throws {Error} If a file is not translated in the target language.
 */
async function buildOutputMd(files, languageCode, targetDir, prefixToRemove, target, language) { 

    for (let file of files) {
        // check if file is translated in target language
        if (!file.doc || file.doc[0][`content_${languageCode}`] === undefined) { 
            console.log('failed to find translation', file.path);
            continue
        }

        if (target == 'readme' && file.path !== 'README.md') { 
            continue;
        }

        await correctLinkInFile(file, languageCode);

        let translatedMd = mdUtils.parseTreeToMdStr(file.doc, languageCode);  
        let filePath = file.path.replace(prefixToRemove, '');
        let path = `${targetDir}/${filePath}`;

        if (target == 'readme') { 
            path = `${targetDir}/README_${languageCode}.md`;
        }

        // check if every directory in path exists and create if not
        let dirs = path.split('/');
        let dir = '';
        for (let i = 0; i < dirs.length - 1; i++) {
            dir += dirs[i] + '/';
            if (!existsSync(dir)) {
                await fs.mkdir(dir);
            }
        }

        // add translationDisclaimer[languageCode] AFTER the first heading in the file
        let lines = translatedMd.split('\n');
        let firstHeadingFound = false;
        for (let [index, line] of lines.entries()) {
            if (line.match(/^#/)) {
                firstHeadingFound = true;
            }
            if (firstHeadingFound) {
                if (target === 'docusaurus') {
                    lines[index] = line + `
    :::note
        ${translationDisclaimer[languageCode]}
    :::         
    `;
                }
                else if (target === 'readme') { 
                    lines[index] = line +  getLanguageMenu(languageCode, language) + '\n\n' + "```" + translationDisclaimer[languageCode] + "```\n";
                }
                else {
                    lines[index] = line + '\n\n' + "```" + translationDisclaimer[languageCode] + "```\n";
                }
                break;
            }
        }
        if (!firstHeadingFound) {
            if (target === 'docusaurus') {
                lines.unshift(`
:::note
    ${translationDisclaimer[languageCode]}
:::         
`);
            }
            else if (target === 'readme') { 
                lines.unshift(getLanguageMenu(languageCode, language) + '\n\n' + "```" + translationDisclaimer[languageCode] + "```\n");
            }
            else {
                lines.unshift("```" + translationDisclaimer[languageCode] + "```\n");

            }
        }
        translatedMd = lines.join('\n');

        await fs.writeFile(path, translatedMd, 'utf8');
    }
}

function getLanguageMenu(languageCode, language) { 
    let md = "\n\n[EN](./README.md)";

    for (let lang of language) {
        if (lang != languageCode) {
            md += `| [${lang}](/i18n/README_${lang}.md) `;
        }
    }
    return md;
}

/**
 * Builds the translated documentation of a given repository.
 *
 * @param {Object} options - The options for the build.
 * @param {string} options.repoOwner - The owner of the repository.
 * @param {string} options.repoName - The name of the repository.
 * @param {string} options.languageCode - The language code for the translation.
 * @param {string} options.savePath - The path where the translated documentation should be saved.
 * @param {string} options.outputPath - The path where the output should be written.
 * @param {string} options.prefixToRemove - The prefix to remove from the file paths.
 * @param {string} options.target - The target doc system, either "manual" or "docusaurus".
 *
 * @returns {Promise<void>} A promise that resolves when the build is complete.
 *
 * @throws {Error} If no save file is found.
 */
async function build(options) {
    const repoOwner = options.repoOwner;
    const repoName = options.repoName;
    const languageCode = options.languageCode;
    const savePath = options.savePath;
    const outputPath = options.outputPath;
    const prefixToRemove = options.prefixToRemove;
    const buildMode = options.buildMode;
    const language = options.language;

    let files = [];
    let savepath  = `${savePath}/${repoOwner}/${repoName}.json`;
    try {
        await fs.access(savepath);
        files = require(savepath);
    } catch {
        throw new Error('No save file found, please run translate first');
    }

    let outPath  = outputPath;
    try {
        await fs.access(outPath);
    } catch {
        // create the out path
        let dirs = outPath.split('/');
        let dir = '';
        for (let i = 0; i < dirs.length - 1; i++) {
            dir += dirs[i] + '/';
            if (!existsSync(dir)) {
                await fs.mkdir(dir);
            }
        }
    }
    
    await buildOutputMd(files, languageCode, outputPath, prefixToRemove, buildMode, language);
}

module.exports = build