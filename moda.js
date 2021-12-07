function calcularModa(lista) {
    const listaCount = {};
    lista.map(
        function (elemento) {
            if (listaCount[elemento] == true) {
                listaCount[elemento] += 1;
            } else {
                listaCount[elemento] = 1;
            }
        }
    );
    const listaArray = Object.entries(listaCount).sort(
        function (prev, next) {
         return prev[1] - next[1];
        }
    );
    const moda = listaArray[listaArray.length - 1];

    return moda;
}


