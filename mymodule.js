const fs = require('fs');
const path = require('path');

module.exports = function (dir, ext, callback) {
  fs.readdir(dir, function (err, list) {
    if (err) {
      return callback(err); 
    }

    const filteredList = list.filter(file => path.extname(file) === '.' + ext);
    callback(null, filteredList); 
  });
};
