function carregar(){
    var mensagem = window.document.getElementById('mensagem')
    var imagem = window.document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    var hora = 22
    var saudacao= window.document.getElementById('saudacao')
   
    mensagem.innerText= `Agora são ${hora} horas.`

    if(hora >= 0 && hora <12){
        //BOM DIA
        imagem.src ="manha.jpg"
        document.body.style.background = '#416CA6'
        saudacao.innerHTML='Bom dia'
        
    }else if(hora >=12 && hora<=18){
        //BOA TARDE
        imagem.src = "tarde.jpg"
        document.body.style.background = '#F24C27'
        saudacao.innerHTML='Boa tarde'
    }else{
        // BOA NOITE
        imagem.src="noite.jpg"
        document.body.style.background = '#051326'
        saudacao.innerHTML='Bom noite'
        
    }
}