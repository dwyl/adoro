test( 'test if title input field takes a value ',
  function(t){
   var input =  document.getElementById('title') ;
  	
  	 input.value()== 'test';

    t.equals(document.getElementById('title').value ,'test','youve passed');
    t.end();

  

 });