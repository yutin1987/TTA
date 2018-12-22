$(function(){

	var app = function(){

		var scope = $('#ReservationModal');
	    var $NavGoNext = $('.link-nav-move-right', scope);
	    var $NavGoPrev = $('.link-nav-move-back', scope);
	    var wrap = $('.modal-body', scope);


	    wrap.on('modal.bs.collapse',function(){

	        wrap.removeClass('moved');

	    })

	    $NavGoNext.bind('click',function(){
	    	wrap.addClass('moved');
	    })

	    $NavGoPrev.bind('click',function(){
	    	wrap.removeClass('moved');
	    })
	}
	
	var init = function(){

		app();

	}

	init();

})