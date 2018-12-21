$(function(){

	var url      = window.location.href;  
	var u 		 = url.split('?p=');
	var id 		 = Number(u[1]);

	var prevID,nextID;
	var	METHOD,data_path;

	var scope = $('#data-load-target');
	var $article_title = $('.article-title',scope);
	var $article_content = $('.article-content',scope);
	var $prev = $('.prev-page',scope);
	var $next = $('.next-page',scope);

	var renderData = function(){

		METHOD = "GET";
		data_path = "/json/data.json";

		$.ajax({
		  method: METHOD,
		  url: data_path,
		  dataType: 'json',
		  data: {}
		})
		.done(function(data) {
			console.log( "json get success " + data_path );
			build(data);
		})
		.fail(function() {
			console.log( "json fail " +  data_path );
		})

	}

	var build = function(data,obj){

		var currentID = id;

    	$article_title.html( data.title.rendered );
    	$article_content.html( data.content.rendered );

    	prevID = currentID - 1;
    	nextID = currentID + 1 ;

    	$prev.attr("href",'/events/?p='+ prevID +'');
    	$next.attr("href",'/events/?p='+ nextID +'');

	}
	

	var init = function(){

		renderData()

	}

	init();


})