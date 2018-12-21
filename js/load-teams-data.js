$(function(){

	var	METHOD,data_path;
	var selector = $('#load-cate')
	var	target = $('#data-teams-load-container .row');

	var loadData = function(){

		METHOD = "GET";
		data_path = "/json/team-data-table.json";

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

		for(var i=0; i< data.team.length; i++){

			var t = data.team[i];
	    	var GroupData = t.GroupData;

			selector.append('<a class="dropdown-item" href="#">'+t.GroupName+'</a>');

			for(var j=0; j< GroupData.length; j++){

				var g = GroupData[j];

				target.append('<div class="col-sm-6 col-md-4"><div class="tta-card '+t.GroupTheme+'"><div class="thumbnail" style="background-image:url('+g.thumbURL+')"></div><div class="tta-card-content"><div class="tag">'+g.tag+'</div><div class="tta-card-title">'+g.name+'</div><div class="tta-card-des">'+g.des+'</div><div class="tta-link-group"> <a href="'+g.linkedinURL+'" target="_blank"s><i class="fab fa-linkedin-in"></i></a> <a href="'+g.twitterURL+'" target="_blank"s><i class="fab fa-twitter"></i></a> <a href="'+g.fbURL+'" target="_blank"s><i class="fab fa-facebook-f"></i></a> <a href="#" class="tta-arrow-link"></a></div></div></div></div>')			}

    	}

	}
	

	var init = function(){

		loadData()

	}

	init();


})