


describe(" should pass", function(){
  it('addsTen',function(){
    expect(editor.addTen(10)).toEqual(20);
  });

  it("title input value is equal to 'titleTest'",function(){
  expect(editor.inputValue()).toBe("titleTest");
  });
});
