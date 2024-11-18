// start: toggle-theme functionality

const toggle_theme = document.getElementById("toggle-theme");
const body = document.querySelector("body");
toggle_theme.addEventListener("click", () => {
  body.classList.toggle("dark-theme");
});

// end: toggle-theme functionality

// start: back to top functionality
let back_to_top = document.getElementById("back-to-top");

back_to_top.addEventListener("click", () => {
  topFunction();
});

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 150 ||
    document.documentElement.scrollTop > 150
  ) {
    back_to_top.style.display = "block";
  } else {
    back_to_top.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// end: back to top functionality
