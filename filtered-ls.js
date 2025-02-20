const fs = require('fs');
const path = require('path');

const dirPath = process.argv[2];
const ext = process.argv[3];

fs.readdir(dirPath, (err, list) => {
  if (err) {
    console.error('There was an error reading the directory:', err);
    return;
  }

  list.forEach(file => {
    if (path.extname(file) === '.' + ext) {
      console.log(file);
    }
  });
});
