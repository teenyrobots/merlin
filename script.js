// javascript for merlyn

/* TODOS
[x] can i just HIDE an element?
[ ] loses connection to script when window is reloaded?
*/

//INITIALIZE

$(document).ready(function(){
	$(".navCircle").css("background-color","white");
	$("#nav4").css("background-color","grey");
});

document.getElementById("rb").style.display = "none";
document.getElementById("lb").style.display = "none";

var plsScrollTo = document.getElementById('bgContainer');

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
	//scroll(0,0);
	plsScrollTo.scrollIntoView();
	navProgSwitch();
	removeInitialNav();
	document.getElementById("lb").style.display = "block";
}

function lastPage() {
	i=6;
	document.getElementById("comicPrev").src=comicPages[i-1];
	document.getElementById("comicActive").src=comicPages[i];
	document.getElementById("comicNext").src="images/blank.png";
	//scroll(0,0);
	plsScrollTo.scrollIntoView();
	navProgSwitch();
	removeInitialNav();
	document.getElementById("rb").style.display = "block";
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
			document.getElementById("comicNext").display="none";
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
			document.getElementById("comicPrev").display="none";
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
	document.getElementById("xpTime").style.display = "none";
}

function itsOver() {
	var rb = document.getElementById("rb"); 
	rb.parentNode.removeChild(rb);
	var lb = document.getElementById("lb");
	lb.parentNode.removeChild(lb);
	document.getElementById("xpTime").style.display="block";
	document.getElementById("xpTime").src="images/end.jpg";
	document.getElementById("xpTime").style="margin-bottom: 5em";
	document.getElementById("xpTime").onclick = reloadMerlyn;
}

function reloadMerlyn() {
	window.location.reload();
	scroll(0,0);
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

//NOTES

//To scroll to a certain element:
//var plsScrollTo = document.getElementById('bgContainer');
//plsScrollTo.scrollIntoView();