function calcular() {
    var inicio = document.getElementById('txtinicio')
    var fim =document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')
    var res = document.getElementById('txtres')

  

    
    if(inicio.value.length == 0 || fim.value.length == 0 ||passo.value.length == 0  ){
         window.alert('[ERRO]Falta dados')
    }else {
        res.innerHTML = 'Contando: '
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if(i<f){
            for(let c = i; c<=f; c+=p){
                res.innerHTML += `${c} \u{1f449}`
        }
       }else{
            for (let c = i ; c>= f; c-=p){
                res.innerHTML += `${c} \u{1f449}` 
            }
       }
            


    }


}