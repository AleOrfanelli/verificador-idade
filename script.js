function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var txtano = document.getElementById('txtano')
    var result = document.getElementById('resultado')

    if (txtano.value.length == 0 || Number(txtano.value) > ano || Number(txtano.value) < 1900) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var txtsex = document.getElementsByName('txtsex')
        var idade = ano - Number(txtano.value)
        var genero = ''
        var img = document.getElementById('imagem')
        if (txtsex[0].checked) {
            genero = 'Homem'
            if (idade > 0 && idade < 10) {
                //criança
                img.src = 'foto-bebe-m.jpg'
            } else if (idade < 23) {
                //jovem
                img.src = 'foto-jovem-m.jpg'
            } else if (idade < 60) {
                //adulto
                img.src = 'foto-adulto-m.jpg'
            } else {
                //idoso
                img.src = 'foto-idoso-m.jpg'
            }

        } else {
            genero = 'Mulher'
            if (idade > 0 && idade < 10) {
                //criança
                img.src = 'foto-criança-f.jpg'
            } else if (idade < 23) {
                //jovem
                img.src = 'foto-jovem-f.jpg'
            } else if (idade < 60) {
                //adulto
                img.src = 'foto-adulto-f.jpg'
            } else {
                //idoso
                img.src = 'foto-idoso-f.jpg'
            }
        }
        result.innerHTML = ` <p>${genero} com ${idade} anos!</p>`
    }
}
