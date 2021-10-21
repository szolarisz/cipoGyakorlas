const http = require('http');
const fs = require('fs');

const port = 4444;

const server = http.createServer((req, res) => {
    /*
        console.log(req.url);
        console.log(req.method);
    */
    switch (true) {
        case req.url === "/" && req.method === "GET":
            fs.readFile("./views/index.html", (err, file) => {
                res.setHeader("Content-Type", "text/html; charset=UTF-8");
                res.writeHead(200);
                res.end(file);
            });
            break;

        case req.url === "/favicon.ico" && req.method === "GET":
            fs.readFile('./favicon.ico', (err, file) => {
                res.setHeader('Content-Type', 'image/ico');
                res.writeHead(200);
                res.end(file);
            });
            break;
        case req.url === "/ferfi" && req.method === "GET":
            fs.readFile('./images/ferficipo.jpg', (err, file) => {
                res.setHeader('Content-Type', 'image/jpg');
                res.writeHead(200);
                res.end(file);
            });
            break;
        case req.url === "/noi" && req.method === "GET":
            fs.readFile('./images/noicipo.jpg', (err, file) => {
                res.setHeader('Content-Type', 'image/jpg');
                res.writeHead(200);
                res.end(file);
            });
            break;
        case req.url === "/cipok" && req.method === "GET":
            fs.readFile('./data/cipok.json', (err, file) => {
                res.setHeader('Content-Type', 'application/json');
                res.writeHead(200);
                res.end(file);
            });
            // console.log("JSON feladva");
            break;
        case req.url === "/script.js" && req.method === "GET":
            fs.readFile('./public/script.js', (err, file) => {
                res.setHeader('Content-Type', 'application/js');
                res.writeHead(200);
                res.end(file);
            });
            break;

        default:
            fs.readFile("/views/hiba.html", (err, file) => {
                res.setHeader('content-Type', 'text/html;charset=UTF-8');
                res.writeHead(404);
                res.end(file);
            });
            break;
    }

});

server.listen(port);