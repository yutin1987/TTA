$(function () {

	"use strict";

	var _datepicker;

	var _calendar;

	var SetUpItems = function(){

		_datepicker = $('#datepicker');
		_calendar = $('#calendar');

	}

	var AppController = function(){


	    _datepicker.datepicker({
	        uiLibrary: 'bootstrap4',
	        iconsLibrary: 'fontawesome',
	        icons: {
	             rightIcon: '<span class="fal fa-angle-down"></span>'
	        }
	    });

		var options = {
			events_source: '/json/events.json.php',
			view: 'month',
			tmpl_path: '/tmpls/',
			tmpl_cache: false,
			day: '2018-09-18',
			onAfterEventsLoad: function(events) {
				if(!events) {
					return;
				}
				var list = $('#eventlist');
				list.html('');

				//console.log(events)

				$.each(events, function(key, val) {
					var e = '<a href="' + val.url + '">' + val.title + '</a>';
					$(document.createElement('li'))
						.html(e)
						.appendTo(list);

					console.log(key,val)
				});
				
				var reverse = moment.utc("2018-09-15 19:30").valueOf()

				console.log(reverse)

			},
			onAfterViewLoad: function(view) {
				$('.filter-selector .nowyear .getmonth').text(this.getTitle());
				$('.filter-selector .input-group a').removeClass('active');
				$('a[data-calendar-view="' + view + '"]').addClass('active');
			},
			classes: {
				months: {
					general: 'label'
				}
			}
		};

	    var calendar = _calendar.calendar(options);

	    _datepicker.bind('change',function(){

	    	var v = _datepicker.val()
    	
    	})

		$('.filter-selector a[data-calendar-nav]').each(function() {
			var $this = $(this);
			$this.click(function() {
				calendar.navigate($this.data('calendar-nav'));
			});
		});

		$('.filter-selector a[data-calendar-view]').each(function() {
			var $this = $(this);
			$this.click(function() {
				calendar.view($this.data('calendar-view'));
				$this.parent().prev().text($this.text())
			});
		});

		$('#first_day').change(function(){
			var value = $(this).val();
			value = value.length ? parseInt(value) : null;
			calendar.setOptions({first_day: value});
			calendar.view();
		});

		$('#language').change(function(){
			calendar.setLanguage($(this).val());
			calendar.view();
		});

		$('#exampleModal').change(function(){
			var val = $(this).is(':checked') ? $(this).val() : null;
			calendar.setOptions({modal: val});
		});
		$('#format-12-hours').change(function(){
			var val = $(this).is(':checked') ? true : false;
			calendar.setOptions({format12: val});
			calendar.view();
		});

		$('#show_wbn').change(function(){
			var val = $(this).is(':checked') ? true : false;
			calendar.setOptions({display_week_numbers: val});
			calendar.view();
		});
		$('#show_wb').change(function(){
			var val = $(this).is(':checked') ? true : false;
			calendar.setOptions({weekbox: val});
			calendar.view();
		});
		$('#events-modal .modal-header, #events-modal .modal-footer').click(function(e){
			//e.preventDefault();
			//e.stopPropagation();
		});

	}


	var init = function(){

		SetUpItems()
		AppController()

	}


	init()

});
