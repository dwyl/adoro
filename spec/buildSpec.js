var testData = 

describe('build', function(){

  it('tests tests in build.js', function(){
    expect(2).toEqual(2);
  });

  it('tests tests in build.js', function(){
   expect(titleLink(testData)).toEqual('<h1><a href="/posts/'+'post-4-new-post,-the-toil-of-tormod'+'.html">'+'Post 4 new post, the toil of tormod'+'</a></h1>');
  });
});
