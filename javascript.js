//ACTIVIDAD
//funcion de menu
const MostrarDatos = () =>{
    let num1 = 4;
    let num2 = 6;
    let num3 = 9;
    let cuadrado = Cuadrado(num1);
    let suma = Suma(num1,num2,num3);
    console.log("El cuadrado de", num1,"es =",cuadrado);
    console.log("Suma =", suma);

}

//funcion area de un cuadrado
const Cuadrado = numero =>{
    return numero*numero;
}

//funcion area de un triangulo
const Suma = (num1, num2, num3) =>{
    return num1+num2+num3;
}

console.log(MostrarDatos());