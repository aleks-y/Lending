"use strict";

var navMain = document.querySelector(".nav-main");
var navToggle = navMain.querySelector(".nav-main__toggler");


function navMobile() {
  navMain.classList.toggle("nav-main--close");
}

navToggle.addEventListener("click", navMobile);
