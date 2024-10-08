
//taller secondo corte
const esPar = function(numero) {
    return numero % 2 === 0; 
};

const numero = 7; 

if (esPar(numero)) {
    console.log(`El número ${numero} es par.`);
} else {
    console.log(`El número ${numero} es impar.`);
}

// segundo punto

function tipoTriangulo(lado1, lado2, lado3) {
    let untrianguloes;
    
    if (lado1 === lado2 && lado2 === lado3) {
        untrianguloes = 'Equilátero';
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        untrianguloes = 'Isósceles';
    } else {
        untrianguloes = 'Escaleno';
    }
    
    return untrianguloes;
}


let lado1 = 8;
let lado2 = 9;
let lado3 = 3;

console.log(tipoTriangulo(lado1, lado2, lado3));
