var test         = require('tape');
var handlebars    = require('../lib/handlebars.js');
var fs           = require('fs');


test("amp compliant post.html", function(t){
  var postData = "blah blah";
  var buildPostResult = handlebars.buildPost(postData);
  var actual = (buildPostResult.indexOf("<html amp>") > -1) && (buildPostResult.indexOf("blah blah") > -1);
  var expected = true;

  t.equal(actual, expected, "WOOO");
  t.end();
});

test("amp compliant index.html", function(t){
  var indexData = ["I", "am", "a", "list", "of", "articles"];
  var buildPostResult = handlebars.buildIndex(indexData);
  var actual = (buildPostResult.indexOf("<html amp>") > -1) && (buildPostResult.indexOf("articles") > -1);
  var expected = true;

  t.equal(actual, expected, "test passed");
  t.end();
});
