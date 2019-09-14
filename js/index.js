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
