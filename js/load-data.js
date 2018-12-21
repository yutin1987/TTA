$(function(){

	var	METHOD,data_path;
	var	target = $('#data-programs-load-container');

	var loadData = function(){

		METHOD = "GET";
		data_path = "/json/programs/data.json";

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

		for(var i=0; i< data.program.length; i++){

			var  p = data.program[i];

			var GroupData = data.program[i].GroupData;

			target.append('<div class="tta-program-cards"><div class="program-intro"><div class="group-name">'+p.GroupName+'</div><div class="group-des">'+p.GroupDes+'</div></div><div class="row"></div></div>');
	    		
    		for(var j=0; j< GroupData.length; j++){

    			var g = GroupData[j];
	    		var row = target.find('.row');
	    		row.append('<div class="col-4"><a class="tta-card" href="/programs/"><div class="thumbnail" style="background-image:url('+g.thumbURL+')"></div><div class="tag-container"><span class="tag">'+g.tag+'</span><span class="date">'+g.date+'</span></div><div class="tta-card-title">'+g.title+'</div></a></div>')
    
    		}

    	}




	}
	

	var init = function(){

		loadData()

	}

	init();


})