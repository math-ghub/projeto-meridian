const frames = document.getElementsByClassName("e-fotos")
const framesArray = Array.from(frames)

var images = [
    "clinica-interior.jpg",
    "clinica-interior2.png",
    "idosa-crosspilates.jpg",
]

framesArray.forEach(box => {
    let actualImage = 0
    box.addEventListener("animationiteration", (anim) => {
        if (anim.animationName == "refresh") {return actualImage += 1};
        if (actualImage >= images.length) {actualImage = 0};
        setAnimation(box, actualImage)
    })
    setAnimation(box, actualImage)
})

function setAnimation(obj, val) {
    obj.style["background-image"] = "url(./imagens/" + images[val]
}