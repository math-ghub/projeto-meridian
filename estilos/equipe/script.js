const ImageList = document.getElementById("img-list")
const infoValues = document.getElementById("info")
var portraitButtons = document.getElementsByClassName("portrait-button")

const Infos = {
    "Michelle Mesquita": {
        "text": "Aalo",
    },
    "Pessoa": {
        "text": "Texto 2",
    },
    "Pessoa 3": {
        "text": "Texto 3",
    }
}

let Selected = 0

portraitButtons["previous"].addEventListener("click", () => {
    Selected = Selected > 0 ? Selected - 1 : Object.keys(Infos).length - 1
    UpdatePortrait()
})

portraitButtons["next"].addEventListener("click", () => {
    Selected = Selected < Object.keys(Infos).length - 1 ? Selected + 1 : 0
    UpdatePortrait()
})

function UpdatePortrait() {
    var selectedKey = Object.keys(Infos)[Selected]
    var selectedValues = Object.values(Infos)
    infoValues.children[0].innerHTML = selectedKey
    infoValues.children[1].innerHTML = selectedValues[Selected].text
    ImageList.style.transform = `translate(${-(Selected * 40) - 20}em, -50%)`
}

UpdatePortrait()