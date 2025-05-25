//Implementering a cookie functionalitet for auto pop-op
//Web3school doc for cookies; https://www.w3schools.com/js/js_cookies.asp

let cookies = document.cookie

console.log(cookies)

//document.cookie = "lastName=; path=/; expires=Sun, 1 January 2020 12:00:00 UTC"


let cookieExists = false

function checkCookie() {

  //Get a list of all current cookies on the websit
  let cookielist = document.cookie.split("; ")

  //for each cookie...
  cookielist.forEach(element => {

    //split it between it's key and value pair
    let word = element.split("=")

    //check if the key for "popup" is exist
    if (word[0] == "popup"){

      //if it does, set the value for the cookie existing to true
      cookieExists = true
    }
  });

  //then if the cookie exist
  if (cookieExists){

    console.log("it exists")

    //Set the popup element to be displayed closed
    document.getElementById("popup").style.display = "none";
    document.getElementById("infoCircle").style.display = "block";
    
  //else, create the cookie
  } else {
    console.log("it doesnt exist - creating cookie")

    //Create a new Date() constant to get the date
    const d = new Date()

    //Get the date + 1 hour
    d.setTime(d.getTime() + (60*60*1000));

    //Set the cookie expiration date
    let expires = "expires="+ d

    //Create new cookie with an expiration date 1 hour in the future
    document.cookie = "popup=true;" + expires + ";path=/" 

    //Then make the popup run
    // Vis popup automatisk efter 4 sekunder
    window.addEventListener("load", function() {
      setTimeout(function() {
        console.log("running function")
        document.getElementById("popup").style.display = "block";
      }, 4000);
    });
   
  }
  
}

checkCookie()

if (cookieExists) {

  
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




function toggleMenu() {
    document.querySelector(".mobile-menu").classList.toggle("active");
}

