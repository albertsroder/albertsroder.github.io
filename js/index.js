// MOBILE MENU

var mobileMenu = document.querySelector(".mobile-menu");
var menu = document.querySelector(".navbar-list");

mobileMenu.addEventListener("click", function() {
  if (!menu.classList.contains("open")) menu.classList.add("open");
  else menu.classList.remove("open");
});

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
  setTimeout(carusel, 1500);
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
  slider2[myIndex2 - 1].style.display = "block";
  setTimeout(carusel2, 1500);
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
  slider3[myIndex3 - 1].style.display = "block";
  setTimeout(carusel3, 1500);
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
  slider4[myIndex4 - 1].style.display = "block";
  setTimeout(carusel4, 1500);
}

// CARUSEL

var myIndex5 = 0;
carusel5();

function carusel5() {
  var slider5 = document.getElementsByClassName("image-slider5");
  for (var i = 0; i < slider5.length; i++) {
    slider5[i].style.display = "none";
  }
  myIndex5++;
  if (myIndex5 > slider5.length) myIndex5 = 1;
  slider5[myIndex5 - 1].style.display = "block";
  setTimeout(carusel5, 1500);
}

// CARUSEL

var myIndex6 = 0;
carusel6();

function carusel6() {
  var slider6 = document.getElementsByClassName("image-slider6");
  for (var i = 0; i < slider6.length; i++) {
    slider6[i].style.display = "none";
  }
  myIndex6++;
  if (myIndex6 > slider6.length) myIndex6 = 1;
  slider6[myIndex6 - 1].style.display = "block";
  setTimeout(carusel6, 1500);
}

// CARUSEL

var myIndex7 = 0;
carusel7();

function carusel7() {
  var slider7 = document.getElementsByClassName("image-slider7");
  for (var i = 0; i < slider7.length; i++) {
    slider7[i].style.display = "none";
  }
  myIndex7++;
  if (myIndex7 > slider7.length) myIndex7 = 1;
  slider7[myIndex7 - 1].style.display = "block";
  setTimeout(carusel7, 1500);
}

// CARUSEL

var myIndex8 = 0;
carusel8();

function carusel8() {
  var slider8 = document.getElementsByClassName("image-slider8");
  for (var i = 0; i < slider8.length; i++) {
    slider8[i].style.display = "none";
  }
  myIndex8++;
  if (myIndex8 > slider8.length) myIndex8 = 1;
  slider8[myIndex8 - 1].style.display = "block";
  setTimeout(carusel8, 1500);
}

// CARUSEL

var myIndex9 = 0;
carusel9();

function carusel9() {
  var slider9 = document.getElementsByClassName("image-slider9");
  for (var i = 0; i < slider9.length; i++) {
    slider9[i].style.display = "none";
  }
  myIndex9++;
  if (myIndex9 > slider9.length) myIndex9 = 1;
  slider9[myIndex9 - 1].style.display = "block";
  setTimeout(carusel9, 1500);
}

// CARUSEL

var myIndex10 = 0;
carusel10();

function carusel10() {
  var slider10 = document.getElementsByClassName("image-slider10");
  for (var i = 0; i < slider10.length; i++) {
    slider10[i].style.display = "none";
  }
  myIndex10++;
  if (myIndex10 > slider10.length) myIndex10 = 1;
  slider10[myIndex10 - 1].style.display = "block";
  setTimeout(carusel10, 1500);
}

// CARUSEL

var myIndex11 = 0;
carusel11();

function carusel11() {
  var slider11 = document.getElementsByClassName("image-slider11");
  for (var i = 0; i < slider11.length; i++) {
    slider11[i].style.display = "none";
  }
  myIndex11++;
  if (myIndex11 > slider11.length) myIndex11 = 1;
  slider11[myIndex11 - 1].style.display = "block";
  setTimeout(carusel11, 1500);
}

// CARUSEL

var myIndex12 = 0;
carusel12();

function carusel12() {
  var slider12 = document.getElementsByClassName("image-slider12");
  for (var i = 0; i < slider12.length; i++) {
    slider12[i].style.display = "none";
  }
  myIndex12++;
  if (myIndex12 > slider12.length) myIndex12 = 1;
  slider12[myIndex12 - 1].style.display = "block";
  setTimeout(carusel12, 1500);
}

// CARUSEL

var myIndex13 = 0;
carusel13();

function carusel13() {
  var slider13 = document.getElementsByClassName("image-slider13");
  for (var i = 0; i < slider13.length; i++) {
    slider13[i].style.display = "none";
  }
  myIndex13++;
  if (myIndex13 > slider13.length) myIndex13 = 1;
  slider13[myIndex13 - 1].style.display = "block";
  setTimeout(carusel13, 1500);
}

// CARUSEL

var myIndex14 = 0;
carusel14();

function carusel14() {
  var slider14 = document.getElementsByClassName("image-slider14");
  for (var i = 0; i < slider14.length; i++) {
    slider14[i].style.display = "none";
  }
  myIndex14++;
  if (myIndex14 > slider14.length) myIndex14 = 1;
  slider14[myIndex14 - 1].style.display = "block";
  setTimeout(carusel14, 1500);
}

// CARUSEL

var myIndex15 = 0;
carusel15();

function carusel15() {
  var slider15 = document.getElementsByClassName("image-slider15");
  for (var i = 0; i < slider15.length; i++) {
    slider15[i].style.display = "none";
  }
  myIndex15++;
  if (myIndex15 > slider15.length) myIndex15 = 1;
  slider15[myIndex15 - 1].style.display = "block";
  setTimeout(carusel15, 1500);
}
