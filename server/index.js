// const http = require('http')
// const { PORT = 8000 } = process.env 

// const fs = require('fs')
// const path = require('path')
// const PUBLIC_DIRECTORY = path.join(__dirname, '../public')
// const handleExtension = require('./handleExtenstion')
// // Request handler
// // Fungsi yang berjalan ketika ada request yang masuk.
// function onRequest(req, res) {
//     console.log(1)
//     let filePath = path.join(
//         __dirname,
//         '../public',
//         req.url === '/' ? 'index.html' : req.url
//     )
//     handleExtension(filePath, res)
// }

// const server = http.createServer(onRequest)

// // Jalankan server
// server.listen(PORT, '127.0.0.1', () => {
//     console.log('Server sudah berjalan, silahkan buka http://127.0.0.1:%d', PORT)
// })

/**
 * Impor HTTP Standar Library dari Node.js
 * Hal inilah yang nantinya akan kita gunakan untuk membuat
 * HTTP Server
 * */
 const http = require('http')
 const { PORT = 8000 } = process.env // Ambil port dari environment variable
 
 const fs = require('fs')
 const path = require('path')
 
 // Request handler
 // Fungsi yang berjalan ketika ada request yang masuk.
 function onRequest(req, res) {
     
     if(req.url === "/"){
         fs.readFile("./public/index.html", "UTF-8", function(err, html){
             res.writeHead(200, {"Content-Type": "text/html"});
             res.end(html);
         });
     }else if(req.url === "/cars"){
         fs.readFile("./public/search.html", "UTF-8", function(err, html){
             res.writeHead(200, {"Content-Type": "text/html"});
             res.end(html);
         });
     }else if(req.url === "/getcars") {
         const dataPath = path.join(__dirname, '../data', '/cars.json');
         const fileStream = fs.createReadStream(dataPath, "UTF-8");
         res.writeHead(200, {"Content-Type": "application/json"});
         fileStream.pipe(res);
     }else if(req.url.match("\.css$")){
        //  console.log('masuk sini====css===');
         const cssPath = path.join(__dirname, '../public', req.url);
         const fileStream = fs.createReadStream(cssPath, "UTF-8");
         res.writeHead(200, {"Content-Type": "text/css"});
         fileStream.pipe(res);
 
     }else if(req.url.match("\.png$")){
         const imagePath = path.join(__dirname, '../public', req.url);
         const fileStream = fs.createReadStream(imagePath);
         res.writeHead(200, {"Content-Type": "image/png"});
         fileStream.pipe(res);
     }else if(req.url.match("\.svg$")){
        const imagePath = path.join(__dirname, '../public', req.url);
        const fileStream = fs.createReadStream(imagePath);
        res.writeHead(200, {"Content-Type": "image/svg"});
        fileStream.pipe(res);
    }else if(req.url.match("\.jpg$")){
        const imagePath = path.join(__dirname, '../public', req.url);
        const fileStream = fs.createReadStream(imagePath);
        res.writeHead(200, {"Content-Type": "image/jpg"});
        fileStream.pipe(res);
     }else if(req.url.match("\.js$")){
        //  console.log('masuk sini===js====');
         const jsPath = path.join(__dirname, '../public', req.url);
         const fileStream = fs.createReadStream(jsPath);
         res.writeHead(200, {"Content-Type": "application/javascript"});
         fileStream.pipe(res);
     }else{
         fs.readFile("./public/404.html", "UTF-8", function(err, html){
             res.writeHead(404, {"Content-Type": "text/html"});
             res.end(html);
         });
     }
 }
 
 const server = http.createServer(onRequest)
 
 // Jalankan server
 server.listen(PORT, '0.0.0.0', () => {
     console.log('Server sudah berjalan, silahkan buka http://localhost:%d', PORT)
 })