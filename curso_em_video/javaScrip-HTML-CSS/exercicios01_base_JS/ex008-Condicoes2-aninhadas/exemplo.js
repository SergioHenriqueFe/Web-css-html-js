var idade = 24 
var cartaAB = true

if(idade == 18){
    console.log('Você pode tirar carta A(carro) e B(moto)')
}else {
    if(idade == 24 && cartaAB == true){
        console.log('você pode tirar carta D')
    }else{
        console.log('você não pode ')
    }
}