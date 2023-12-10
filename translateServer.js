
const express = require('express');
const fs = require('fs').promises;

function run(port=3000, savePath, repoOwner, repoName)  { 
    const app = express();

    app.use(express.static('public'));
    
    app.get('/currentSave', async (req, res) => {

        let saveObj = {
            repoOwner,
            repoName,
            data: JSON.parse(await fs.readFile(savePath, 'utf-8'))
        }
        res.json(saveObj);
    });

    app.listen(port, () => {
        console.log(`Translation GUI app listening on port ${port}!`);
    });
}


module.exports = {
    run
};