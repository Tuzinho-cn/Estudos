var nn = []
var nada = -1 

function adicionar() {
    var numb = document.getElementById("txtn")
    var nume = document.getElementById("selnum")
    var res = document.getElementById("res")
    var res2 = document.getElementById("res2")
    var n = Number(numb.value)
    var pos = nn.indexOf(n)
    var nop = -1
    if (numb.value.length == 0) {
        alert ("Por favor digite um número")
    } else if (n > 100) {
        alert ("Por favor digite um número menor que 100")
    } else if (pos != nop) {
        alert (`O número ${n} já foi adicionado`)
    } else {
        nn.push(n)
        nn.sort()
        nada ++
        var item = document.createElement("option")
        item.text = `Valor ${n} adicionado`
        item.value = `nume ${n}`
        nume.appendChild(item)
        res2.innerHTML = ``
         }
}

function finalizar() {
    var numb = document.getElementById("txtn")
    var nume = document.getElementById("selnum")
    var res = document.getElementById("res")
    var res2 = document.getElementById("res2")
    var n = Number(numb.value)

    res2.innerHTML += `<p> Ao todo temos ${nn.length} valores cadastrados</p>`
    res2.innerHTML += `<p> O maior valor informado foi ${nn[nada]} </p>`
    res2.innerHTML += `<p> O menor valor informado foi ${nn[0]}</p>`
    res2.innerHTML += `<p> ${soma} </p>`
}


