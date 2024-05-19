const ImageList = document.getElementById("img-list")
const infoValues = document.getElementById("info")
const cargoVal = document.getElementById("portrait-cargo")
var portraitButtons = document.getElementsByClassName("portrait-button")

const Infos = {
    "Dra. Michelle Mesquita": {
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum consequatur dolorum voluptates atque tempore odit quia impedit? Repellat, aspernatur non? Delectus facilis non reprehenderit fugit culpa sequi ullam molestias architecto.<br><br>• Proprietária Responsável Técnica Clínica Meridian Bem Estar <br>• Fisioterapeuta UNIC/2002 <br>• Pós graduada em Acupuntura/2006 <br>• Dermatofuncional/2014 <br>• Cursos de Capacitação em RPG/2008 <br>• Pilates clássico/2011 <br>• Cross Pilates/2019",
        "cargo": "Fisioterapeuta",
        "conselho": "CREFITO 9- 54995-F",
    },
    "Aline Lima": {
        "text": "Texto 3",
        "cargo": "Esteticista",
        "conselho": "none",
    },
    "Dra. Thamires Oliveira": {
        "text": "4text",
        "cargo": "Fisioterapeuta",
        "conselho": "CREFITO 9- 320766-F",
    },
}

let Selected = 0
let oldTimeout = []

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
    infoValues.children[1].innerHTML = selectedValues[Selected].conselho
    Write(selectedValues[Selected].text, infoValues.children[2], 7)
    cargoVal.children[0].innerHTML = selectedValues[Selected].cargo
    ImageList.style.transform = `translate(${-(Selected * 40) - 20}em, -50%)`
}

function Write(text, parent, ms) {
    if (window.innerWidth < 1145) {parent.innerHTML = text; return};
    oldTimeout.forEach(val => {
        clearTimeout(val)
    })
    textLength = text.length
    for (let i = 0; i <= textLength; i++) {
        oldTimeout.push(setTimeout(() => {
            parent.innerHTML = text.substring(0, i)
        }, ms * i))
    }
}

UpdatePortrait()