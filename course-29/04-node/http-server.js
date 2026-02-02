import { createServer } from 'node:http';

const serverPort = 5501;

const server = createServer((req, res) => {
    console.log(`a new request was received: ${req.method} ${req.url}`);
    
    /*
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const jsonData = {
      message: "This is your random number",
      value: Math.floor(Math.random() * 101) 
    }
    res.end(JSON.stringify(jsonData));
    */

    res.writeHead(200, { 'Content-Type': 'text/html' });
    const html = `
        <h1>A new super power was unlocked</h1>
        <p>Now I can create HTML content from the server side!<p>`;
    res.end(html);
});

// starts a simple http server locally on the specified port
server.listen(serverPort, '127.0.0.1', () => {
    console.log(`Listening on 127.0.0.1:${serverPort}`);
});