
let slideIndex = 0;
showSlides(); 

function showSlides() {
  slideIndex++;
	let i = 0;
	let slides = document.getElementsByClassName("mySlides");

     // initially set the display to none for every image
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}


	if (slideIndex > slides.length) {
		slideIndex = 1;
	}


	slides[slideIndex - 1].style.display = "block";
	setTimeout(showSlides, 2000);
}


