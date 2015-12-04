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
        // edit full to make images amp compliant:
        if (full.indexOf('<img') > -1) {
          full = imageToAmpImage(full);
          // console.log('IS THIS WORKING?! >>>>>>>', full);
        };
        // console.log(full);
        var htmlFileName = __dirname + '/posts/' + post.slug + '.html';
        fs.writeFile(htmlFileName, full, function(err) {
          // console.log('done converting .md post in the .html');
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

      // function to 'slice' and 'add' something to a string:
      function sliceStringAdd(str, start, cut, end, add) {
         var str1 = str;
         var str2 = str;
         str1 = str1.slice(start, cut);
         str2 = str2.slice(cut, end);
         str = str1 + add + str2
         return str;
       }

      // take <img> tags and convert to <amp-img> with 'height' and 'width' attributes
      function imageToAmpImage(fullData) {
        // console.log(fullData);
        var htmlImageTags = fullData.match(/<img\s+[^>]*?\bsrc=\"[^\"]*?\"[^>]*>/g);
        // console.log(typeof htmlImageTags[0]); //string
        htmlImageTags.forEach(function(value, index, array){
          var newValue = value.replace('<img', '<amp-img');
          // console.log('REPLACE >>>>>>>>>>>>>', newValue);
          newValue = sliceStringAdd(newValue, 0, -1, newValue.length, ' height = 1 width = 1 layout = responsive');
          // console.log('SLICE >>>>>>>>>>>>', newValue);
          fullData = fullData.replace(value, newValue);
          // console.log('FULL DATA >>>>>>>>>>>>', fullData); //fullData = string;
        });
        // console.log('FULL DATA >>>>>>>>>>>>', fullData); //fullData = string;
        return fullData;
      };

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

console.log(build);
