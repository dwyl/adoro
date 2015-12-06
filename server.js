var http =require('http');
var fs = require('fs');
var editor = fs.readFileSync(__dirname + '/public/editor.html');
var index = fs.readFileSync(__dirname + '/index.html');

function handler (req,res){
  console.log("im in the handler", req.url);
   if (req.url ==="/"){
     res.writeHead(200, {
       "Content-Type": "text/html"
     });
     res.end(editor);
   }
   else if (req.url==="/favicon.ico"){

   }
   else if (req.url.indexOf('/all?') > -1){
     console.log("REQ__URL",req.url);
     var data = req.url;
     var elements= data.split('&');
     var sepEl = elements.map(function(element){
       return element.split("=")[1].replace(/\+/g, " ");
     });
     console.log(sepEl);
     function addMdHeading(title,hashes){
        return hashes + title + '\\n';
     }
     function addMdImgUrl (description, url){
        return '\\n'+'!['+description+']('+url+')';
     }
     var MdTitle = addMdHeading(sepEl[0],"###");
     var MdText = sepEl[1];
     var MdURL = addMdImgUrl("description",sepEl[2]);
     var uriDecoded1 = MdURL.replace(/\%2F/g,"/");
     var uriDecoded2 = uriDecoded1.replace(/\%3A/g,"/");

     console.log("DecodedURL----->>>>",uriDecoded2);
     var MD = MdTitle+MdText+uriDecoded2;
     console.log("MDSTUFF---->>>>>",MD);
     fs.writeFile("./posts/"+ sepEl[0] +".md",MD, function(err){
       if (err) throw err;
       console.log('its saved!!!!!');
     });
     res.writeHead(200, {
       "Content-Type": "text/html"
     });
     res.end(index);
  }
}
var port = process.env.PORT || 5000;
http.createServer(handler).listen(port);
console.log('Server listening on'+ port);
