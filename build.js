// load dependencies
var rimraf = require('rimraf');
var mkdirp = require('mkdirp');
var fs = require('fs');
var util = require('util');
var getPosts = require('./lib/helpers.js').getPosts;
var buildAmpPost = require('./lib/handlebars.js').buildPost;

// include header.html file if one exists
var header = fs.readFileSync(__dirname + '/header.html', 'utf8');
// include footer.html if it exists
var footer = fs.readFileSync(__dirname + '/footer.html', 'utf8');
var html = header;

getPosts(function(err, posts){
  // console.log(util.inspect(posts));
  var countdown = posts.length;
  posts.forEach(function(post){
    // var full = post.html;
    // console.log('POST >>>>>', post.html, typeof post.html);
    var full = buildAmpPost(post.html);
    var path = __dirname + '/.site';
    var destination = path + '/' + post.slug +'.html';

    rimraf(path, function(err) {
      if(err) throw err;
      mkdirp(path, function(err) {
        if (err) throw err;
        fs.writeFile(destination, full, function(err){
          if (err) throw err;
          console.log('done');
        });
      });
    });



    // fs.mkdir(path, function())

    // html = html + titleLink(post) + marked(post.intro);
    // if(--countdown === 0){
    //   html = html + footer;
    //   // summary view:
    //   fs.writeFile(__dirname+'/index.html', html, function(err){
    //     console.log('done');
    //   });
    //
    // }
  });
});

// need to use a Template Lib for this!!
function titleLink(post) {
  return '<h1><a href="/posts/'+post.slug+'.html">'+post.title+'</a></h1>';
}

// output everything into index.html
// output each post into its respective post-name.html
