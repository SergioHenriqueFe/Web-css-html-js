var num = document.getElementById('fnum')
var lista = document.querySelector('select#flista')
var res = document.querySelector('div#res')
var valores=[]

function isNumero(n){
    if(Number(n)>=1 && Number(n) <=100){
        return true
    }else{
        return false 
    }
}

function inLista(n , l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else {
        return false 
    }

}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value,valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML =''

    }else{
        window.alert('valor inválido ou já encontrado na lista.')
    }
    num.value= ''
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        window.alert('adicione valores antes de finalizar')
    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media =0 
        for(let pos in valores){
            soma += valores[pos]
            if (valores[pos]> maior)
            maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos]
        }
        media = soma /tot
        res.innerHTML ='' 
        res.innerHTML +=` <p>Ao todo temos, ${tot} núemros cadastrado na lista</p>`
        res.innerHTML += `<p>o maior valor ${maior}</p>`
        res.innerHTML += `<p>menor valor ${menor}</p>`
        res.innerHTML += `<p>soma da lista ${soma}</p>`
        res.innerHTML += `<p>a média dos valores ${media}</p>`
    }
}