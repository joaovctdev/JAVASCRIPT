function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()  
    var hora = data.getHours()
    msg.innerHTML = `Agora sao ${hora} horas.`
    if (hora >=0 && hora < 12) {
      img.src = 'manha.jpeg'
      document.body.style.background = '#887054'
    } else if ( hora >= 12 && hora <= 18){
        img.src = 'tarde.jpeg'
        document.body.style.background = '#ad696a'
    } else{
        img.src = 'noite.jpeg'
        document.body.style.background= '#5b4971'
    }
}