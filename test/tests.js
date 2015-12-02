var h = require('../lib/helpers.js');
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

test  ('h.getIntro', function (t){

var html = require('../index.html');
htmlString = JSON.stringify(html);
  t.ok(htmlString);
  t.end();
});
