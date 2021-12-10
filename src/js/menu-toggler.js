import {addClass, removeClass} from './utils-class.js';

const menuTogglerId = document.getElementById("menu-toggler");
menuTogglerId.addEventListener("click", function () {
  const menuId = document.getElementById("menu");
  if (menuId.className.indexOf("opacity-0") > -1) {
    addClass(menuTogglerId, "fixed top-30 right-30");
    removeClass(menuTogglerId, "relative");
    addClass(menuId, "opacity-100 z-30");
    removeClass(menuId, "opacity-0 invisible");
  } else {
    removeClass(menuTogglerId, "fixed top-20 right-20");
    addClass(menuTogglerId, "relative");
    removeClass(menuId, "opacity-100 z-30");
    addClass(menuId, "opacity-0 invisible");
  }
});