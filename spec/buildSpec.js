var testPosts = [{path:'/Users/conorcampbell/Documents/FAC/Adoro/adoro/posts/post5.md',title:'Post 5 new post, the toil of tormod',slug:'post-5-new-post,-the-toil-of-tormod',intro:'\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi\nut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit\nin voluptate velit esse cillum dolore eu fugiat nulla pariatur.',mtime:'Tue Dec 01 2015 12:20:34 GMT+0000 (GMT)',full:'# Post 5 new post, the toil of tormod\n\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi\nut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit\nin voluptate velit esse cillum dolore eu fugiat nulla pariatur.\nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia\ndeserunt mollit anim id est laborum.\n'},
                 {path:'/Users/conorcampbell/Documents/FAC/Adoro/adoro/posts/post4.md',title:'Post 4 new post, the toil of tormod',slug:'post-4-new-post,-the-toil-of-tormod',intro:'\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi\nut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit\nin voluptate velit esse cillum dolore eu fugiat nulla pariatur.',mtime:'Tue Dec 01 2015 12:20:34 GMT+0000 (GMT)',full:'# Post 5 new post, the toil of tormod\n\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi\nut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit\nin voluptate velit esse cillum dolore eu fugiat nulla pariatur.\nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia\ndeserunt mollit anim id est laborum.\n'}];
var testPost = testPosts[0];

describe('build', function(){
  it('tests tests in build.js', function(){
    expect(2).toEqual(2);
  });

  it('test the title link function', function(){
   expect(titleLink(testPost)).toEqual('<h1><a href="/posts/'+'post-5-new-post,-the-toil-of-tormod'+'.html">'+'Post 5 new post, the toil of tormod'+'</a></h1>');
  });

  it('test the h.getPosts function', function(){
    var full =
   expect(full).toEqual('<h1><a href="/posts/'+'post-5-new-post,-the-toil-of-tormod'+'.html">'+'Post 5 new post, the toil of tormod'+'</a></h1>');
  });
});
