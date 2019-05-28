const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');
const promisify = require('util').promisify;
const stat = promisify(fs.stat);
const readdir = promisify(fs.readdir);
const conf = require('../config/defaultConfig');

const mime = require('./mime');
const mimeicon = require('./mimeicon');
const tplPath = path.join(__dirname, '../template/dir.tpl');
//这个东西只执行一次，且其他逻辑需要等待这个代码走完，才有意义，所以这里用同步
//方法一：这个方法读文件不传第二个参数，是buffer，我们需要转一下
/*const source = fs.readFileSync(tplPath, 'utf-8');
const template = Handlebars.compile(source);*/
//方法二：直接读buffer，读buffer比较快
const source = fs.readFileSync(tplPath);
const template = Handlebars.compile(source.toString());

module.exports = async function (req, res, filePath) {
    try {
        const stats = await stat(filePath);
        if (stats.isFile()) {
            const contentType = mime(filePath);
            res.statusCode = 200;
            res.setHeader('Content-Type', contentType);
            fs.createReadStream(filePath).pipe(res);
            /*fs.readFile(filePath, (err, data) => {
          res.end(data);
      });*/
        } else if (stats.isDirectory()) {
            const files = await readdir(filePath);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            const dir = path.relative(conf.root, filePath);
            console.log(__dirname);
            const data = {
                title: path.basename(filePath),
                dir: dir ? `/${dir}` : '',
                //file
                files: files.map(file => {
                    return {
                        file,
                        icon: 'http://' + conf.hostname+':'+conf.port + '/src/public/img/' + mimeicon(file) + '.png'
                    };
                })
            };
            res.end(template(data));
            //res.end(files.join(','));
        }
    } catch (ex) {
        console.error(ex);
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end(`${filePath}is not a directory or file`);
    }
};
