// ============
// DESIGNER POP-UPS
// ============

const imageClicked = document.querySelectorAll(".ui-main-img");
const body = document.querySelector("body");
var modal = document.querySelectorAll(".modal");
var span = document.querySelectorAll(".close");

// When the user clicks on the button, open the modal
for (let i = 0; i < imageClicked.length; i++) {
  imageClicked[i].addEventListener("click", function() {
    this.nextElementSibling.style.display = "block";
    body.style.overflow = "hidden";
  });
}

for (let i = 0; i < span.length; i++) {
  // When the user clicks on <span> (x), close the modal
  span[i].onclick = function() {
    modal[i].style.display = "none";
    body.style.overflow = "auto";
  };
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  for (let i = 0; i < modal.length; i++) {
    if (event.target.classList.contains("modal")) {
      modal[i].style.display = "none";
      body.style.overflow = "auto";
    }
  }
};

// CARUSEL

var myIndex = 0;
carusel();

function carusel() {
  var slider = document.getElementsByClassName("image-slider");
  for (var i = 0; i < slider.length; i++) {
    slider[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > slider.length) myIndex = 1;
  slider[myIndex - 1].style.display = "block";
  setTimeout(carusel, 3000);
}

// CARUSEL

var myIndex2 = 0;
carusel2();

function carusel2() {
	var slider2 = document.getElementsByClassName("image-slider2");
	for (var i = 0; i < slider2.length; i++) {
		slider2[i].style.display = "none";
	}
	myIndex2++;
	if (myIndex2 > slider2.length) myIndex2 = 1;
	slider2[myIndex2-1].style.display = "block";
	setTimeout(carusel2, 3000);
}

// CARUSEL

var myIndex3 = 0;
carusel3();

function carusel3() {
	var slider3 = document.getElementsByClassName("image-slider3");
	for (var i = 0; i < slider3.length; i++) {
		slider3[i].style.display = "none";
	}
	myIndex3++;
	if (myIndex3 > slider3.length) myIndex3 = 1;
	slider3[myIndex3-1].style.display = "block";
	setTimeout(carusel3, 3000);
}

// CARUSEL

var myIndex4 = 0;
carusel4();

function carusel4() {
	var slider4 = document.getElementsByClassName("image-slider4");
	for (var i = 0; i < slider4.length; i++) {
		slider4[i].style.display = "none";
	}
	myIndex4++;
	if (myIndex4 > slider4.length) myIndex4 = 1;
	slider4[myIndex4-1].style.display = "block";
	setTimeout(carusel4, 3000);
}