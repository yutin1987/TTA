$(function(){

	var	METHOD,data_path;
	var	target = $('#data-news-load-container .row');
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

		for(var i=0; i< data.news.length; i++){

			var n = data.news[i];

			target.append('<div href="news/" class="col-12 col-sm-6 col-md-4"><a class="tta-card"><div class="thumbnail" style="background-image:url('+n.thumbURL+')"></div><div class="tag-container"><span class="tag">'+n.tag+'</span><span class="date">'+n.date+'</span></div><div class="tta-card-title">'+n.title+'</div><div class="tta-card-link"><i class="link-classic cyan__black"></i></div></a></div>');

    	}

	}
	

	var init = function(){

		loadData()

	}

	init();


})