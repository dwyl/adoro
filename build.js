// load dependencies
var fs = require('fs');
var util = require('util');
var marked = require('marked'); // parse markdown into html
var h = require('./lib/helpers.js');

// include header.html file if one exists
var header = fs.readFileSync(__dirname + '/header.html', 'utf8');
// include footer.html if it exists
var footer = fs.readFileSync(__dirname + '/footer.html', 'utf8');
var html = header;

h.getPosts(function(err, posts){
  // console.log(util.inspect(posts));
  var countdown = posts.length;
  posts.map(function(post){
    html = html + marked(post.intro);
    if(--countdown === 0){
      html = html + footer;
      fs.writeFile(__dirname+'/index.html', html, function(err){
        console.log('done');
      });
    }
  })
});


// output everything into index.html
// output each post into its respective post-name.html
