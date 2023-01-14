const http = require('http');   // http2/http3 to try out
const url = require('url');

const server = http.createServer((req, res) => {
    const pathName = req.url;
    if (pathName === '/' || pathName === '/overview'){
        res.end('This is the Overview!');
    } else if (pathName === '/product') {
        res.end('This is the Product');
    } else {
        res.writeHead(404, {
            'Content-type': 'text/html',
            'custom-header': 'hello-world'
        });
        res.end('<h1>Page not found!</h1>');
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port 8000');
});
