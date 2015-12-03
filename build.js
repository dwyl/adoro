// load dependencies
var fs = require('fs');
var util = require('util');
var remarkable = require('remarkable'); // parse markdown into html
var md = new remarkable('full');
var h = require('./lib/helpers.js');

var build = {};
// include header.html file if one exists
build.writeFiles = function(callback) {
    var header = fs.readFileSync(__dirname + '/header.html', 'utf8');
    // include footer.html if it exists
    var footer = fs.readFileSync(__dirname + '/footer.html', 'utf8');
    var html = header;

    h.getPosts(function(err, posts) {
          // console.log(util.inspect(posts));
          var countdown = posts.length;
          posts.map(function(post) {
            // post.full = post content. Puts the data from the post in between the two parts of index.html
              var full = header + md.render(post.full) + footer;
              // console.log('full------------>>>>>>>>>>>>>',full,'<<<<<<<<<<<<<<<<<<<<<');
              // write the post's contents into a new .html file.
              // var regexForImgFormat = /<img[^>]+src="([">$])/g;
              // console.log(full.match(regexForImgFormat));
              // console.log('FULL' + full);
              // full = full.replace(full.match(regexForImgFormat), '\n' + full.match(regexForImgFormat) + '\n');
              // console.log('NEW FULL' + full);
              fs.writeFile(__dirname + '/posts/' + post.slug + '.html', full, function(err) {
                // console.log(__dirname+'/posts/'+post.slug +'.html');
                // console.log('done converting .md post in the .html');
                console.log('done');
              });
              // html = first part of index.html + <h1> tags for the newly created post + first few lines of post
              html = html + titleLink(post) + md.render(post.intro);
              if (--countdown === 0) {
                // add footer, i.e. the ending body and html tags.
                html = html + footer;
                // summary view:
                // add in the html file into index.html
                fs.writeFile(__dirname + '/index.html', html, function(err) {

                });
              }

            // need to use a Template Lib for this!!
            function titleLink(post) {
              return '<h1><a href="/posts/' + post.slug + '.html">' + post.title + '</a></h1>';
            }

            // output everything into index.html
            // output each post into its respective post-name.html
          });
        });
      }();

          module.exports = build;
