for(let i = 0; i<10; i ++ ){    //console.log('El valor de i es igual a: ' +i);
}

function count(desde, hasta){
    while (desde < hasta){
        //console.log(" El número actual es: " + desde + " y es menor a " + hasta)
        desde++
    }
} 
//count(4, 6)

//function sumar(numeroA, numeroB) {
    //return numeroA + numeroB
//}
//console.log (sumar(5,8));

//function resta(numeroA, numeroB){
    //return numeroA - numeroB
//}
//console.log(resta(20, 15))

//let calculadora = require('./calculadora');
//console.log (calculadora);

//Arrow Function 

//let laMitad = numero => numero / 2
//console.log(laMitad('8'));

//let dividir = (nuemroA, numeroB) => nuemroA / numeroB;
//console.log(dividir(20, 4));

let tengoQueTrabajar = dia => {
    if(dia == 'Sabado' || dia == 'Domigo'){
        return 'Notenes que trabajar';
    }else{
        return 'Si, Daiana, tenes que trabajar';
    }
}
//console.log(tengoQueTrabajar('Lunes'));

let sumar = (numA, numB) => numA + numB
let restar = (numA, numB) => numA - numB
let multiplicar = (numA, numB) => numA * numB
let dividir = (numA, numB) => numA / numB

let calculadora = (numA, numB, operacion) => operacion(numA, numB);

//console.log(calculadora(18, 3, sumar)); 

function calcular(n1, n2, operacion){
    return operacion(n1, n2)
}

//console.log(calcular(10, 5, sumar))

function saludoPersonalizado(n){
    let hola = 'Hola';
    function saludo(){
    return hola + n + "!"
}
return saludoPersonalizado()
}

//console.log(saludoPersonalizado('Dai'))

let alumnos = ["Juan","Pepe", "Jorge", "Francisco"];

console.log(alumnos.indexOf("Juan"));
console.log(alumnos.indexOf("Francisco"));
