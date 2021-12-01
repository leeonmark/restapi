const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('restapi');
});

server.listen(port, hostname, () => {
    console.log('Server running at http://${hostname}:$(port)/');
});

//parser application/json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//panggil routes
var routes = require('./routes');
routes(app);

app.listen(3000, () => {
    console.log(`Server started on port`);
});