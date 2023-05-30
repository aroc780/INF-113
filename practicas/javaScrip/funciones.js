//Desarrollar una función que retorne la cantidad de digitos que tiene una variable entera positiva.

function Digitos(){
    let num = document.getElementById("num").value;
    let x = num.length;
    alert("El número "+num+" tiene "+x+" dígitos.");

}

//Elaborar una función que reciba tres enteros y retorne el promedio.

function promedio(){
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let num3 = parseInt(document.getElementById("num3").value);

    let p = (num1 + num2 + num3) / 3;

    alert("El promedio es "+p);
}

//Confeccionar una función que solicite la carga de 5 valores por teclado y retorne su suma.

function suma(){
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let num3 = parseInt(document.getElementById("num3").value);
    let num4 = parseInt(document.getElementById("num4").value);
    let num5 = parseInt(document.getElementById("num5").value);

    let x = num1 + num2 + num3 + num4 + num5;
    alert("La suma es: " + x)

}