let num = [9,8,7,6,]
let x = [5,4,3,2,1]
num.push(x)
num.sort()
x.push(num)
console.log(`Nosso vetor é o ${num} `)
console.log(`Nosso vetor tem ${num.length} elementos`)
console.log(`o terceiro valor do vetor é ${num[3]} `)

console.log(`Nosso array sao os ${x}`)
console.log(`Nosso array tem ${x.length} elementos`)
console.log(`o primeiro valor do array é ${x[0]} `)
console.log(`Voce tem ${x[1]} dias para reembolsar`)
console.log(`Voce tem ${num[2]} dias para reembolsar`)
for(let pos=0;pos<num.length; pos++){
    console.log(`A posicao ${pos} tem o valor ${num[pos]}`)
}
for(let pos in x){
    console.log(`as pocisoes ${pos} tem o valor ${x[pos]}`)
}
let n = x.indexOf(4)
console.log(`O index é ${n}`)
if ( n == -1){
    console.log('O valor nao foi encontrado')
} else {
    console.log(`O valor esta na posicao ${n}`)
}
if ( n === 1 ){
    console.log(`Parabens voce foi sorteado seu número foi ${n}`)
} else {
    console.log(`Sinto muito voce nao foi sorteado seu numero foi ${n}`)
}