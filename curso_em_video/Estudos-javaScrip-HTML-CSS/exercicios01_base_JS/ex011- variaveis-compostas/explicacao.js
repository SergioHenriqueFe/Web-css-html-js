// Variavel simples var aS = objeto1 , se eu quiser por outro objeto na mesma varivel aS, exemplo objeto2, a variavel aS passara a ter valor objeto2
// porém pode ser usada variaveis compostas (arrays =vetor) onde eu posso guardar mais de um valor dentro de uma variavel
// variavel composta var aC = [objeto1,objeto2,objetox,...,objeto n-1],
// para selecionar o valor de aC, usamos indice = n = n-1, ou seja, o indice começa no 0.
//array(vetor) = é a variavel aC do exemplo
//Elemento de um vetor = é um espaço que agrupa na memoria o valor dento dele e o indice
//indice (chave = key) = inicia no 0(zero)
//conteudo = objetos1, objeto2...

let numeros = [1,2,3]
numeros=[3]= 6 // acrescentar o valor 6 no indice 3,
numeros.push(7) // acrescenta e cria um idice novo 
numeros.length // irá mostrar a quantida de indice
numeros.sort() // color de forma ordenada 
numeros.indexOf(2) // irá busca o número 2 no array e mostrar o idice dele
for (let pos = 0; pos<numeros.length;pos++){
    console.log(numeros[pos]) // para mostrar todos os numeros dentro do vetor
}
for (let pos in numeros){
    console.log(numeros[pos])
} //  para cada posição em num eu vou mostra num[p] for in só funciona para array e object

