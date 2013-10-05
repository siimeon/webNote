/* jQuery script for webNote */

$(document).ready(function(){
	var text = '';
	var txt = '';
	//console.log('1');
	if(typeof(Storage)!=="undefined"){
		//console.log('2');
		if (localStorage.text){
			//console.log('3');
			$('#tx1').val(localStorage.text);		
		}
	}
	$('#savebtn').on('click',function (e) {
		 text = $('#tx1').val();
		 localStorage.text = text;
	});
	/* Textarea listener */
	$('#tx1').keyup(function() {
		txt = $('#tx1').val();
		console.log(txt);
		/* Auto Saving */
		if(typeof(Storage)!=="undefined"){
			if (localStorage.text !== ''){
				localStorage.text = txt;
				//console.log('5');
				//console.log(txt);
			}else{
				//console.log('4');
				localStorage.text = txt;
			}
		}
	});

});