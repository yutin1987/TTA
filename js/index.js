$(function(){

	var ttaIntro = $('.tta-intro');
	var ttaFigure = $(".figures-container");
	var element = $("svg.svg-container g.g");
	var circle = ttaFigure.find('.circle');
	var col = ttaFigure.find('.col');
	var elemW,winW,winH,ttaiH;
	var cirMaxH = 210;


	var SVG = function(){

		elemW = element[0].getBBox().width;
		winW = $(window).width();
		winH = $(window).height();

		ttaiH = ttaIntro.outerHeight();
		ttafW = ttaFigure.width();

		var col_w = col.width();
		var rx = col_w;

		console.log("col_w=",col_w,"rx=",rx)

		if( rx >= cirMaxH){
			rx = cirMaxH;
			console.log("r1=",rx)
		}else{
			console.log("r2=",rx)
			rx = rx;
		}

		var v;
		var b = rx/3;

		if( winW < 576){

			elemW = elemW*0.4;
			console.log("elemW=",elemW,"winW=",winW)
			v = (winW-elemW)/2;
			
			element.css({
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

			element.css({
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

	SVG()
	$(window).resize(SVG);
	

})