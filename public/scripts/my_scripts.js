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

	$('.mark-list-filter li').click(function(){
			if($(document).width() < 768){
				$(this).toggleClass('checked');

				if($(this).hasClass('checked')) {
					$(this).append('<a href="#" class="check"></a>');
				} else {
					$(this).children('.check').remove();
				}
			}
	});

	$('.check-desk').click(function(){
			$(this).toggleClass('checked-desk');		
	});


});	
