function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 4) {
                //Baby
                img.setAttribute('src', 'BBH.png')
            } else if (idade >= 4 && idade < 12) {
                //Criança
                img.setAttribute('src', 'CCH.png')
            } else if (idade >= 12 && idade < 21) {
                //Jovem
                img.setAttribute('src', 'DDH.png')
            } else if (idade >= 21 && idade < 50) {
                //Adulto
                img.setAttribute('src', 'EEH.png')
            } else {
                //Idoso
                img.setAttribute('src', 'FFH.png')
            }
        } else if (fsex[1].checked){
            genero = 'mulher'
            if (idade >= 0 && idade < 4) {
                //Baby
                img.setAttribute('src', 'BBM.png')
            } else if (idade >= 4 && idade < 12) {
                //Criança
                img.setAttribute('src', 'CCM.png')
            } else if (idade >= 12 && idade < 21) {
                //Jovem
                img.setAttribute('src', 'DDM.png')
            } else if (idade >= 21 && idade < 50) {
                //Adulto
                img.setAttribute('src', 'EEM.png')
            } else {
                //Idoso
                img.setAttribute('src', 'FFM.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}