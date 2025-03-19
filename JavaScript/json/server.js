const { log } = require('console');
const http = require('http');
const users = new Array(10).fill(0).map((itm, idx) => {
  const age = Math.floor(Math.random() * 100);
  const name = `Jack--${idx}`;
  return ({ name, age });
});

const server = http.createServer((req, res) => {
  res.end(JSON.stringify(users));
});

server.listen(3000, () => {
  console.log('server is running at port 3000');
})