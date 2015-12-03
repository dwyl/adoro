var http =require('http');
var fs = require('fs');
var index = fs.readFileSync(__dirname + '/public/editor.html');
var editorJs = fs.readFileSync(__dirname + '/public/editor.js');

function handler (req,res){
  console.log("im in the handler", req.url);
   if (req.url ==="/"){
     res.writeHead(200, {
       "Content-Type": "text/html"
     });
     res.end(index);
   }
   else if( req.url==="/editor.js"){
      res.writeHead(200, {
        "Content-Type": "text/js"
      });
      res.end(editorJs);
   }
   else if (req.url==="/favicon.ico"){
   }
   else if (req.url.indexOf('/all') > -1){
     console.log("REQ__URL",req.url);
   }
}
var port = process.env.PORT || 5000;
http.createServer(handler).listen(port);
console.log('Server listening on'+ port);
