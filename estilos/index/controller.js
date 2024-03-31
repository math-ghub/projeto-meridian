const frames = document.getElementsByClassName("e-fotos")
const framesArray = Array.from(frames)
let delay = 1
let refreshTime = 2

var images = [
    "estudio-teste.webp",
    "clinica-interior.jpg",
]

framesArray.forEach(box => {
    let actualImage = 0
    box.addEventListener("animationiteration", (anim) => {
        if (anim.animationName == "refresh") {return actualImage += 1};
        if (actualImage > images.length - 1) {actualImage = 0};
        setAnimation(box, actualImage)
    })
    setAnimation(box, actualImage)
})

function setAnimation(obj, val) {
    obj.style["background-image"] = "url(../../imagens/" + images[val] + ")"
}