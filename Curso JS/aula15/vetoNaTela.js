let valores = [8,100,7,4,2,9]

let val = [5,8,2]


//Neste exemplo, a função passada para sort() compara dois números, a e b. Se o resultado da subtração a - b for negativo, a vem antes de b, se for positivo, b vem antes de a, e se for zero, eles são considerados iguais. Isso garante que os números sejam ordenados em ordem crescente.
valores.sort(function(a, b) {
    return a - b;
});

// console.log(valores)

// console.log(valores[0])
// console.log(valores[1])
// console.log(valores[2])
// console.log(valores[3])
// console.log(valores[4])
// console.log(valores[5])

// for(let pos=0; pos < valores.length; pos++){
//     console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
// }

for (let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
