let menu1 = document.getElementById("1").innerText= "Services";
let menu2 = document.getElementById("2").innerText= "Work";
let menu3 = document.getElementById("3").innerText= "Clients";
let menu4 = document.getElementById("4").innerText= "About";
let menu5 = document.getElementById("5").innerText= "News";


/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }