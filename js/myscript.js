$(document).ready(function(){
	$('.fadein').hide().fadeIn(2000);
	
	$('.SeeMore2').click(function(){
		$(this).toggleClass('SeeMore2');
		if($(this).hasClass('SeeMore2')){
			$(this).text('Se mere');			
		} else {
			$(this).text('Se mindre');
		}
	});

	$(".selectAll").focus(function() {
    	$(this).select();
	});
});