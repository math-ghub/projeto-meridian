const infoLoja = document.querySelector("#estado-clinica > h2")
const horarioTexto = document.querySelector("#estado-clinica > p")
const valorHorario = horarioTexto.querySelector("#horario")
const horarioValue = new Date()

const Agenda = {
    Domingo: null,
    Segunda: ["7-11", "14-19"],
    Terça: ["7-11", "14-20"],
    Quarta: ["7-11", "14-19"],
    Quinta: ["7-11", "14-20"],
    Sexta: ["7-11", "14-18"],
    Sabado: ["7-11"],
}

function checkFuncionamento() {
    let dia = horarioValue.getDay()
    const hora = horarioValue.getHours()
    let restante;
    let inicio;
    let fim;
    if (dia == 0) {
        inicio = parseInt(Agenda.Segunda[0].split("-")[0])
        lojaStatus(false, (24 + inicio) - hora)
        return
    };

    for (i in Object.keys(Agenda)) {
        if (i == dia) {
            const horariosFuncionamento = Object.values(Agenda)[i]
            for (b of horariosFuncionamento) {
                v = b.split("-")
                inicio = parseInt(v[0])
                fim = parseInt(v[1])
                if (hora >= inicio && hora < fim) {
                    restante = (fim - hora)
                    lojaStatus(true, restante)
                    return;
                } 
            }
            let novoHorario;
            let soma = 0;
            if (hora >= fim) {
                novoHorario = dia + 1
                if (novoHorario > 6) {novoHorario = 1; soma = 24};
                const proxFuncionamento = Object.values(Agenda)[novoHorario]
                const novoInicio = proxFuncionamento[0].split("-")[0]
                novoResto = parseInt(novoInicio) + (24 - hora) + soma
                lojaStatus(false, novoResto)
                return
            }
            let k = parseInt(horariosFuncionamento[0].split("-")[0])
            let mesmoInicio = k > hora ? k : parseInt(horariosFuncionamento[1].split("-")[0])
            lojaStatus(false, mesmoInicio - hora)
        }
    }
}

function lojaStatus(bool, rest) {
    const minuto = horarioValue.getMinutes()
    let variavel =(rest == 1 && minuto > 0) ? "Minuto" : "Hora"
    rest = (rest == 1 && minuto > 0) ? 60 - minuto : rest
    let plural = rest > 1 ? "s" : "";
    infoLoja.innerText = bool ? "Aberto" : "Fechado"
    infoLoja.style.color = bool ? "lightGreen" : "Red"
    horarioTexto.innerHTML = (bool ? "Fecha" : "Abre") + " em: <span id='horario'>" + rest + " " + variavel + plural
}

checkFuncionamento()