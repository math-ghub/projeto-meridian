// Função de Animação pelo Scroll

let wait = false
var servicoMenu = document.querySelector("#servicomenu")
var interativos = document.querySelectorAll(".interactive")

export function animatePage() {
    window.addEventListener("scroll", () => {
    throttle(checkHeight, 200)
})}

function checkHeight() {
    interativos.forEach(element => {
        let viewHeight = window.innerHeight || document.documentElement.clientHeight;
        let compareHeight = element.getBoundingClientRect().top;

        if (compareHeight <= viewHeight - 200) {
            Animate(element, true)
        }
        else if (compareHeight >= viewHeight) {
            Animate(element, false)
        }
    }
    )
}

function throttle(f, ms) {
    if (wait) return;

    wait = true

    setTimeout(() => {
        f()
        wait = false
    }, ms)
}

let startLoad = (element, bool) => {
    const loadBar = element.getElementsByClassName("load")
    if (bool) {
        loadBar[0].classList.remove("shrink")
        loadBar[0].classList.add("grow")
        return
    }
    if (loadBar[0].classList.contains("grow")) {
        loadBar[0].classList.remove("grow")
        loadBar[0].classList.add("shrink")
    }
}

function Animate(element, bool) {
    if (bool) {
        element.classList.add("animating")
    }
    else {
        element.classList.remove("animating")
    }
}