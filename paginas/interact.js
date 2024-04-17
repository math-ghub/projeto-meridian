import * as PageAnimations from "../modulos/efeitosGraficos.js";

var interativos = document.querySelectorAll(".interactive")
var nav = document.querySelector("nav")
var navButtons = document.querySelectorAll("nav > ul > li > a")
var navSpecialButton = document.querySelector("nav li p")
var menuList = document.querySelector("#menuList")
var menuButton = document.getElementById("menu")
var servicoMenu = document.querySelector("#servicomenu")
var categoryButtons = menuList.querySelectorAll(".drop")
let insideMenuBar = false
let insideMenu = false
let logo = document.getElementById("logodiv")
let wait = false
let menuOpened = false

PageAnimations.animatePage()

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

navSpecialButton.addEventListener("click", element => {
    if (window.innerWidth < 800) {
        if (!menuList.classList.contains("openlist")) {
            startLoad(element.target.parentElement, true)
            displayMenu(true)
        } else {
            startLoad(element.target.parentElement, false)
            displayMenu(false)
            menuList.classList.remove("openlist")
        }
    }
})

navSpecialButton.addEventListener("mouseenter", element => {
    if (window.innerWidth > 799) {
        startLoad(element.target.parentElement, true)
        displayMenu(true)
    }
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

function startLoad(element, bool) {
    let loadBar = element.getElementsByClassName("load")
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

categoryButtons.forEach(button => {
    let isOpen = false
    button.addEventListener("click", () => {
        let category = button.getElementsByClassName("categoria")[0].children[0]
        let content = button.getElementsByClassName("conteudo")[0]
        if (!isOpen) {
            category.classList.add("rotate")
            content.classList.add("show")
            isOpen = true
        } else {
            category.classList.remove("rotate")
            content.classList.remove("show")
            isOpen = false
        }
    })
})