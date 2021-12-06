// VARIABLES GLOBALES
const lista = [
    1,
    400,
    200,
    300,
    1000000,
    2,
    140,
];

function comparar(a, b) {
    return a - b;
}
lista.sort( comparar ); 

const mitadLista = parseInt(lista.length / 2);

let mediana;

// FUNCIONES

// Calcular promedio
function calcularPromedio(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

// Función para ver si es par o no
function esPar(numero) {
    if (numero % 2 === 0) {
        return true
    } else {
        return false
    }
}


// Función para calcular cualquier lista.. aquí ocurre el programa realmente

function calcularMediana(lista) {
    const writeHtml = document.getElementById("write");
    if (esPar(lista.length)) {

        const firstNumber = lista[mitadLista - 1];
        const secondNumber = lista[mitadLista];

        const mediana = calcularPromedio([firstNumber, secondNumber]);

        writeHtml.innerText = "El resultado de la mediana es: " + mediana;

    } else {

        mediana = lista[mitadLista];
        writeHtml.innerText = "El resultado de la mediana es: " + mediana;
        
    }
}



