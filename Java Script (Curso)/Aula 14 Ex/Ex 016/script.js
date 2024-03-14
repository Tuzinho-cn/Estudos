/*var ini = window.document.querySelector("input#in")
var i = Number(ini.value)
var fi = window.document.querySelector("input#fim")
var f = Number(fi.value)
var pa = document.querySelector("input#pas")
var p = Number(pa.value)
var dados = window.document.getElementById("dados")
var res = window.document.getElementById("res")*/


function contar(){
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossível contar'
        //window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando:'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if(p <= 0) {
            window.alert('Passo inválido! Considerando PASSO = 1')
            p = 1
        }
        if (i < f){
        for( var c = i ; c <= f ; c += p ){
            res.innerHTML += ` ${c} \u{1F449} `
            }
        } else {
            for ( var c = i; c >=f; c -= p ){
                res.innerHTML += ` ${c} \u{1F449} `
            }
            res.innerHTML += `\u{1F3C1}`
        }
        
    }
}
