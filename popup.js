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
    console.log('running function')
    document.getElementById("popup").style.display = "block";
  }, 4000);
});

