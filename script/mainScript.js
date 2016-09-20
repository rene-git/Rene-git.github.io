//JSON
var posts = [
	{"lineOne" : "#Neverland",          "lineTwo" : "#Neverending",  "lineThree" : "#Street Fighter", "lineFour" : "#Raving"},
	{"lineOne" : "#Going Somewhere",    "lineTwo" : "#Starstrike",   "lineThree" : "#Street Looser",  "lineFour" : "#Dirtback"},
	{"lineOne" : "#Trouble in Chicago", "lineTwo" : "#Butchering",   "lineThree" : "#Finding Nemo",   "lineFour" : "#Monster..REALLY!?"}

];


//Parse JSON
/*var obj = JSON.parse(json);*/





function test(){
	
	for (i = 0 ; i < 3 ; i++){
		
		var xOne = document.getElementsByClassName("postOne");
		xOne[0].innerHTML += "<p><a>" + posts[i].lineOne + "</a></p>";

		var xTwo = document.getElementsByClassName("postTwo");
		xTwo[0].innerHTML +=  "<p><a>" + posts[i].lineTwo + "</a></p>";

		var xThree = document.getElementsByClassName("postThree");
		xThree[0].innerHTML += "<p><a>" + posts[i].lineThree + "</a></p>";

		var xFour = document.getElementsByClassName("postFour");
		xFour[0].innerHTML += "<p><a>" + posts[i].lineFour + "</a></p>";
	}		
}


/* Find ID and add content from ARRAY in FOR LOOP /*/

/*
	for (i = 0 ; i < 4 ; i++ ){

	document.getElementById("pp").innerHTML += "<p>" + text[i] + "</p>" ;



"<p>" + creativeText[i] + "</p>"


	}*/


// Array
/*var creativeText = ["#Neverland", "#Going somewhere?", "#Finding Nemo", "#TMNT"];*/
