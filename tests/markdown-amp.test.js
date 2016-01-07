var test         = require('tape');
var mdAmp        = require('../lib/markdown-amp.js');
var fs           = require('fs');
var mdFileString = fs.readFileSync(__dirname + '/postlink.md').toString();
var mdFileStringImage = fs.readFileSync(__dirname + '/postImage.md').toString();
var mdFileStringImage2 = fs.readFileSync(__dirname + '/example.md').toString();

test("testing heading parsed correctly", function(t) {
  var result = [];
  var actual = mdAmp('# hello world',function(html){
    result.push(html);
  });
  var expected = '<h1>hello world</h1>\n';
  t.equal(result[0] , expected, 'WOOOOO!');
  t.end();
});

test("testing image parsing", function(t) {
  var actual = mdAmp('![test image](https://www.newton.ac.uk/files/covers/968361.jpg)', function(html) {
    console.log("********", html);
    var expected = '<amp-img src = "http://www.newton.ac.uk/files/covers/968361.jpg">\n';
    t.ok(html.indexOf("https://www.newton.ac.uk/files/covers/968361.jpg") > -1, 'SUCCESS!');
    t.end();
  });

});
