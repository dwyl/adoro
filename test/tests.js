var h = require('../lib/helpers.js');
var build = require('../build.js');
var fs = require('fs');
var path = require('path');

var exampleMD = require('../exampleData');
var test = require('tape');

test  ('Title slugged', function (t){
  var title = "This Title Will Be Slugged";
  var slugged = h.slug(title);
  t.equal(slugged,"this-title-will-be-slugged");
  t.end();
});

test  ('h.getTitle', function (t){
var title = h.getTitle(exampleMD);
  t.equal(title,"Post EXAMPLE Title is So Awesome");
  t.end();
});

test  ('h.getIntro', function (t){
var intro = h.getIntro(exampleMD);
  t.equal(intro,' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi\n ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit\n in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia');
  t.end();
});

test  ('check if index.html is present', function (t){
  var html = false;
  fs.readFile(path.resolve('./index.html'), function(err){
    if(err) {
      console.log(err);
    }
    else {
      html = true;
    }
  });
  setTimeout(function() {
    t.equal(html, true);
    t.end();
  }, 100);
});

test  ('testing if build.js creates an html version of md file',
  function (t){
    testPost = false;
    fs.writeFile('./posts/testPost.md', '#Example title\nblablabla', function(err){
        if(err) {
          console.log(err);
        }
        else {console.log('file saved');}
    });
    setTimeout(function(){
      build.writeFiles(function(){
        console.log('build done');
      });
    }, 100);
    setTimeout(function(){
      fs.readFile(path.resolve('./posts/example-title.html'), function(err){
        if(err) {
          console.log(err);
        }
        else {
          console.log('I\'m hereeeeee');
          testPost = true;
        }
      });
    }, 200);
    setTimeout(function() {
      t.equal(testPost, true);
      t.end();
    }, 300);


  });

