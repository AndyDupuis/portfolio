
function isEmail(email) {
	var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email);
}

$("#submitButton").click(function() {


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

});

function viewMore() {
	document.getElementById('viewMore').style.cssText = 'display: none;';
	document.getElementById('overflowText1').style.cssText = 'display: block;';
	document.getElementById('overflowText2').style.cssText = 'display: block;';
	document.getElementById('overflowText3').style.cssText = 'display: block;';
	document.getElementById('viewLess').style.cssText = 'display: block;';
	document.getElementById('headshot').style.cssText = 'margin-bottom: 60%;'
}

function viewLess() {
	document.getElementById('viewLess').style.cssText = 'display: none;';
	document.getElementById('overflowText1').style.cssText = 'display: none;';
	document.getElementById('overflowText2').style.cssText = 'display: none;';
	document.getElementById('overflowText3').style.cssText = 'display: none;';
	document.getElementById('viewMore').style.cssText = 'display: block;';
	document.getElementById('headshot').style.cssText = 'margin-bottom: 10%;'
}

	