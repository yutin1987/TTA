$(function(){

	"use strict";

	//index view
	var elem;
	var name,thumb,des;

	var modal;
	var nameinside,desinside,thumbinside;

	var links;

	var METHOD;
	var data_path;

	var SetUpItems = function(){

		METHOD = "GET";
		data_path = "/json/partners-data-table.json";

		elem = $('.dataptners');
		name = elem.find('.name');

		modal = $('#title-card');
		nameinside = modal.find('.name');
		desinside = modal.find('.intro');
		thumbinside = modal.find('.partner-thumb');
		links = modal.find('.social-links');


	}

	var LoadDataController = function(){

		var GetData = function(){

			console.log(data_path)

			$.ajax({
			  method: METHOD,
			  url: data_path,
			  dataType: 'json',
			  data: {}
			})
			.done(function(data) {
				console.log( "json get success " + data_path );
				update(data);
				addEventListener(data);
				console.log(data)
			})
			.fail(function() {
				console.log( "json fail " +  data_path );
			})
		}();


		var update = function(data){

			for(var i =0; i < data.length ; i++){

				elem.eq(i).attr("data-query",i);
				elem.eq(i).css('background-image','url('+data[i].thumbURL+')');
				elem.eq(i).find('.name').text(data[i].name)
			}
		}

		var addEventListener = function(data){


			elem.bind('click',function(){

				links.html("");

				var i = $(this).attr('data-query');

				nameinside.text(data[i].name);
				desinside.text(data[i].des);
				thumbinside.css('background-image','url('+data[i].thumbURL+')')

				console.log("url=",data[i].linkedinURL)

				if( data[i].linkedinURL != undefined && data[i].linkedinURL !== ""){
					links.append('<a href="'+data[i].linkedinURL+'" target="_blank"><i class="fab fa-linkedin-in"></i></a>')
				}

				if( data[i].twitterURL != undefined && data[i].twitterURL !== ""){
					links.append('<a href="'+data[i].twitterURL+'" target="_blank"><i class="fab fa-twitter"></i></a>')
				}

				if( data[i].fbURL != undefined && data[i].fbURL !== ""){
					links.append('<a href="'+data[i].fbURL+'" target="_blank"><i class="fab fa-facebook-f"></i></a>')
				}

				if( data[i].instaURL != undefined && data[i].instaURL !== ""){
					links.append('<a href="'+data[i].instaURL+'" target="_blank"><i class="fab fa-instagram"></i></a>')
				}

				if( data[i].ytubeURL != undefined && data[i].ytubeURL !== ""){
					links.append('<a href="'+data[i].ytubeURL+'" target="_blank"><i class="fab fa-youtube"></i></a>')
				}

			})

		}

	}

	var init = function(){

		SetUpItems()
		LoadDataController()

	}

	init();

});