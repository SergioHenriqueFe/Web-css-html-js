function tabuada(){
    var numb = window.document.getElementById(txtn)
    var tab = window.document.getElementById(seltab)

    if(numb.value.length == 0){
        window.alert('Digite um Número')
        
        
    }else {
        var n = Number(numb.value)
        var c = 1
        tab.innerHTML = ''
        while(c <=10){
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}