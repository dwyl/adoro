// load dependencies
var fs = require('fs');
var marked = require('marked'); // parse markdown into html
var html = ''; // string

// include header.html file if one exists
var header = fs.readFileSync(__dirname + '/header.html', 'utf8');
// console.log(header);

// get list of markdown (.md) files in ./posts dir
var posts = fs.readdirSync('posts');
console.log(files);


// loop through all the .md files in ./posts



// include footer.html if it exists
var footer = fs.readFileSync(__dirname + '/footer.html', 'utf8');

// output everything into index.html
// output each post into its respective post-name.html
