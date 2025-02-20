const http = require('http');

const urls = process.argv.slice(2);
const results = [];
let count = 0;

function printData(index, data) {
  results[index] = data;
  count++;

  if (count === 3) {
    results.forEach(result => console.log(result));
  }
}

urls.forEach((url, index) => {
  http.get(url, (response) => {
    let data = '';
    response.setEncoding('utf8');

    response.on('data', (chunk) => {
      data += chunk;
    });

    response.on('end', () => {
      printData(index, data);
    });
  });
});
