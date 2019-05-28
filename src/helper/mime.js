const path = require('path');

const mimeLists = {
    css: 'text/css',
    html: 'text/html',
    js: 'text/javascripte',
    xml: 'text/xml',
    gif: 'image/gif',
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    png: 'image/jpeg',
    json: 'application/json',
    icon: 'image/x-icon',
    pdf: 'application/pdf',
    svg: 'image/svg+xml',
    swf: 'application/x-shockwave-flash',
    tiff: 'image/tiff',
    txt: 'text/plain',
    wav: 'audio/x-wav',
    wma: 'audio/x-ms-wma',
    wmv: 'video/x-ms-wmv',
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
