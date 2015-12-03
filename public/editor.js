

var editor = {};

editor.addTen =  function(a){
return a+10;
};

// var page = {
//   element : $('input#titleInput')
//
// };

editor.inputValue = function(){
  var page = {
    element : $('input#titleInput')
  };
  console.log(page.element);
  // var input = document.getElementById('title').value;
  // console.log('inputval',input);
  return page.element;
};
