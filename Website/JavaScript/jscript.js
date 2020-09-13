/*hamburger menu for smaller screens*/
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
/*code found here: https://www.w3schools.com/howto/howto_js_topnav_responsive.asp*/
function dropNav() {
	var x = document.getElementById("Topnav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}

/*for slide show*/
/*code found here: https://www.w3schools.com/howto/howto_js_slideshow.asp*/
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
	showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("Slides");
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slides[slideIndex-1].style.display = "block";
}