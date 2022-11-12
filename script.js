function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

function revealBackToTop() {
  var revealButton = document.querySelector(".back-to-top");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    revealButton.classList.add("active-back-to-top");
  } else {
    revealButton.classList.remove("active-back-to-top");
  }
}

window.onscroll = function () {
  revealBackToTop();
};

function dropDownMenu() {
  var element = document.querySelector(".nav");
  if (element.classList.contains("nav-bar-display")) {
    element.classList.remove("nav-bar-display");
  } else {
    element.classList.add("nav-bar-display");
  }
  return true;
}
