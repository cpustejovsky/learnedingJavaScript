const fs = require('fs');

module.exports = function lsFilter (dir, ext, callback) {
    const directory = dir;
    const extension = `.${ext}`;
    const extensionLength = ext.length + 1;

    fs.readdir(directory, function (err, list){
        if (err) {
            return callback(err);
        }

        list = list.filter((file)=> {
            return file.slice(-extensionLength) === extension
        })
    callback(null, list)
    });
};
