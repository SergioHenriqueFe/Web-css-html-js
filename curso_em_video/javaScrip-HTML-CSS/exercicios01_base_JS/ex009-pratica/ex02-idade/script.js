function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(formAno.value.lenght == 0 || Number(formAno.value) > ano){
         window.alert('[ERRO]Verifique os dados e tente novamente')
    }else{
      var fsex= document.getElementsByName('radsex')
      var idade = ano - Number(formAno.value) 
      var genero = ''
      var img = document.createElement('img')
      img.setAttribute('id','foto')
      if(fsex[0].checked){
        genero = 'Homem'
            if(idade >=0 && idade <10){
                //criança
                img.setAttribute('src','babyBoy.png');
                document.body.style.background = '##82B1FF';
            }else if(idade<21){
                //joven
                img.setAttribute('src','criancamenino.jpg')

            }else if(idade<50){
                //adulto#DBDDCF
                img.setAttribute('src','jovemHomem.png')
                                document.body.style.background = '##82B1FF';

            }else{
                //idoso
                img.setAttribute('src','idosoHomem.png')
            }
      }else if (fsex[1].checked){
        genero = 'Mulher'
            if(idade >=0 && idade <10){
                //criança
                img.setAttribute('src','babygirl.png')
            }else if(idade<21){
                //joven
                img.setAttribute('src','criancamenina.jpg')
            }else if(idade<50){
                //adulto
                img.setAttribute('src','jovemMulher.png')
            }else{
                //idoso
                img.setAttribute('src','idosoMulher.png')
            }

      }

    res.innerHTML = `genero ${genero}, idade ${idade}`
    res.appendChild(img)
    }


}