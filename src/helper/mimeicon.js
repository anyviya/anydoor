const path = require('path');

const mimeLists = {
    css: 'css',
    html: 'html',
    js: 'js',
    xml: 'xml',
    gif: 'gif',
    jpg: 'jpg',
    jpeg: 'jpeg',
    png: 'png',
    json: 'json',
    icon: 'icon',
    pdf: 'pdf',
    svg: 'svg',
    swf: 'swf',
    tiff: 'tiff',
    txt: 'txt',
    text: 'txt',
    wav: 'wav',
    wma: 'wma',
    wmv: 'wmv',
};
module.exports = (filePath) => {
    let ext = path.extname(filePath)
        .split('.')
        .pop()
        .toLowerCase();
    if(!ext) {
        ext = filePath;
    }
    return mimeLists[ext] || mimeLists['text'];
};
