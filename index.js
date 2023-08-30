import ejs from 'ejs';
import fs from 'fs';
import http from 'http';

const server = http.createServer((req, res) => {
    fs.readFile('template.ejs', 'utf8', (err, tepmplateContent) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
            return;
        }

        const renderHTML = ejs.render(tepmplateContent, { name: 'Rafael Santos Vieira' });

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(renderHTML);
    })
});

const PORT = 8181;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
