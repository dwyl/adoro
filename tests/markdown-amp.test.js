var test         = require('tape');
var mdAmp        = require('../lib/markdown-amp.js');
var fs           = require('fs');
var mdFileString = fs.readFileSync(__dirname + '/../posts/postlink.md').toString();

test("testing heading parsed correctly", function(t) {
  var expected = '<h1>hello world</h1>\n';
  t.equal(mdAmp('# hello world'), expected, 'WOOOOO!');
  console.log(mdAmp(mdFileString));
  console.log(mdAmp('![test image](https://www.cdn.cotap.com/content/uploads/2015/05/07152841/thumb.jpg)'));
  t.end();
});

test("testing link parsed correctly", function(t) {
  var expected = '<p><a href="http://www.bbc.co.uk">Click me</a></p>\n';
  t.equal(mdAmp(mdFileString), expected, 'SUCCESS!');
  t.end();
});
