#!/usr/bin/env node
const fs = require('fs');
const commander = require('commander');

const supportedLanguages = require('./src/supportedLanguages.json');

const { version } = require('./package.json');


// const validCommands = ['translate', 'update', 'serve', 'build' , 'run'];


function genericOptions(options) {
    if (options.githubtoken) {
        process.env.GITHUB_PERSONAL_ACCESS_TOKEN = options.githubtoken;
    }
    if (options.openaikey) {
        process.env.OPENAI_API_KEY = options.openaikey;
    }
    
    if (options.language.indexOf('all') !== -1) { 
        options.language = Object.keys(supportedLanguages);
    }
}

async function doTranslation(repoOwner, repoName, options) {
    const translate = require('./src/translate.js');
    genericOptions(options);
    loadFile = true;
    for (let langCode of options.language) { 
        console.log("Translating to " + langCode);
        if (!loadFile) {
            translate({
                repoOwner: repoOwner,
                repoName: repoName,
                repoDocDir: options.docPath,
                language : supportedLanguages[langCode],
                languageCode: langCode,
                savePath: options.savePath,
                loadFile: loadFile,
                translateMode: options.mode
            });
        }
        else {
            await translate({
                repoOwner:repoOwner,
                repoName: repoName,
                repoDocDir: options.docPath,
                language : supportedLanguages[langCode],
                languageCode: langCode,
                savePath: options.savePath,
                loadFile: loadFile,
                translateMode: options.mode
            });
        }
        loadFile=false;
    }
}


async function doBuild(repoOwner, repoName, options) {
    const build = require('./src/build.js');
    genericOptions(options);
    for (let langCode of options.language) {
        let outPath = ''
        let prefixToRemove = ''

        if (options.mode == 'docusaurus') {
            outPath = options.outputPath + `/i18n/${langCode}/docusaurus-plugin-content-docs/current/`
            prefixToRemove = options.docPath
        } else if (options.mode == 'readme') {
            outPath = options.outputPath;
        } else {
            outPath = options.outputPath + `/${langCode}`
            prefixToRemove = ''
        }

        console.log("Building translation Md " + langCode + " to " + options.outputPath); 
       
        await build({
                repoOwner:repoOwner,
                repoName: repoName,
                languageCode: langCode,
                savePath: options.savePath,
                outputPath: outPath,
                prefixToRemove: prefixToRemove,
                buildMode: options.mode,
                language: options.language
            }
        );
    }
}

const program = commander;


program
    .name("autotranslatedoc")
    .version(version)
    .description('Tool to translate docfiles automatically')
  

program.command('translate')
    .description('Translate the documentation of a given repository')
    .argument('<repo_owner>', 'The owner of the repository to operate on (e.g. "microsoft")')
    .argument('<repo_name>', 'The name of the repository to operate on (e.g. "vscode")')
    .option('-l, --language <languages>',`The languages to translate to, separated by comma. Use 'all' to translate in all languages (warning it's costly)! supported languages (see supportedLanguages.json): 
    ${Object.keys(supportedLanguages).join(', ')}`,
        (value) => value.split(',')
    )
    .option('-d, --docPath <path_of_target_dir_on_gh_repo>',`The path of the directory to translate, oftenr is "docs"`, '')
    .option('-s, --savePath <directory_path>',`The directory to read the source files from, defaults to "./save"`, `${process.cwd()}/save`)
    .option('-gt, --githubtoken <token>', 'The GitHub token PAT to use for authentication, default to the value of the GITHUB_PERSONAL_ACCESS_TOKEN environment variable')
    .option('-ok, --openaikey <key>', 'The OpenAI key to use for authentication, default to the value of the OPENAI_API_KEY environment variable')
    .option('-m, --mode <mode>', 'The documentation mode to use, either "manual", "readme" or "docusaurus", defaults to "manual"', 'manual')
    .action(doTranslation);


program.command('update')
    .description('Update the translation of the documentation of a given repository according to the one in the save file (deprecated, both update and translate have the same behavior)')
    .argument('<repo_owner>', 'The owner of the repository to operate on (e.g. "microsoft")')
    .argument('<repo_name>', 'The name of the repository to operate on (e.g. "vscode")')
    .option('-l, --language <languages>',`The languages to translate to, separated by comma. Use 'all' to translate in all languages (warning it's costly)! supported languages (see supportedLanguages.json): 
    ${Object.keys(supportedLanguages).join(', ')}`,
        (value) => value.split(',')
    )
    .option('-d, --docPath <path_of_target_dir_on_gh_repo>',`The path of the directory to translate, oftenr is "docs"`, '')
    .option('-s, --savePath <directory_path>',`The directory to read the source files from, defaults to "./save"`, `${process.cwd()}/save`)
    .option('-gt, --githubtoken <token>', 'The GitHub token PAT to use for authentication, default to the value of the GITHUB_PERSONAL_ACCESS_TOKEN environment variable')
    .option('-ok, --openaikey <key>', 'The OpenAI key to use for authentication, default to the value of the OPENAI_API_KEY environment variable')
    .option('-m, --mode <mode>', 'The documentation mode to use, either "manual", "readme" or "docusaurus", defaults to "manual"', 'manual')
    .action(doTranslation);


program.command('build')
    .description('Build the translated documentation of a given repository to a given output directory')
    .argument('<repo_owner>', 'The owner of the repository to operate on (e.g. "microsoft")')
    .argument('<repo_name>', 'The name of the repository to operate on (e.g. "vscode")')
    .option('-l, --language <languages>',`The languages to translate to, separated by comma. Use 'all' to translate in all languages (warning it's costly)! supported languages (see supportedLanguages.json): 
    ${Object.keys(supportedLanguages).join(', ')}`,
        (value) => value.split(',')
    )
    .option('-o, --outputPath <directory_path>',`The directory to output the translated files to, defaults to "./build"`, './build')
    .option('-s, --savePath <directory_path>',`The directory to read the source files from, defaults to "./save"`, `${process.cwd()}/save`)
        .option('-m, --mode <mode>', 'The documentation mode to use, either "manual", "readme" or "docusaurus", defaults to "manual"', 'manual')
    .action(doBuild);



program.command('run')
    .description('Translate the documentation then, build the translated documentation of a given repository to a given output directory.')
    .argument('<repo_owner>', 'The owner of the repository to operate on (e.g. "microsoft")')
    .argument('<repo_name>', 'The name of the repository to operate on (e.g. "vscode")')
    .option('-l, --language <languages>',`The languages to translate to, separated by comma. Use 'all' to translate in all languages (warning it's costly)! supported languages (see supportedLanguages.json): 
    ${Object.keys(supportedLanguages).join(', ')}`,
        (value) => value.split(',')
    )
    .option('-d, --docPath <path_of_target_dir_on_gh_repo>',`The path of the directory to translate, oftenr is "docs"`, '')
    .option('-gt, --githubtoken <token>', 'The GitHub token PAT to use for authentication, default to the value of the GITHUB_PERSONAL_ACCESS_TOKEN environment variable')
    .option('-ok, --openaikey <key>', 'The OpenAI key to use for authentication, default to the value of the OPENAI_API_KEY environment variable')
    .option('-o, --outputPath <directory_path>',`The directory to output the translated files to, defaults to "./build"`, './build')
    .option('-s, --savePath <directory_path>',`The directory to read the source files from, defaults to "./save"`, `${process.cwd()}/save`)
    .option('-m, --mode <mode>', 'The documentation mode to use, either "manual", "readme" or "docusaurus", defaults to "manual"', 'manual')
    .action(async (repoOwner, repoName, options) => {
        await doTranslation(repoOwner, repoName, options);
        await doBuild(repoOwner, repoName, options);

    });


program
    .command('serve')
    .description('Launch a server to serve the translated documentation GUI')
    .argument('<repo_owner>', 'The owner of the repository to operate on (e.g. "microsoft")')
    .argument('<repo_name>', 'The name of the repository to operate on (e.g. "vscode")')
    .option('-s, --savePath <directory_path>',`The directory to read the source files from, defaults to "./save"`, `${process.cwd()}/save`)
    .option('-p, --port <port>', 'The port to use for the server, defaults to 3000', 3000)
    .action((repoOwner, repoName, options) => {
        // TODO
        let path = options.savePath + `/${repoOwner}/${repoName}.json`;
        if (!fs.existsSync(path)) { 
            console.log(`Error: File not found: ${path}`);
            console.log("No save file found, please run translate first");
            return;
        }
        let server = require('./translateServer.js');
        
        server.run(options.port, options.savePath + `/${repoOwner}/${repoName}.json`, repoOwner, repoName);
    });

program.parse();
