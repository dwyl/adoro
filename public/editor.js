

document.getElementById('submit').addEventListener('click',function() { 
	console.log('BOOM');
	var form = document.getElementById('myForm').value;
	console.log('FORM',form);
	var title=  document.getElementById('title').value;
	var text=  document.getElementById('textBox').value;
	var imgUrl =  document.getElementById('imgUrl').value;
	console.log(addMdHeading(title, "###") +text + addMdImgUrl('image', imgUrl));
	return addMdHeading(title, "###") + '\\n'+ text + '\\n'+ addMdImgUrl('image', imgUrl);

});


function addMdHeading(title,hashes){
	return hashes + title; 
}

function addMdImgUrl(description, url){
   return   '!['+ description+']('+ url+')';	
}