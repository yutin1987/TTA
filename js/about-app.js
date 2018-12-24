$(function(){

	var app = function(){

		var scope = $('#ReservationModal');
	    var $NavGoNext = $('.link-nav-move-right', scope);
	    var $NavGoPrev = $('.link-nav-move-back', scope);
	    var wrap = $('.modal-body', scope);
	    

	    wrap.on('hide.bs.modal',function(){

	        wrap.removeClass('moved');

	    })

	    $NavGoNext.bind('click',function(){
	    	wrap.addClass('moved');
	    })

	    $NavGoPrev.bind('click',function(){
	    	wrap.removeClass('moved');
	    })
	}
	
	var formValidate = function(){

		var name, companyName, email, phoneNumber, note;
		var interested, bookingtime;

		var submit = $("#form_submit");
		var modal = $('#ReservationModal');


		name = $('input#Name');
		company = $('input#Company');
		email = $("input#Email");
		phoneNumber = $('input#PhoneNumber');
		note = $('textarea#ReservationFormNote');

		interested = $('input[name="InterestedIn"]');
		bookingtime = $('input[name="BookTour"]');

		(function() {
		  'use strict';
		  window.addEventListener('load', function() {
		    // Fetch all the forms we want to apply custom Bootstrap validation styles to
		    var forms = document.getElementsByClassName('needs-validation');
		    // Loop over them and prevent submission
		    var validation = Array.prototype.filter.call(forms, function(form) {
		      form.addEventListener('submit', function(event) {

		      	console.log(event)

		        if (form.checkValidity() === false) {

		          event.preventDefault();
		          event.stopPropagation();

		        }else{

					event.preventDefault();
					event.stopPropagation();
		        	sendData()
		
			    	submit.bind('click',function(){

			    		modal.modal('hide');

			    	})		        	

		        }

		        form.classList.add('was-validated');
		        

		      }, false);
		    });
		  }, false);
		})();


		var sendData = function(){
		        
        	var _name = name.val();
        	var _company = company.val();
        	var _email = email.val();
        	var _phoneNumber = phoneNumber.val();
        	var _note = note.val();

        	var _interested = interested.val();
        	var _bookingtime = bookingtime.val();


        	var data = {

        		_name,
        		_company,
        		_email,
        		_phoneNumber,
        		_note,
        		_interested,
        		_bookingtime

        	};

        	//to check out data open console
        	console.log(data);
		}

	}


	var init = function(){

		app();
		formValidate();

	}

	init();

})