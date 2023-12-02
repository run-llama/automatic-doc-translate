#!/usr/bin/env node

const commander = require('commander');
const supportedLanguages = require('./supportedLanguages.json');

const { version } = require('./package.json');


const validCommands = ['translate', 'update', 'serve', 'build'];



const program = commander
    .version(version)
    .description('Tool to translate docfiles automatically')
    .argument('<command>', 'The operation to operate, either "translate", "update", "serve" or "build"')
    .argument('<repo_owner>', 'The owner of the repository to operate on (e.g. "microsoft")')
    .argument('<repo_name>', 'The name of the repository to operate on (e.g. "vscode")')
    .option('-l, --language <languages>',`The languages to translate to, separated by commas, supported languages (see supportedLanguages.json): 
    ${Object.keys(supportedLanguages).join(', ')}`,
        (value) => value.split(',')
    )

    .option('-docPath, --docPath <path_of_target_dir_on_gh_repo>',`The path of the directory to translate, defaults to "docs"`, 'docs')


    .option('-o, --outputPath <directory_path>',`The directory to output the translated files to, defaults to "./build"`, './build')
    .option('-s, --savePath <directory_path>',`The directory to read the source files from, defaults to "./save"`, `${__dirname}/save`) 

    .option('-gt, --githubtoken <token>', 'The GitHub token PAT to use for authentication, default to the value of the GITHUB_PERSONAL_ACCESS_TOKEN environment variable')
    .option('-ok, --openaikey <key>', 'The OpenAI key to use for authentication, default to the value of the OPENAI_API_KEY environment variable')

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


async function run() {
    const translate = require('./translate');

    switch (program.processedArgs[0]) {

        case 'translate':
            
            let loadFile = true;
            for (let langCode of options.language) { 
                console.log("Translating to " + langCode);
                await translate.translateDoc(
                    program.args[1], 
                    program.args[2], 
                    options.docPath, 
                    supportedLanguages[langCode],
                    options.language,
                    options.savePath,
                    loadFile
                );
                loadFile=false;
            }
    
            
            break;
        case 'update':

            for (let langCode of options.language) { 
                console.log("Updating translation in " + langCode);
                await translate.translateDoc(
                    program.args[1], 
                    program.args[2], 
                    options.docPath, 
                    supportedLanguages[langCode],
                    options.language,
                    options.savePath,
                    loadFile
                );
                loadFile=false;
            }
            break;
        case 'serve':
            // todo launch server with more options
            require('./serve');
            break;
        case 'build':
            for (let langCode of options.language) {
                console.log("Building translation Md " + langCode + " to " + options.outputPath); 
                translate.buildDoc(
                    program.args[1],
                    program.args[2],
                    langCode,
                    options.savePath,
                    options.outputPath
                );
            }
            break;
     }
}

run()