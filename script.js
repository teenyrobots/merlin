// javascript for merlyn

/* TODOS
[ ] can i just HIDE an element?

*/

//INITIALIZE

$(document).ready(function(){
	$(".navCircle").css("background-color","white");
	$("#nav4").css("background-color","grey");
});

var comicPages = [
	"images/1.jpg",
	"images/2.jpg",
	"images/3.jpg",
	"images/4.jpg",
	"images/5.jpg",
	"images/6.jpg",
	"images/7.jpg"
]

var i = 3;


//MAIN NAV

function firstPage() {
	i=0;
	document.getElementById("comicPrev").src="images/blank.png";
	document.getElementById("comicActive").src=comicPages[i];
	document.getElementById("comicNext").src=comicPages[i+1];
	scroll(0,0);
	navProgSwitch();
	removeInitialNav();
}

function lastPage() {
	i=6;
	document.getElementById("comicPrev").src=comicPages[i-1];
	document.getElementById("comicActive").src=comicPages[i];
	document.getElementById("comicNext").src="images/blank.png";
	scroll(0,0);
	navProgSwitch();
	removeInitialNav();
}

function nextPage() {
	if (i < 6) {
		i++;
		document.getElementById("comicActive").src=comicPages[i];
		document.getElementById("comicPrev").src=comicPages[i-1];
		document.getElementById("comicNext").src=comicPages[i+1];
		scroll(0,0);
		if (i==6) {
			itsOver();
			document.getElementById("comicNext").src="images/blank.png";
		}
	} else {
		console.log("nextPage ran else")
	}
	navProgSwitch();
}

function prevPage() {
	if (i > 0) {
		i--;
		document.getElementById("comicActive").src=comicPages[i];
		document.getElementById("comicPrev").src=comicPages[i-1];
		document.getElementById("comicNext").src=comicPages[i+1];
		scroll(0,0);
		if (i == 0) {
			itsOver();
			document.getElementById("comicPrev").src="images/blank.png";
		}
		console.log(i);
	} else {
		console.log("prevPage ran else");
	}
	navProgSwitch();
}


//OTHER FUNCTIONS

function removeInitialNav() {
	var rb2 = document.getElementById("rb2"); 
	rb2.parentNode.removeChild(rb2);
	var lb2 = document.getElementById("lb2");
	lb2.parentNode.removeChild(lb2);
	var xpTime = document.getElementById("xpTime");
	xpTime.parentNode.removeChild(xpTime);
}

function itsOver() {
	var rb = document.getElementById("rb"); 
	rb.parentNode.removeChild(rb);
	var lb = document.getElementById("lb");
	lb.parentNode.removeChild(lb);
	// access the div w id "active" and a new image element
	// give that new img element the src "images/end.jpg"
}

function navProgSwitch() {
	switch(i) {
		case 0:
			console.log("pg 1");
			$(".navCircle").css("background-color","white");
			$("#nav1").css("background-color","grey");
			break;
		case 1:
			console.log("pg 2");
			$(".navCircle").css("background-color","white");
			$("#nav2").css("background-color","grey");
			break;
		case 2:
			console.log("pg 3");
			$(".navCircle").css("background-color","white");
			$("#nav3").css("background-color","grey");
			break;
		case 3:
			console.log("pg 4");
			$(".navCircle").css("background-color","white");
			$("#nav4").css("background-color","grey");
			break;
		case 4:
			console.log("pg 5");
			$(".navCircle").css("background-color","white");
			$("#nav5").css("background-color","grey");
			break;
		case 5:
			console.log("pg 6");
			$(".navCircle").css("background-color","white");
			$("#nav6").css("background-color","grey");
			break;
		case 6:
			console.log("pg 7");
			$(".navCircle").css("background-color","white");
			$("#nav7").css("background-color","grey");
			break;
		default:
			console.log("yo we ran the default sorry bro");
			$(".navCircle").css("background-color","white");
		}
}