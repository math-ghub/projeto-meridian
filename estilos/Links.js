"use strict";
const playListButton = document.querySelector("#i-playlist");
const selectionMenu = document.querySelector("#selection-menu");
const closeButton = document.querySelector("#selection-menu-close");
let menuState = false;
playListButton.addEventListener("click", () => {
    setState(true);
});
closeButton.addEventListener("click", () => {
    setState(false);
});
function setState(v) {
    menuState = v;
    if (menuState === false) {
        selectionMenu.classList.remove("open");
    }
    else {
        selectionMenu.classList.add("open");
    }
}
