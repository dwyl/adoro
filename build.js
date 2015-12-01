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
posts = [{path:'/Users/conorcampbell/Documents/FAC/Adoro/adoro/posts/post5.md',title:'Post 5 new post, the toil of tormod',slug:'post-5-new-post,-the-toil-of-tormod',intro:'\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi\nut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit\nin voluptate velit esse cillum dolore eu fugiat nulla pariatur.',mtime:'Tue Dec 01 2015 12:20:34 GMT+0000 (GMT)',full:'# Post 5 new post, the toil of tormod\n\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi\nut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit\nin voluptate velit esse cillum dolore eu fugiat nulla pariatur.\nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia\ndeserunt mollit anim id est laborum.\n'},
                 {path:'/Users/conorcampbell/Documents/FAC/Adoro/adoro/posts/post4.md',title:'Post 4 new post, the toil of tormod',slug:'post-4-new-post,-the-toil-of-tormod',intro:'\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi\nut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit\nin voluptate velit esse cillum dolore eu fugiat nulla pariatur.',mtime:'Tue Dec 01 2015 12:20:34 GMT+0000 (GMT)',full:'# Post 5 new post, the toil of tormod\n\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi\nut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit\nin voluptate velit esse cillum dolore eu fugiat nulla pariatur.\nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia\ndeserunt mollit anim id est laborum.\n'}];

h.getPosts(function(err, posts){
  // console.log(util.inspect(posts));
  var countdown = posts.length;
  posts.map(function(post){
    var full = header + marked(post.full) + footer;
    console.log('full------------>>>>>>>>>>>>>',full,'<<<<<<<<<<<<<<<<<<<<<');
    fs.writeFile(__dirname+'/posts/'+post.slug +'.html', full, function(err){
      console.log('done');
    });
    html = html + titleLink(post) + marked(post.intro);
    if(--countdown === 0){
      html = html + footer;
      // summary view:
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
