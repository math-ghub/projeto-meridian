const frames = document.getElementsByClassName("e-fotos")
const framesArray = Array.from(frames)
let actualImage = 0

var images = [
    "clinica-interior.jpg",
    "clinica-interior2.png",
    "idosa-crosspilates.jpg",
]

framesArray[0].onanimationiteration = (anim) => {
    if (anim.animationName == "refresh") {return actualImage += 1};
    if (actualImage > images.length - 1) {actualImage = 0};
}

framesArray.forEach(box => {
    box.addEventListener("animationiteration", (anim) => {
        if (anim.animationName == "refresh") {return};
        if (actualImage > images.length - 1) {actualImage = 0};
        setAnimation(box, actualImage)
    })

    setAnimation(box, actualImage)
})

function setAnimation(obj, val) {
    obj.style["background-image"] = "url(./imagens/" + images[val]
}