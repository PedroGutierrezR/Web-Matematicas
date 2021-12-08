// Formulas: raiz cuadrada de "n" numeros al cuadrado, divididos por "n". raiz de: x^2 + x^2 + x^2 / 3.
// La media cuadrática es muy útil para calcular la media de variables que toman valores negativos y positivos. Se suele utilizar cuando el símbolo de la variable no es importante y lo que interesa es el valor absoluto del elemento. Por ejemplo, para calcular la media de errores de medida.

const lista = [];

function calcularLista(lista) {
    let sumaLista = 0;
    for (let i = 0; i < lista.length; i++){
        const multiplicarLista  = lista[i] * lista[i];      
        sumaLista = sumaLista + multiplicarLista;
    }
    
    const resultado = Math.sqrt(sumaLista / lista.length);
    
    const write = document.getElementById("write");
    write.innerHTML = "La media cuadrática es: " + resultado;
}


