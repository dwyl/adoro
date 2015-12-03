

document.getElementById('submit').addEventListener('click',function() { 
	console.log('BOOM');
	var title=  document.getElementById('title').value;
	var text=  document.getElementById('textBox').value;
	var imgUrl =  document.getElementById('imgUrl').value;
	console.log(title , text , imgUrl);
	return title + text + imgUrl;
});