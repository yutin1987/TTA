$(function(){


	"use strict";

	var element = $('.tta-recommand-articles');
	var type = element.attr('data-load-type')

	var prevID,nextID;
	var	METHOD,data_path;

	var ariclewrap, recommandwrap;
	var aricletype, recommandtype;

	var scope,title,content,id;
	var prev,next;

	var SetUpItems = function(){

		METHOD = "GET";
		data_path = "/json/"+ type +"/data.json";

		scope = $('.tta-article');
		ariclewrap = $('.tta-articles-load-wrap');
		recommandwrap = $('.tta-recommand-articles')
		title = $('.article-title');
		content = $('.article-content')

		prev = $('.prev-page');
		next = $('.next-page');

	}

	var LoadDataController = function(){



		var GetData = function(){

			$.ajax({
			  method: METHOD,
			  url: data_path,
			  dataType: 'json',
			  data: {}
			})
			.done(function(data) {
				console.log( "json get success " + data_path );
				console.log(data)
				//build(data);
			})
			.fail(function() {
				console.log( "json fail " +  data_path );
			})


		}();


		var build = function(data){

			var currentID = id;

	    	$article_title.html( data.title.rendered );
	    	$article_content.html( data.content.rendered );

	    	prevID = currentID - 1;
	    	nextID = currentID + 1 ;

	    	$prev.attr("href",'/events/?p='+ prevID +'');
	    	$next.attr("href",'/events/?p='+ nextID +'');

		}

	}

	var init = function(){

		SetUpItems()
		LoadDataController()

	}

	init();


})