//funciones

function opeBasicas(){

    //declaro las variables
let A,B,S,R,M,D = 0;

//Se notifica al usuario que realiza este algoritmo

alert ("Este algoritmo realiza operaciones como: Suma, Resta,Multiplicación y Division")

//capturar los datos de entradas o Imputs
A = parseInt(prompt("Por favor ingrese el primer número"));
B= A = parseInt(prompt("Por favor ingrese el segundo número"));

// Realizar el proceso
S = A + B;
R = A - B;
M = A * B;
D = A / B;

// Dar Resultado
alert("El Resultado de la Suma es: " + S);
alert("El Resultado de la resta es: " + R);
alert("El Resultado de la  multiplicación es: " + M);
alert("El Resultado de la división es: " + D);
}

  // 2°  Algoritmo con condicional

  function servicioMilitar(){

     //declaro las variables
    let edad = 0;
    let genero = "";
    let hijoUnico= "";

    //Se notifica al usuario que realiza este algoritmo
    
    alert("Este algoritmo determina si eres apto para prestar el Servicio Militar obligatorio. Ten en cuenta que debes ser menor de 26 años, no ser hijo único y ser masculino.");

    //capturar los datos de entradas o Imputs

    edad = parseInt(prompt("Por favor, ingrese su edad"));
    genero = prompt("Por favor ingrese su género: F- Femenino o M-Masculino");
    hijoUnico = prompt("Por favor ingrese Si o No, de ser único");

    // Realizar el proceso

    if (edad>=18 && edad<=26) {

        if (genero === "M") {

            if (hijoUnico === "No") {

                alert("Eres apto para prestar el servicio militar");

            }else{
                alert("No eres apto para prestar el servicio Militar");

            }
        }else{
            alert("No eres apto para prestar el servicio Militar")
        }
    }else{
        alert("No es apto por su edad");

    }
 }


 // 3°  Algoritmo 

 function sumaNumero(){

    //Declaro variable

    let suma = 0;

    //Se notifica al usuario que realiza este algoritmo

    alert("Este algoritmo calcula la suma de los valores dentro de un rango especificado.");

    let inicio = parseInt(prompt("Por favor, ingrese el punto de partida."));
    let fin = parseInt(prompt("Por favor, ingrese el valor del último número."));

    contador = inicio;
    while (contador <= fin){
        suma += contador;

        contador ++
    }
    alert ("La suma de los números del " + inicio + "al " + fin + "es:" + suma);

 }

