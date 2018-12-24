$(function(){


	"use strict";

	var element = $('.tta-recommand-articles');
	var type = element.attr('data-load-type')

	var prevID,nextID;
	var	METHOD,data_path,data_path2;

	var _wrap;
	var ariclewrap, recommandwrap;
	var aricletype, recommandtype;
	var html;

	var scope,title,content,id;
	var prev,next;

	var SetUpItems = function(){

		METHOD = "GET";
		data_path = "/json/"+ type +"/data.json";
		data_path2  = "/json/"+ type +"-data-table.json";

		scope = $('.tta-article');
		ariclewrap = $('.tta-articles-load-wrap');
		recommandwrap = $('.tta-recommand-articles .row')
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
				rendercontent(data);
			})
			.fail(function() {
				console.log( "json fail " +  data_path );
			})

			$.ajax({
			  method: METHOD,
			  url: data_path2,
			  dataType: 'json',
			  data: {}
			})
			.done(function(data) {
				console.log( "json get success " + data_path2 );
				loadrecommand(data);
			})
			.fail(function() {
				console.log( "json fail " +  data_path2 );
			})

		}();


		var rendercontent = function(data){

			var a = data;

			var date = data.date.split('T');
			date = date[0];

			type = type.toUpperCase()

			html = '<div id="post-'+a.id+'" class="tta-article"><div class="article-cate">'+type+'</div><div class="article-kv" style="background-image: url(/img/news/news01.png)"></div><div class="article-tag-container"><span class="tag">APAC</span><span class="date">'+date+'</span></div><div class="article-title">'+a.title.rendered+'</div><div class="article-social-links"> <a href="" target="_blank"><i class="fab fa-linkedin-in"></i></a> <a href="" target="_blank"><i class="fab fa-twitter"></i></a> <a href="" target="_blank"><i class="fab fa-facebook-f"></i></a> <a href="http://taiwanarena.tech/"><i class="fas fa-globe-americas"></i></a></div><div class="article-content">'+a.content.rendered+'</div><div class="article-nav-links"><a href="/news.html"><i class="link-classic flipped"></i> back</a><div class="article-nav"><a href="javacript:;"><i class="fal fa-angle-left"></i></a><a href="javacript:;"><i class="fal fa-angle-right"></i></a></div></div></div>';

			ariclewrap.html(html);

		}

		var loadrecommand = function(data){

			_wrap = recommandwrap;

			
			for(var i=0; i< 2; i++){

				var a = data.source[i];
				html = '<div class="col-sm-2 col-md-12"><a href="/news/'+a.url+'" class="tta-card"><div class="thumbnail" style="background-image:url('+a.thumbURL+')"></div><div class="tag-container"><span class="tag">'+a.tag+'</span><span class="date">'+a.date+'</span></div><div class="tta-card-title">'+a.title+'</div><div class="tta-card-link"><i class="link-classic cyan__black"></i></div></a></div>';

				_wrap.append(html)			

			}


		}

	}

	var init = function(){

		SetUpItems()
		LoadDataController()

	}

	init();


})