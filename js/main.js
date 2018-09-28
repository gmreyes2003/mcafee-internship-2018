	function validar() {
		var user = document.getElementById("user").value;
		var pass = document.getElementById("pass").value;
		if (user != "admin" || user=="") {
			alert("User empy or incorrect")
			return false;
		}
		if(  pass=="" || pass!="admin"){
			alert("Pass empy or incorrect");
			return false;
		}
		                      
		window.location="index.html";
	}
	
	//maxi
	function verAlert()
	{
	  alert("This option is not available, try it later.");
	}


document.getElementById("1").onmouseover = function() {mouseOver1()};
document.getElementById("1").onmouseout = function() {mouseOut1()};

function mouseOver1() {
    document.getElementById("1").style.fontSize = "30";
    document.getElementById("1").style.color = "red";
}

function mouseOut1() {
    document.getElementById("1").style.fontSize = "24";
}


document.getElementById("2").onmouseover = function() {mouseOver2()};
document.getElementById("2").onmouseout = function() {mouseOut2()};

function mouseOver2() {
    document.getElementById("2").style.fontSize = "30";
    document.getElementById("2").style.color = "red";
}

function mouseOut2() {
    document.getElementById("2").style.fontSize = "24";
}


document.getElementById("3").onmouseover = function() {mouseOver3()};
document.getElementById("3").onmouseout = function() {mouseOut3()};

function mouseOver3() {
    document.getElementById("3").style.fontSize = "30";
    document.getElementById("3").style.color = "red";
}

function mouseOut3() {
    document.getElementById("3").style.fontSize = "24";
}


document.getElementById("4").onmouseover = function() {mouseOver4()};
document.getElementById("4").onmouseout = function() {mouseOut4()};

function mouseOver4() {
    document.getElementById("4").style.fontSize = "30";
    document.getElementById("4").style.color = "red";
}

function mouseOut4() {
    document.getElementById("4").style.fontSize = "24";
}


function bigImg(x) {
  x.style.color="black"
}

function normalImg(x) {
  x.style.color="white";
}

function validateForm(){
      document.getElementById("subjetValidation").innerHTML = "";
      document.getElementById("messageValidation").innerHTML = "";
    var subjet=document.getElementById("subjet").value;
    var message=document.getElementById("message").value;
      if(subjet==""){
      //  T=alert("Este campo no puede quedar vacio");
      document.getElementById("subjetValidation").innerHTML = "Please set a subject";
      return false;
      }
      if(message==""){
      //  T=alert("Este campo no puede quedar vacio");
      document.getElementById("messageValidation").innerHTML = "Please set a message";
      return false;
      }
      alert("Your message has been sent correctly.");
}


/*Santi*/

function validatepass(){
	var pass1= document.getElementById("pass1").value;
	var pass2= document.getElementById("pass2").value;
	var name= document.getElementById("name").value;
	var surname= document.getElementById("surname").value;
	var email= document.getElementById("email").value;
	var birth= document.getElementById("birthdate").value;
	var male= document.getElementById("male").checked;
	var female= document.getElementById("female").checked;
	var other= document.getElementById("other").checked;
	var pass1= document.getElementById("pass1").value;
	var pass2= document.getElementById("pass2").value;
	var email= document.getElementById("email").value;

	if(pass1 != pass2){
		alert("Password and confirm passwords are diferent.");
		return false;
	  }
	  if(name == ""){
		alert("Missing name");
		return false;
	  }
	  if(surname == ""){
		alert("Missing surname");
		return false;
	  }
	  if(email == ""){
		alert("Missing email");
		return false;
	  }else{
		if(validar_email(email)==false){
		  alert("Email invalid");
		  return false;
		}
	  }
	  if(pass1 == ""){
		alert("Missing password");
		return false;
	  }
	  if(pass2 == ""){
		  alert("Missing confirm password");
		  return false;
	  }
	  
	if(pass1.legth<8||pass2.length<8){
		alert("The password must contain at least 8 characters");
		return false;
	}
	  
	  if(birth == ""){
		alert("Missing birthdate.");
		return false;
	}
	  if(male == false && female==false && other==false){
		alert("Missinge gender.");
		return false;
	  }
	  alert("Thanks!! We will contact with you.");
	  window.location="index.html";
}


function validar_email(email){
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;
}

	
function goIndex(){
	alert("Are you sure?");
	window.location="index.html";
}


/* CAMI */

function deleteCountry() {
	alert ("Are you sure you want to delete?");
}
function addCountry() {
	alert ("Do you want to add?");
}
function infoCountry() {
	alert ("This option is not available, try it later");
}