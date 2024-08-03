const playListButton = document.querySelector("#i-playlist") as HTMLButtonElement;
const selectionMenu = document.querySelector("#selection-menu") as HTMLDivElement;
const closeButton = document.querySelector("#selection-menu-close") as HTMLDivElement;
let menuState: boolean = false;

playListButton.addEventListener("click", () => {
    setState(true);
})

closeButton.addEventListener("click", () => {
    setState(false);
})

function setState(v: boolean): void {
    menuState = v;
    if (menuState === false) {
        selectionMenu.classList.remove("open");
    } else {
        selectionMenu.classList.add("open");
    }
}