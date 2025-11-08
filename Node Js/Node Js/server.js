// // server.js
// const http = require('http');

// const html = `
// <!DOCTYPE html>
// <html>
// <head><title>Node.js Browser Example</title></head>
// <body>
//   <h1>Hello from Node.js Server!</h1>
//   <p>Check the browser console for a message.</p>
//   <script>
//     console.log('This JavaScript is running in your web browser!');
//   </script>
// </body>
// </html>
// `;

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/html' });
//   res.end(html);
// });

// server.listen(3000, () => {
//   console.log('Server running at http://localhost:3000');
// });
var http = require('http');
http.createServer(function(req,res){
  res.writeHead(200,{'Content-Type':'text/html'});
  res.end('Hello World');
}).listen(5000);
console.log('Server running at http://127.0.0.1:5000/');
