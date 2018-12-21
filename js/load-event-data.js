$(function(){

	var	METHOD,data_path;
	var	target = $('#data-events-load-container .row');

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

			target.append('<div class="col-12 col-sm-6 col-md-3"><a class="tta-card" href="/events/"><div class="thumbnail" style="background-image:url('+e.thumbURL+')"></div><div class="tag-container"><span class="tag">'+e.tag+'</span><span class="date">'+e.date+'</span></div><div class="tta-card-title">'+e.title+'</div><div class="tta-card-link"><i class="link-classic cyan__black"></i></div></a></div>');

    	}

	}
	

	var init = function(){

		loadData()

	}

	init();


})