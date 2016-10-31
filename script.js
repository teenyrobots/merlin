// javascript for Title TK

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel', {
  // options
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