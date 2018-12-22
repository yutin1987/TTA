$(function(){

	"use strict";

	//index view
	var ttaIntro, ttaFigure, svgElement;
	var elemW, winW, winH, ttaiH, ttafW;


	var SetUpItems = function(){

		ttaIntro = $('.tta-intro');
		ttaFigure = $(".figures-container");
		svgElement = $("svg.svg-container g.g");

	}


	var svgmask = function(){

		elemW = svgElement[0].getBBox().width;
		winW = $(window).width();
		winH = $(window).height();

		ttaiH = ttaIntro.outerHeight();
		ttafW = ttaFigure.width();

		var v;

		if( winW < 576){

			elemW = elemW*0.4;
			console.log("elemW=",elemW,"winW=",winW)
			v = (winW-elemW)/2;
			
			svgElement.css({
			  '-webkit-transform' : 'translateX(' + v + 'px) translateY(30%) scale(0.4)',
			  '-moz-transform'    : 'translateX(' + v + 'px) translateY(30%) scale(0.4)',
			  '-ms-transform'     : 'translateX(' + v + 'px) translateY(30%) scale(0.4)',
			  '-o-transform'      : 'translateX(' + v + 'px) translateY(30%) scale(0.4)',
			  'transform'         : 'translateX(' + v + 'px) translateY(30%) scale(0.4)'
			});

			ttaIntro.css({
				'padding-top': ''+ttaiH*0.45+'px'
			})

		}else{

			v = (winW-elemW)/2;

			svgElement.css({
			  '-webkit-transform' : 'translateX(' + v + 'px) translateY(25%)',
			  '-moz-transform'    : 'translateX(' + v + 'px) translateY(25%)',
			  '-ms-transform'     : 'translateX(' + v + 'px) translateY(25%)',
			  '-o-transform'      : 'translateX(' + v + 'px) translateY(25%)',
			  'transform'         : 'translateX(' + v + 'px) translateY(25%)'
			});

			ttaIntro.css({
				'padding-top': ''+ttaiH*0.55+'px'
			})

		}

	}


	var subscribe = function(){

	  window.addEventListener('load', function() {
	    // Fetch all the forms we want to apply custom Bootstrap validation styles to
	    var forms = document.getElementsByClassName('needs-validation');
	    // Loop over them and prevent submission
	    var validation = Array.prototype.filter.call(forms, function(form) {
	      form.addEventListener('submit', function(event) {
	        if (form.checkValidity() === false) {
	          event.preventDefault();
	          event.stopPropagation();
	        }
	        form.classList.add('was-validated');
	      }, false);
	    });
	  }, false);

	}

	var init = function(){

		SetUpItems()
		svgmask();
		subscribe();

		$(window).resize(svgmask);

	}

	init();

});