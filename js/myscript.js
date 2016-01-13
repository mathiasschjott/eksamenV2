$(document).ready(function(){
	$('.fadein').hide().fadeIn(2000);
	
	$('.seeMore').click(function(){
		$(this).toggleClass('seeMore');
		if($(this).hasClass('seeMore')){
			$(this).text('Se mere');			
		} else {
			$(this).text('Se mindre');
		}
	});

	$(".selectAll").focus(function() {
    	$(this).select();
	});
});