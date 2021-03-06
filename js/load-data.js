
$(function(){

	"use strict";

	var element = $('.dataload');
	var type = element.attr('data-load-type')

	var METHOD;
	var data_path,data_path2;
	var _wrap;
	var html,linksgroup;
	var _events_wrap, _news_wrap, _programs_wrap, _teams_wrap, 
		_indexEvents_wrap, _indexNews_wrap;

	var SetUpItems = function(){

		METHOD = "GET";
		data_path = "/json/"+ type +"-data-table.json";

		_events_wrap = $('#data-events-load-container .row');
		_news_wrap = $('#data-news-load-container .row');
		_programs_wrap = $('#data-programs-load-container');
		_teams_wrap = $('#data-teams-load-container .row');

		_indexEvents_wrap = $('#data-index-events-load-container')
		_indexNews_wrap = $('#data-index-news-load-container');

	}

	var LoadDataController = function(){


		var GetData = function(){

			if(type == "index"){

				data_path = "/json/events-data-table.json";
				data_path2 = "/json/news-data-table.json";

			}

			console.log(data_path)

			$.ajax({
			  method: METHOD,
			  url: data_path,
			  dataType: 'json',
			  data: {}
			})
			.done(function(data) {
				console.log( "json get success " + data_path );
				load(data);
				console.log(type,"source length=",data.source.length)
			})
			.fail(function() {
				console.log( "json fail " +  data_path );
			})

		}();

		var load = function(data){

			for(var i=0; i< data.source.length; i++){

				var a = data.source[i];

				switch(type){

					case "index":

						if( i < 1 ){
							data_path = data_path2;

							$.ajax({
							  method: METHOD,
							  url: data_path,
							  dataType: 'json',
							  data: {}
							})
							.done(function(data) {
								console.log( "json get success " + data_path );

								for(var j=0; j< 4; j++){

									var n = data.source[j];

									_indexNews_wrap.append(' <a href="/news/" class="list-group-item"><div class="tag"><span>'+n.tag+'</span></div><div class="date"><span>'+n.date+'</span></div><div class="title"><span>'+n.title+'</span></div></a>')
								}

							})
							.fail(function() {
								console.log( "json fail " +  data_path );
							})

						}

						_indexEvents_wrap.append('<li class="events-items"><div class="thumbnail" style="background-image:url('+a.thumbURL+')"></div><div class="content"><div class="tag-container"><span class="tag">'+a.tag+'</span><span class="date">'+a.date+'</span></div><div class="event-title">'+a.title+'</div><div class="event-des">'+a.des+'</div><div class="event-link"><a target="_blank" href="/events/"><i class="link-classic cyan__black"></i></a></div></li>')


						break;

					case "events":
						console.log("Now in the events wrap.")

						_wrap = _events_wrap;
						_wrap.append('<div class="col-12 col-sm-6 col-md-3"><a class="tta-card" href="/events/'+a.url+'/" target="_blank"><div class="thumbnail" style="background-image:url('+a.thumbURL+')"></div><div class="tag-container"><span class="tag">'+a.tag+'</span><span class="date">'+a.date+'</span></div><div class="tta-card-title">'+a.title+'</div><div class="tta-card-link"><i class="link-classic cyan__black"></i></div></a></div>');

						break;

					case "news":
						console.log("Now in the news wrap.")

						_wrap = _news_wrap;
						_wrap.append('<div class="col-12 col-sm-6 col-md-3"><a class="tta-card" href="/news/'+a.url+'/" target="_blank"><div class="thumbnail" style="background-image:url('+a.thumbURL+')"></div><div class="tag-container"><span class="tag">'+a.tag+'</span><span class="date">'+a.date+'</span></div><div class="tta-card-title">'+a.title+'</div><div class="tta-card-link"><i class="link-classic cyan__black"></i></div></a></div>');


						break;

					case "programs":
						console.log("Now in the programs wrap.")

						var GroupData = a.GroupData;
						_wrap = _programs_wrap;
						_wrap.append('<div class="tta-program-cards '+a.GroupColor+'" id="'+a.GroupID+'"><div class="program-intro"><div class="group-name">'+a.GroupName+'</div><div class="group-des">'+a.GroupDes+'</div></div><div class="row"></div></div>');

						var row = $('#'+a.GroupID+'').find('.row');
						row.each(function(){

							for(var j=0; j< GroupData.length; j++){

								var g = GroupData[j];

								$(this).append('<div class="col-sm-6 col-md-4"><a class="tta-card" href="/programs/'+g.url+'/" target="_blank"><div class="thumbnail" style="background-image:url('+g.thumbURL+')"></div><div class="tag-container"><span class="tag">'+g.tag+'</span><span class="date">'+g.date+'</span></div><div class="tta-card-title">'+g.title+'</div></a></div>')

							}

						})

						break;

					case "teams":
						console.log("Now in the teams wrap.")


						var GroupData = a.GroupData;


						for(var j=0; j< GroupData.length; j++){

							var sitehtml = "";
							var linkedinhtml = "";
							var twitterhtml = "";
							var fbhtml = "";

							var g = GroupData[j];
							_wrap = _teams_wrap;

							var fblink = g.fbURL;
							var sitelink = g.URL;
							var linkedinlink = g.linkedinURL;
							var twitterlink = g.twitterURL;

							if( sitelink != undefined && sitelink !== "" ){
								sitehtml = '<a href="'+sitelink+'" target="_blank"><i class="far fa-globe-americas"></i></a>'
							}

							if( linkedinlink != undefined && linkedinlink !== "" ){
								linkedinhtml = '<a href="'+linkedinlink+'" target="_blank"><i class="fab fa-linkedin-in"></i></a>'
							}

							if( fblink != undefined && fblink !== "" ){
								fbhtml = '<a href="'+fblink+'" target="_blank" s><i class="fab fa-facebook-f"></i></a>'
							}

							if( twitterlink != undefined && twitterlink !== "" ){
								twitterhtml = '<a href="'+twitterlink+'" target="_blank"><i class="fab fa-twitter"></i></a>'
							}

							html =  '<div class="col-sm-6 col-md-4"> <div class="tta-card '+a.GroupTheme+'"> <div class="thumbnail" style="background-image:url('+g.thumbURL+')"></div><div class="tta-card-content"> <div class="tag">'+g.tag+'</div><div class="tta-card-title">'+g.name+'</div><div class="tta-card-des">'+g.des+'</div><div class="tta-link-group">'+sitehtml+linkedinhtml+twitterhtml+fbhtml+' </div></div></div></div>';						
							
							_wrap.append(html)

						}

						break;
				}


	    	}

	    	if($(window).width() > 767){

				(function( $ ) {
				    // the sameHeight functions makes all the selected elements of the same height
				    $.fn.sameHeight = function() {
				        var selector = this;
				        var heights = [];

				        selector.each(function(){
				            var height = $(this).height();
				            heights.push(height);
				        });

				        // Get the biggest height
				        var maxHeight = Math.max.apply(null, heights);
				        // Show in the console to verify

				        // Set the maxHeight to every selected element
				        selector.each(function(){
				            $(this).height(maxHeight);
				        }); 

				        $('.tta-teams .tta-link-group').css({"position":"absolute","bottom":"1.25rem"})
				    };
				 
				}( jQuery ));
				$('.tta-teams .tta-card-content').sameHeight();

				$(window).resize(function(){
				    // Do it when the window resizes too
				    $('.tta-teams .tta-card-content').sameHeight();
				});

				}
	    	}



		}

	var init = function(){

		SetUpItems()
		LoadDataController()

	}

	if(element.length > 0){
		init();
		console.log("type = ", type)
	}else{
		console.log('load-data.js: Nothing to load!')
	}
	
})