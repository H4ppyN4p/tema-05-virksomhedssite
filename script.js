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