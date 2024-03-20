var interativos = document.querySelectorAll(".interactive")
var buttons = document.querySelectorAll(".button")
var nav = document.querySelector("nav")
var navButtons = document.querySelectorAll("nav li a")
var menuButton = document.getElementById("menu")
let wait = false
let menuOpened = false

window.addEventListener("scroll", () => {
    throttle(checkHeight, 200)
})

menuButton.addEventListener("click", () => {
    if (!menuOpened) {
        nav.classList.remove("Closed")
        nav.classList.add("Open");
    } else {
        nav.classList.remove("Open")
        nav.classList.add("Closed")
    }
    menuOpened = !menuOpened
})

buttons.forEach(element => {
    defaultbgColor = element.style.backgroundColor
    defaultColor = element.style.color
    element.addEventListener("mouseenter", () => {
        element.style.backgroundColor = "rgb(34, 220, 90)"
        element.style.color = "black"
    })

    element.addEventListener("mouseleave", () => {
        element.style.backgroundColor = defaultbgColor
        element.style.color = defaultColor
    })
});

navButtons.forEach(element => {
    console.log(element)
    element.addEventListener("mouseenter", () => {
        loadBar = element.parentElement.getElementsByClassName("load")
        loadBar[0].classList.remove("shrink")
        loadBar[0].classList.add("grow")
    })

    element.addEventListener("mouseleave", () => {
        loadBar = element.parentElement.getElementsByClassName("load")
        loadBar[0].classList.remove("grow")
        loadBar[0].classList.add("shrink")
    })
})

function checkHeight() {
    interativos.forEach(element => {
        let viewHeight = window.innerHeight || document.documentElement.clientHeight;
        let compareHeight = element.getBoundingClientRect().top;

        if (compareHeight <= viewHeight) {
            Animate(element, true)
        }
        else {
            Animate(element, false)
        }
    }
    )
}

function Animate(element, bool) {
    if (bool) {
        element.classList.add("animating")
    }
    else {
        element.classList.remove("animating")
    }
}

function throttle(f, ms) {
    if (wait) return;

    wait = true

    setTimeout(() => {
        f()
        wait = false
    }, ms)
}