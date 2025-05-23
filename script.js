const slides = document.querySelectorAll('.slide');
const slider = document.getElementById('sliderRange');

slider.addEventListener('input', () => {
  const index = parseInt(slider.value);

  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
}); 

function toggleMenu() {
    document.querySelector(".mobile-menu").classList.toggle("active");
}

// POP-UP - AVI

function closePopup() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("infoCircle").style.display = "block";
}

function openPopup() {
  document.getElementById("popup").style.display = "block";
  document.getElementById("infoCircle").style.display = "none";
}

// Vis popup automatisk efter 4 sekunder
window.addEventListener("load", function() {
  setTimeout(function() {
    document.getElementById("popup").style.display = "block";
  }, 4000);
});



