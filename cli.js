#!/usr/bin/env node

const commander = require('commander');

const supportedLanguages = require('./src/supportedLanguages.json');

const { version } = require('./package.json');


const validCommands = ['translate', 'update', 'serve', 'build' , 'run'];



const program = commander
    .version(version)
    .description('Tool to translate docfiles automatically')
    .argument('<command>', 'The operation to operate, either "translate", "update", "serve" or "build"')
    .argument('<repo_owner>', 'The owner of the repository to operate on (e.g. "microsoft")')
    .argument('<repo_name>', 'The name of the repository to operate on (e.g. "vscode")')
    .option('-l, --language <languages>',`The languages to translate to, separated by comma. Use 'all' to translate in all languages (warning it's costly)! supported languages (see supportedLanguages.json): 
    ${Object.keys(supportedLanguages).join(', ')}`,
        (value) => value.split(',')
    )

    .option('-d, --docPath <path_of_target_dir_on_gh_repo>',`The path of the directory to translate, oftenr is "docs"`, '')


    .option('-o, --outputPath <directory_path>',`The directory to output the translated files to, defaults to "./build"`, './build')
    .option('-s, --savePath <directory_path>',`The directory to read the source files from, defaults to "./save"`, `${__dirname}/save`) 

    .option('-gt, --githubtoken <token>', 'The GitHub token PAT to use for authentication, default to the value of the GITHUB_PERSONAL_ACCESS_TOKEN environment variable')
    .option('-ok, --openaikey <key>', 'The OpenAI key to use for authentication, default to the value of the OPENAI_API_KEY environment variable')
    .option('-m, --mode <mode>', 'The documentation mode to use, either "manual" or "docusaurus", defaults to "docusaurus"', 'manual')

    .action((command) => {
        if (!validCommands.includes(command)) {
            console.error(`Invalid command: ${command}`);
            process.exit(1);
        }
    })
    .parse(process.argv);

const options = program.opts();

if (options.githubtoken) {
    process.env.GITHUB_PERSONAL_ACCESS_TOKEN = options.githubtoken;
}
if (options.openaikey) {
    process.env.OPENAI_API_KEY = options.openaikey;
}

if (options.language.indexOf('all') !== -1) { 
    options.language = Object.keys(supportedLanguages);
}

async function run() {
    const translate = require('./src/translate');
    const build = require('./src/build');

    let loadFile = true;

    switch (program.processedArgs[0]) {

        case 'translate':
            for (let langCode of options.language) { 
                console.log("Translating to " + langCode);
                await translate({
                    repoOwner: program.args[1],
                    repoName: program.args[2],
                    repoDocDir: options.docPath,
                    language : supportedLanguages[langCode],
                    languageCode: langCode,
                    savePath: options.savePath,
                    loadFile: loadFile
                });
                loadFile=false;
            }
    
            
            break;
        case 'update':

            for (let langCode of options.language) { 
                console.log("Updating translation in " + langCode);
                await translate({
                    repoOwner: program.args[1],
                    repoName: program.args[2],
                    repoDocDir: options.docPath,
                    language : supportedLanguages[langCode],
                    languageCode: langCode,
                    savePath: options.savePath,
                    loadFile: loadFile
                });
                loadFile=false;
            }
            break;
        case 'serve':
            // todo launch server with more options
            require('./serve');
            break;
        case 'build':
            for (let langCode of options.language) {
                let outPath = ''
                let prefixToRemove = ''

                if (options.mode == 'docusaurus') {
                    console.log('Using docusaurus mode')
                    outPath = options.outputPath + `/i18n/${langCode}/docusaurus-plugin-content-docs/current/`
                    prefixToRemove = options.docPath
                } else {
                    console.log('Using manual mode')
                    outPath = options.outputPath + `/${langCode}`
                    prefixToRemove = ''
                }

                console.log("Building translation Md " + langCode + " to " + options.outputPath); 
               
                build({
                        repoOwner: program.args[1],
                        repoName: program.args[2],
                        languageCode: langCode,
                        savePath: options.savePath,
                        outputPath: outPath,
                        prefixToRemove: prefixToRemove,
                        target: options.mode
                    }
                );
            }
            break;
        case 'run':
            // TODO: clean up this code
            // both translate and build
            loadFile = true;
            for (let langCode of options.language) { 
                console.log("Translating to " + langCode);
                await translate({
                    repoOwner: program.args[1],
                    repoName: program.args[2],
                    repoDocDir: options.docPath,
                    language : supportedLanguages[langCode],
                    languageCode: langCode,
                    savePath: options.savePath,
                    loadFile: loadFile
                });
                loadFile = false;
            }

            for (let langCode of options.language) {
                let outPath = ''
                let prefixToRemove = ''

                if (options.mode == 'docusaurus') {
                    console.log('Using docusaurus mode')
                    outPath = options.outputPath + `/i18n/${langCode}/docusaurus-plugin-content-docs/current/`
                    prefixToRemove = options.docPath
                } else {
                    console.log('Using manual mode')
                    outPath = options.outputPath + `/${langCode}`
                    prefixToRemove = ''
                }

                console.log("Building translation Md " + langCode + " to " + options.outputPath); 
                


                build({
                        repoOwner: program.args[1],
                        repoName: program.args[2],
                        languageCode: langCode,
                        savePath: options.savePath,
                        outputPath: outPath,
                        prefixToRemove: prefixToRemove
                    });
            }
            break;
     }
}

run()