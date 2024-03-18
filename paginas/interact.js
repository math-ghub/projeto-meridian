var interativos = document.querySelectorAll(".interactive")
var buttons = document.querySelectorAll(".button")
let wait = false

window.addEventListener("scroll", () => {
    throttle(checkHeight, 200)
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