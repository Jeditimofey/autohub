$(document).ready(function(){

	$(".filter-logo").click(function(){
		$(".filter-menu").fadeIn();
		$(".add-logo").hide();
		$(".filter-logo").hide();
		$(".close-logo").show();
	});

	$('.close-logo').click(function(){
		$('.filter-menu').fadeOut('fast');
		$(".add-logo").show();
		$(".filter-logo").show();
		$(this).hide();
	}); 

});	

	