$(function(){

	var NavbarVisual = function(){

		$navCollapse = $('#navbarNav');
		$body = $('body');

	    var $NavGoNext = $('.link-nav-move-right');
	    var $NavGoPrev = $('.link-nav-move-back');
	    var navWrap = $('.tta-navbar-nav-wrap');

	    $navCollapse.on('show.bs.collapse',function(){

	        var $this = $(this);
	        bodyScrollLock.enableBodyScroll($this);
	        lastScrollTop = $(window).scrollTop();
	        $body.css({'top': -lastScrollTop});
	        $body.css({"overflow-y":"hidden"});
	        

	    }).on('hide.bs.collapse',function(){

	        bodyScrollLock.clearAllBodyScrollLocks()
	        $body.css({"overflow-y":"visible","overflow-x":"hidden"});
	        navWrap.removeClass('moved');
	        $body.css({'top': 'auto'});
	        $(window).scrollTop(lastScrollTop);

	    })

	    $NavGoNext.bind('click',function(){
	    	navWrap.addClass('moved');
	    })

	    $NavGoPrev.bind('click',function(){
	    	navWrap.removeClass('moved');
	    })

	}


	var search = function(){


		var element = $('.filter-search');
		var inputGroup = $('.input-group');
		var inputSearch = $('.filter-search-input')

		if( element.length > 0){

			element.bind('click',function(){

				inputGroup.toggleClass('search-active')
				inputSearch.toggleClass('active')
				$(this).toggleClass('active')


			})

		}

	}

	var scrolling = function(){

		var element = $('.page-scrolltop')
		var threshhold = 861;
		var body = $('html, body');

		if( element.length > 0){

			$(window).scroll(function(){


				var y = $(window).scrollTop();
				var maxH = $('body').height();
				var v = maxH - y;

				//console.log("y=",y,maxH)

				if( v <= threshhold ){

					element.css({'bottom':'290px','position':'absolute'})

				}else{

					element.css({'bottom':'10%','position':'fixed'})


				}


			})


			element.bind('click',function(){

				body.animate({scrollTop:0},500)


			})

		}



	}


	var init = function(){

		NavbarVisual();
		search();
		scrolling();

	}

	init();

})