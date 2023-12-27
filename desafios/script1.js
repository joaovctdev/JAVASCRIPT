function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.lenght == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
         var fsex = document.getElementsByName('radsex')
         var idade = ano - Number(fano.value)
         var gênero = ''
         var img =  document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
         gênero = 'Homem'
            if (idade >=0 && idade <5){
            
                img.setAttribute('src', 'crianca.homem.png')
                }else if(idade < 21){
                img.setAttribute('src', 'jovem-h.jpeg')
                } else if (idade < 50){
                img.setAttribute('src', 'adulto-h.jpeg')
                }else {
                img.setAttribute('src', 'idoso-h.webp')
                }
        } else if (fsex[1].checked){
                gênero = 'Mulher'
                if (idade >=0 && idade <5){
                //crianca
                 }else if(idade < 21){
                //jovem
                } else if (idade < 50){
                //adulto
                }else {
                //idoso
                }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com 
        ${idade} anos`
        res.appendChild(img)
    }
}