var test         = require('tape');
var mdAmp        = require('../lib/markdown-amp.js');
var fs           = require('fs');
var mdFileString = fs.readFileSync(__dirname + '/../posts/postlink.md').toString();
var mdFileStringImage = fs.readFileSync(__dirname + '/../posts/postImage.md').toString();


test("testing heading parsed correctly", function(t) {
  var expected = '<h1>hello world</h1>\n';
  t.equal(mdAmp('# hello world'), expected, 'WOOOOO!');
  t.end();
});

test("testing link parsed correctly", function(t) {
  var expected = '<p><a href="http://www.bbc.co.uk">Click me</a></p>\n';
  t.equal(mdAmp(mdFileString), expected, 'SUCCESS!');
  t.end();
});

test("testing image parsed correctly", function(t) {
  var expected = '<p><amp-img width="60em" height="40em" layout="responsive" src="http://cdn.shopify.com/s/files/1/0185/5092/products/persons-0106.png?v=1369544013" alt="test image"></p>\n';
  t.equal(mdAmp(mdFileStringImage), expected, 'YES!');
  t.end();
});
