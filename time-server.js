const net = require('net');

const server = net.createServer((socket) => {
  const now = new Date();
  
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hour = String(now.getHours()).padStart(2, '0');
  const minute = String(now.getMinutes()).padStart(2, '0');

  const timeString = `${year}-${month}-${day} ${hour}:${minute}\n`;

  socket.write(timeString);
  socket.end();
});

const port = process.argv[2];
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
