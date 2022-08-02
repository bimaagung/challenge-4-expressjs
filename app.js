const express = require('express');
const router = require('./routes');
const app = express();

const host = 'localhost';
const port = 8080;

function logger(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next();
}

app.use(logger);

let handler = (req, res) => {
  res.json({
    host: host,
    port: port,
  });
};

app.get('/', handler);

app.use('/challenge', router);

app.listen(port, host, () => {
  console.log(`Server berjalan pada http://${host}:${port}`);
});
