import http from 'http';
import url from 'url';
const PORT = 8000;

console.log(http);

http.createServer((req, res) => {
    const myUrl = url.parse(req.url);
    console.log(myUrl);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    let template = '<h1>Este servidor dice "Hola, Mundo"</h1>';
    if (myUrl.pathname !== '/' && myUrl.pathname !== '/home') {
        template = '<h1>Pagina no disponible</h1>';
    }
    res.end(template);
}).listen(PORT);
console.log('Server running at http://localhost:' + PORT);
