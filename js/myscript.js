$(document).ready(function(){
	$('.SeeMore2').click(function(){
		$(this).toggleClass('SeeMore2');
		if($(this).hasClass('SeeMore2')){
			$(this).text('Se mere');			
		} else {
			$(this).text('Se mindre');
		}
	});
});