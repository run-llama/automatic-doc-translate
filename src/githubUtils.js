const encode = require('gpt-tokenizer').encode;
const {Octokit} = require("@octokit/core");

if (!process.env["GITHUB_PERSONAL_ACCESS_TOKEN"]) {
    console.log("GITHUB_PERSONAL_ACCESS_TOKEN env variable is not set");
    console.log("Please see https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token to create a token");
    process.exit(1);
}


let suportedLanguages = require('./supportedLanguages.json');

const octokit = new Octokit({
    auth: process.env["GITHUB_PERSONAL_ACCESS_TOKEN"]
})


/**
 * Retrieves the latest version of specified file types from a given GitHub repository.
 *
 * @param {string} owner - The owner of the repository.
 * @param {string} repoName - The name of the repository.
 * @param {string} path - The path in the repository to retrieve the files from.
 * @param {Array} filesExtentions - An array of file extensions to consider (default is ['.md', '.mdx']).
 *
 * @returns {Promise<Array>} A promise that resolves to an array of file objects. Each object represents a file in the repository that matches the specified file types and is not a translation.
 */
async function getLastFileVersion(owner, repoName, path, filesExtentions = ['.md', '.mdx']) {
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
        if (file.type === 'file' 
        && filesExtentions.indexOf(file.name.substr(file.name.lastIndexOf('.'))) !== -1
        ) {
            // check if file is a translation
            if (file.name.indexOf('/i18n/') !== -1) {
                continue;
            }
            // check if file path contain one of supportedLanguages.keys()
            let isLikelyTranslation = false;

            for (let langCode of Object.keys(suportedLanguages)) {
                if (file.path.indexOf(`/${langCode}/`) !== -1) {
                    isLikelyTranslation = true;
                    break;
                }
            }
            if (isLikelyTranslation) {
                continue;
            }
            docFiles.push(file);
        }
    }
   
    return docFiles;
}

/**
 * Lists the documentation files from a given GitHub repository and updates the file list with any changes.
 *
 * @param {Array} files - An array of file objects representing the current state of the files.
 * @param {string} owner - The owner of the repository.
 * @param {string} repoName - The name of the repository.
 * @param {string} path - The path in the repository to list the files from.
 *
 * @returns {Promise<void>} A promise that resolves when the file list has been updated. The updated list is directly modified in the `files` parameter.
 */
async function listDocumentationFiles(files, owner, repoName, path, onlyThis=null) {

    let newFiles = await getLastFileVersion(owner, repoName, path);
    // todo: handle onlyThis=['Readme.md', '...'];
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

/**
 * Downloads the documentation files from a given GitHub repository.
 *
 * @param {string} owner - The owner of the repository.
 * @param {string} repoName - The name of the repository.
 * @param {Array} files - An array of file objects to be downloaded. Each object should have a `download_url` property.
 *
 * @returns {Promise<void>} A promise that resolves when all files have been downloaded. The raw content of each file is stored in its `raw` property, and the length of the encoded content is stored in its `token` property.
 */
async function downloadDocumentationFiles(owner, repoName, files) {
    
    for (let file of files) {
        // do not reload file if already loaded
        if (!file.raw) {
            const response = await fetch(file.download_url);
            const text = await response.text();
            
            file.raw = text;
            file.token = encode(text).length;
        }
      
    }
}

module.exports = { 
    listDocumentationFiles: listDocumentationFiles,
    downloadDocumentationFiles: downloadDocumentationFiles
}