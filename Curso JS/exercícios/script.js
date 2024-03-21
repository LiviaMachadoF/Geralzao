function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
      img.src = 'https://images.pexels.com/photos/165537/pexels-photo-165537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      document.body.style.background = '#escd9f'
    } else if (hora >= 12 && hora < 18) {
      img.src = 'https://images.pexels.com/photos/33545/sunrise-phu-quoc-island-ocean.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      document.body.style.background = '#b9846f'
    } else {
      img.src = 'https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      document.body.style.background = '#515154'
    }
  
  }