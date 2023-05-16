var agora = new Date()
var diaSemana = agora.getDay()
/* 
0 = Domingo
1 = Segunda
    .
    .
    .
    .
6 = Sexta

*/
console.log(diaSemana)
switch(diaSemana){
    case 0 :
        console.log(`Domingo`)
        break
    case 1 : 
        console.log(`Sergunda`)
        break
    case 2 :
        console.log(`Terça`)
        break
    case 3 : 
        console.log(`Quarta`)
        break
    default:
        console.log(`[ERRO] Eu não digitei todos os dias da semana`)
}
   