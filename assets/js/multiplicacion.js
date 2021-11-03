var nMultiplicar = parseInt(prompt("Ingresa un valor a multiplicar, entre 0 y 20:"));

if (nMultiplicar > 20) {
    alert("número fuera del rango, 0 y 20");
    parseInt(prompt("Ingresa el valor a multiplicar:"));
}

for (let j = 1; j <= nMultiplicar; j++) {
    var result = j * nMultiplicar;
    console.log(`${nMultiplicar} * ${j} = ${result}`);
}
if (nMultiplicar === 0) {
    console.log(`${nMultiplicar} * 0 = 0`);
} else if (nMultiplicar < 0) {
    console.log("Debes ingresar un valor entre 0 y 20");
} else {
    var factorial = 1;
    for (let j = 1; j <= nMultiplicar; j++) {
        factorial *= j;
        console.log(`El valor factorial de ${j} es ${factorial}.`);
    }
}

// 1 x 3 = 3
// 2 x 3 = 6
// 3 x 3 = 9
// Factorial de 1 es: 1
// Factorial de 2 es: 2
// Factorial de 3 es: 6