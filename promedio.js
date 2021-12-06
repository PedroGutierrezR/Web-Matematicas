function calcularMediaAritmetica() {
    // let sumaLista = 0;

    // for (let i = 0; i < lista.length; i++){
    // sumaLista = sumaLista + lista[i];
    // }

    // const sumaLista = lista.reduce(
    //     function (valorAcumulado = 0, nuevoElemento) {
    //         return valorAcumulado + nuevoElemento;
    //     }
    // );

    const valorOne = document.getElementById("valor1");
    const valueOne = Number(valorOne.value);

    const valorTwo = document.getElementById("valor2");
    const valueTwo = Number(valorTwo.value);

    const valorThree = document.getElementById("valor3");
    const valueThree = Number(valorThree.value);

    const valorFour = document.getElementById("valor4");
    const valueFour = Number(valorFour.value);


    const promedioLista = (valueOne + valueTwo + valueThree + valueFour) / 4;

    const escribir = document.getElementById("write");
    escribir.innerText = "Tu promedio es: " + promedioLista;
}