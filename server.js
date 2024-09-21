const http = require('http');
const fs = require('fs');
const _ = require('lodash')

const server = http.createServer((req, res) => {
    
    // lodash
    const num = _.random(0, 20);
    console.log(num);


    // set header content type
    res.setHeader('Content-Type', 'text/html');

    let path = './views/';

    switch(req.url) {
        case '/':
            path += 'index.html';
            break;
        case '/about':
            path += 'about.html';
            break;
        
        default:
            path += '404.html';
            break;
    }

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end("ERROR")
        } else {
            res.end(data)
        }
    });
    
});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
});
// 3000 is the port number
// localhost 127.0.0.1 (own computer)

// port numbers are like doors for the PC
// so you can use the same address but with different programs

// common for local dev is 3000, cant clash one that is used by another program