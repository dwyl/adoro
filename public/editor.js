document.getElementById('submit').addEventListener('click',function() {
	console.log('BOOM');
	var title=  document.getElementById('title').value;
	var text=  document.getElementById('textBox').value;
	var imgUrl =  document.getElementById('imgUrl').value;
	var all = title+ text+ imgUrl;

	var request = new XMLHttpRequest();

  request.onreadystatechange = function() {
    console.log(request.responseText);
  };
  request.open('POST', "/all" + all ,true);
  request.send();
});
