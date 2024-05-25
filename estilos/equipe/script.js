const ImageList = document.getElementById("img-list")
const infoValues = document.getElementById("info")
const cargoVal = document.getElementById("portrait-cargo")
var portraitButtons = document.getElementsByClassName("portrait-button")

const Infos = {
    "Dra. Michelle Mesquita": {
        "text": "Dra. Michelle Mesquita é a fisioterapeuta responsável e proprietária da Clínica Meridian Bem Estar. Com uma trajetória sólida e diversificada no campo da fisioterapia, ela se compromete a oferecer tratamentos de alta qualidade e a promover o bem-estar de seus pacientes. Desde o início de sua carreira em 2002, Dra. Michelle tem continuamente ampliado seu conhecimento e aperfeiçoado suas habilidades por meio de diversas especializações e capacitações.<br><br><strong>Formações e Especializações:</strong><br><br>• Proprietária e Responsável Técnica da Clínica Meridian Bem Estar<br>• Fisioterapeuta pela UNIC (2002)<br>• Pós-graduada em Acupuntura (2006)<br>• Especialista em Dermato-funcional (2014)<br>• Capacitação em Reeducação Postural Global (RPG) (2008)<br>• Formação em Pilates Clássico (2011)<br>• Formação em Cross Pilates (2019)",
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
    var selectedValues = Object.values(Infos)[Selected]

    Write(selectedValues.text, infoValues.children[2], 3)

    changePortraitValues(selectedKey, selectedValues.cargo, selectedValues.conselho)
    
    ImageList.style.transform = `translate(${-(Selected * 40) - 20}em, -50%)`
}

function changePortraitValues(nome, cargo, conselho) {
    infoValues.children[0].innerHTML = nome
    cargoVal.children[0].innerHTML = cargo
    infoValues.children[1].innerHTML = conselho
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