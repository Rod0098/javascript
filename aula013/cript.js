function carregar() {
   var msg = window.document.getElementById('msg')
   var img = window.document.getElementById('imagem')
   var data = new Date()
   //var hora = data.getHours()
   var hora = 15
   msg.innerHTML = `Agotra são ${hora} horas.`
   if (hora >= 0 && hora < 12) {
    img.src = "../aula013/imagens/manha.png"
    document.body.style.background = 'rgb(186, 186, 250)'
   }else if (hora >= 12 && hora < 18){
    img.src = "../aula013/imagens/tarde.png"
    document.body.style.background = 'rgb(182, 81, 34)'
   }else {
    img.src = "../aula013/imagens/noite.png"
    document.body.style.background = 'rgb(3, 3, 49)'
   }

}
