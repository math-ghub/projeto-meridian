var interativos = document.querySelectorAll(".interactive")
var buttons = document.querySelectorAll(".button")
var nav = document.querySelector("nav")
var navButtons = document.querySelectorAll("nav li a")
var navSpecialButton = document.querySelector("nav li p")
var menuList = document.querySelector("#menuList")
var menuButton = document.getElementById("menu")
var servicoMenu = document.querySelector("#servicomenu")
let insideMenuBar = false
let insideMenu = false
let logo = document.getElementById("logodiv")
let wait = false
let menuOpened = false

window.addEventListener("scroll", () => {
    throttle(checkHeight, 200)
})

menuButton.addEventListener("click", () => {
    if (!menuOpened) {
        nav.classList.remove("Closed")
        nav.classList.add("Open");
        logo.style.zIndex = -1
    } else {
        nav.classList.remove("Open")
        nav.classList.add("Closed")
    }
    menuOpened = !menuOpened
})

nav.addEventListener("animationend", () => {
    if (nav.classList.contains("Closed")) {
    logo.style.zIndex = 1
}})

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

navSpecialButton.addEventListener("click", () => {
    startLoad(element.target.parentElement, true)
    displayMenu(true)
})

navSpecialButton.addEventListener("mouseenter", element => {
    startLoad(element.target.parentElement, true)
    displayMenu(true)
})

navSpecialButton.parentElement.addEventListener("mouseleave", element => {
    if (!insideMenuBar && !insideMenu) {
        startLoad(element.target.parentElement, false)
        displayMenu(false)
    }
})

nav.addEventListener("mouseenter", () => {
    insideMenuBar = true
})

nav.addEventListener("mouseleave", () => {
    insideMenuBar = false
    displayMenu(false)
})

menuList.addEventListener("mouseenter", () => {
    insideMenu = true
})

menuList.addEventListener("mouseleave", () => {
    insideMenu = false
})

function displayMenu(bool) {
    if (bool) {
        menuList.classList.add("openlist")
    } else {
        if (!insideMenu && !insideMenuBar) {
            menuList.classList.remove("openlist")
            startLoad(menuList.parentElement.parentElement, false)
        }
    }
}

navButtons.forEach(element => {
    element.addEventListener("mouseenter", () => {
        startLoad(element.parentElement, true)
    })

    element.addEventListener("mouseleave", () => {
        startLoad(element.parentElement, false)
    })
})

startLoad = (element, bool) => {
    loadBar = element.getElementsByClassName("load")
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