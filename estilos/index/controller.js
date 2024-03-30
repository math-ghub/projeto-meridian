const frames = document.getElementsByClassName("e-fotos")
const framesArray = Array.from(frames)
let refreshTime = 2

var images = [
    "estudio-teste.webp",
    "estudio-teste.webp",
]

framesArray.forEach(box => {
    let actualImage = 0
    setAnimation(box, actualImage)
    box.addEventListener("animationstart", (anim) => {
        if (anim.animationName.charAt(0) != "e") {return};
        setTimeout(() => {
            refresh(box)
        },6000)
    })
    box.addEventListener("animationend", () => {
        if (actualImage > images.length - 1) {actualImage = 0};
        setAnimation(box, actualImage)
        actualImage += 1
    })
})

function setAnimation(obj, val) {
    obj.classList.remove("onLoop")
    setTimeout(() => {
        obj.style["background-image"] = "url('../../imagens/" + images[val] + "')"
        obj.classList.add("onLoop")
    }, 100)
}

function refresh(obj) {
    obj.classList.add("refresh")
    setTimeout(() => {
        obj.classList.remove("refresh")
    }, 1000 * refreshTime)
}