$(function(){

	var	METHOD,data_path;
	var	target = $('#data-index-events-load-container');

	var loadData = function(){

		METHOD = "GET";
		data_path = "/json/event-data-table.json";

		$.ajax({
		  method: METHOD,
		  url: data_path,
		  dataType: 'json',
		  data: {}
		})
		.done(function(data) {
			console.log( "json get success " + data_path );
			update(data);
		})
		.fail(function() {
			console.log( "json fail " +  data_path );
		})

	}

	var update = function(data){

		for(var i=0; i< data.event.length; i++){

			var e = data.event[i];

			console.log(e)

			target.append('<li class="events-items"><div class="thumbnail" style="background-image:url('+e.thumbURL+')"></div><div class="content"><div class="tag-container"><span class="tag">'+e.tag+'</span><span class="date">'+e.date+'</span></div><div class="event-title">'+e.title+'</div><div class="event-des">'+e.des+'</div><div class="event-link"><a target="_blank" href="/events/"><i class="link-classic cyan__black"></i></a></div></li>')    	

		}

	}
	

	var init = function(){

		loadData()

	}

	init();


})


$(function(){

	var	METHOD,data_path;
	var	target = $('#data-index-news-load-container');
	var row = target.find('.row');

	var loadData = function(){

		METHOD = "GET";
		data_path = "/json/news-data-table.json";

		$.ajax({
		  method: METHOD,
		  url: data_path,
		  dataType: 'json',
		  data: {}
		})
		.done(function(data) {
			console.log( "json get success " + data_path );
			update(data);
		})
		.fail(function() {
			console.log( "json fail " +  data_path );
		})

	}

	var update = function(data){

		for(var j=0; j< 4; j++){

			var n = data.news[j];

			target.append(' <a href="/news/" class="list-group-item"><div class="tag"><span>'+n.tag+'</span></div><div class="date"><span>'+n.date+'</span></div><div class="title"><span>'+n.title+'</span></div></a>')
		}

	}
	

	var init = function(){

		loadData()

	}

	init();


})