// javascript for Title TK

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

userStart="begin";

function nextPage() {
	if (i < 6) {
		i++;
		/* if (i != 3) {
			var parent = document.getElementById("title");
			var child = document.getElementById("titleImg");
			parent.removeChild(child);
		}*/
		document.getElementById("comicActive").src=comicPages[i];
		document.getElementById("comicPrev").src=comicPages[i-1];
		document.getElementById("comicNext").src=comicPages[i+1];
		scroll(0,0);
	} else {
		document.getElementById("comicActive").src="images/rock.jpg";
	}
}

function prevPage() {
	if (i > 0) {
		i--;
		document.getElementById("comicActive").src=comicPages[i];
		document.getElementById("comicPrev").src=comicPages[i-1];
		document.getElementById("comicNext").src=comicPages[i+1];
		scroll(0,0);
	} else {
		document.getElementById("comicActive").src="images/rock.jpg";
	}
}