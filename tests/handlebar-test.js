var test         = require('tape');
var buildPost    = require('../lib/handlebars.js');
var fs           = require('fs');


test("amp compliant html", function(t){
  var postData = "blah blah";
  var buildPostResult = buildPost(postData);
  var actual = (buildPostResult.indexOf("<html amp>") > -1) && (buildPostResult.indexOf("blah blah") > -1);
  var expected = true;

  t.equal(actual, expected, "WOOO");
  t.end();
});
