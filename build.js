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

    // post.full = post content. Puts the data from the post in between the two parts of index.html
    var full = header + marked(post.full) + footer;
    // write the post's contents into a new .html file.
    //console.log('full------------>>>>>>>>>>>>>',full,'<<<<<<<<<<<<<<<<<<<<<');
    fs.writeFile(__dirname+'/posts/'+post.slug +'.html', full, function(err){
      // console.log(__dirname+'/posts/'+post.slug +'.html');
      // console.log('done converting .md post in the .html');
    });

    // html = first part of index.html + <h1> tags for the newly created post + first few lines of post
    html = html + titleLink(post) + marked(post.intro);

    if(--countdown === 0){
      // add footer, i.e. the ending body and html tags.
      html = html + footer;

      // add in the html file into index.html
      fs.writeFile(__dirname+'/index.html', html, function(err){
        console.log('done');
      });
    }
  });
});

// need to use a Template Lib for this!!
function titleLink(post) {
  return '<h1><a href="/posts/'+post.slug+'.html">'+post.title+'</a></h1>';
}

// output everything into index.html
// output each post into its respective post-name.html
