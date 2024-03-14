// Se o dia for menor que o dia atual
// colocar alerta de dia inválido
// 
// Se hora, for menor que hora atual,
// for um tempo menor que uma hora ou
// for um horário fora da hora de atendimento
// colocar alerta de hora invalida

var nome = document.getElementById('txtnome') //OK
var nmr = document.getElementById('txtnmrt') //OK
var per = document.getElementById('per') //OK
var res = document.getElementById('res') //OK
var dia = document.getElementById('txtdia')
var mes = document.getElementById('txtmes')
var ano = document.getElementById('txtano')
var hour = document.getElementById('txthora')
var numeros = [] //OK
var date = []
var horários = []

function finalizar() {
    var name = String(nome.value) //OK
    var hora = String(hour.value)
    var nm = Number(nmr)
    //alert (hora)
    //alert (name) //OK
    //var numeros = [] //OK
    //numeros.push(num) //OK

    if (nm < 11) {
        alert ('Não se esqueça de colocar o DDD e adicionar o 9 no início')
    } else if (nm > 11) {
        alert (`O número inserido, possui mais digitos que o normal`) 
    //} else if (datat != date) {
        //alert (`ERRO`)
    } else {
        numeros.push(nm) //OK
        horarios.push()
        alert (numeros) //OK
        alert (data)
        alert (`Tudo OK`) //OK
    }
}

/* PRECISO FAZER:
- A DATA FUNCIONAR
- A HORA FUNCIONAR
- DECLARAR QUE FOI AGENDADO
- DEIXAR OS DADOS DO AGENDADO SALVOS
NA ÁREA DO BARBEIRO*/