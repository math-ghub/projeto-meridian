const topElement = document.querySelector("main")
const seletor = document.querySelector("#seletor")
const scroller = document.querySelector("#scroller")
const box = document.querySelector("#curso-rpg")

window.addEventListener("scroll", () => Check())

function Check() {
    let top = window.innerHeight || document.documentElement.clientHeight;
    let seletorHeight = box.getBoundingClientRect().bottom;

    if (seletorHeight < top) {
        scroller.classList.add("visible")
    } else {
        scroller.classList.remove("visible")
    }

}

scroller.addEventListener("click", () => {
    let objTop = seletor.getBoundingClientRect().top
    let offSet = window.scrollY
    window.scrollTo({top: objTop + offSet - 100, behavior: "smooth"})
})