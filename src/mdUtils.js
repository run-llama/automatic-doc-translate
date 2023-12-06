function parseMdStrToTree(file) {
    const lines = file.split('\n');
    const doc = [];
    let section = { title: '', level: 0, content: '' };
    doc.push(section);
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
        } else {
            section.content += line + '\n';
        }
    }
    return doc;
}

function parseTreeToMdStr(doc, code='') {
    let str = '';
    for (let block of doc) {
        if (code && (block[`title_${code}`] || block[`content_${code}`])) {
            if (block.level > 0) { 
                str += '#'.repeat(block.level) + ' ' + block[`title_${code}`][0] + '\n';
            }
            str += block[`content_${code}`][0];
        }
        else {
            str += '#'.repeat(block.level) + ' ' + block[`title`] + '\n';
            str += block[`content`] + '\n';
        }

    }
    return str;
}

module.exports = {
    parseMdStrToTree: parseMdStrToTree,
    parseTreeToMdStr: parseTreeToMdStr
};