const lsFilter = require('./lsFilter');

lsFilter(process.argv[2], process.argv[3], function(err, list){
    if (err) {
        return console.error("There was an error: ", err)
    }
    list.forEach((file) => {
        console.log(file);
    })
    });