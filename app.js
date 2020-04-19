

	function isEmail(email) {
  		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  		return regex.test(email);
	}




		$("#submitButton").click(function(e) {
	
			e.preventDefault();

			var fieldsMissing = "";
			var errorMessage = "";
	
			if($("#email").val() == ""){
				fieldsMissing += "<br>Email";
			}
			if($("#firstName").val() == ""){
				fieldsMissing += "<br>First Name";
			}
			if($("#lastName").val() == ""){
				fieldsMissing += "<br>Last Name";
			}
			if($("#subject").val() == ""){
				fieldsMissing += "<br>Subject";
			} 
			if($("#message").val() == ""){
				fieldsMissing += "<br>Message";
			}

			if (fieldsMissing != ""){
				errorMessage += "<p>The following field(s) are missing:" + fieldsMissing;
			}

			if(isEmail($("#email").val()) == false){
				errorMessage += "<p>Your email address is not valid</p>";
			}

			if (errorMessage != ""){
				$("#errorMessage").addClass("alert alert-danger");
				$("#errorMessage").html(errorMessage);
			} else {
				$("#errorMessage").hide();
				$("#successMessage").addClass("alert alert-success");
				$("#successMessage").show();
			}


			$.post('/contactform.php', {
				email: $('#email').val(),
				firstName: $('#firstName').val(),
				lastName: $('#lastName').val(),
				subject: $('#subject').val(),
				message: $('#message').val()
			}, function(d){
				alert(d);
			});



		});














































