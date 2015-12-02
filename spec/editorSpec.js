describe("simple test, should pass", function(){
  it('addsTen',function(){
    expect(editor.addTen(10)).toEqual(20);
  });

  it('inputval',function(){
    expect(editor.inputValue()).toEqual("");
  });
});
