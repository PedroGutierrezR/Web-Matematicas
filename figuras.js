// CÓDIGO DEL CUADRADO

function perimetroCuadrado(lado) {
    return lado * 4;
} 

function areaCuadrado(lado) {
    return lado * lado;
}

// CÓDIGO DEL TRIÁNGULO

function perimetroTriangulo(lado1, lado2, base) {
    return Number(lado1) + Number(lado2) + Number(base);
} 

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
function alturaTriangulo(lado1, lado2, base) {

    const resultadoLado = lado1 * lado2;
    const resultadoBase = (base / 2) * (base / 2);
    const resultadoAlCuadrado = resultadoLado - resultadoBase;

    const altura = Math.sqrt(resultadoAlCuadrado);

    alert(altura);
}

// CÓDIGO DEL CÍRCULO

// Diámetro
function diametroCirculo(radio){
    return radio * 2;
}

// PI
const PI = Math.PI;

// Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio)
    return diametro * PI;
} 

//Área
function areaCirculo(radio) {
    return (radio * radio) * PI;
}

// INTERACTUANDO CON HTML
// Cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("input-cuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);

    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("input-cuadrado");
    const value = input.value;
 
    const area = areaCuadrado(value);

    alert(area);
}

// Triangulo

function calcularPerimetroTriangulo() {
    const inputSideA = document.getElementById("input-side-a")
    const inputSideB = document.getElementById("input-side-b")
    const inputSideBase = document.getElementById("input-side-base")

    const valueSideA = inputSideA.value;
    const valueSideB = inputSideB.value;
    const valueSideBase = inputSideBase.value;

    const perimetro = perimetroTriangulo(valueSideA, valueSideB, valueSideBase);

    alert(perimetro);
}
function calcularAreaTriangulo() {
    const inputBase = document.getElementById("input-base");
    const inputAltura = document.getElementById("input-altura");

    const valueBase = inputBase.value;
    const valueAltura = inputAltura.value;

    const area = areaTriangulo(valueBase, valueAltura);
    
    alert(area);
}

// Círculo

function calcularDiametroCirculo() {
    const inputRadio = document.getElementById("input-circulo");
    const valueRadio = inputRadio.value;

    const diametro = diametroCirculo(valueRadio);

    alert(diametro);
}
function calcularPerimetroCirculo() {
    const inputRadio = document.getElementById("input-circulo");
    const valueRadio = inputRadio.value;

    const perimetro = perimetroCirculo(valueRadio);

    alert(perimetro);
}
function calcularAreaCirculo() {
    const inputRadio = document.getElementById("input-circulo");
    const valueRadio = inputRadio.value;

    const area = areaCirculo(valueRadio);

    alert(area);
}

// Calcular altura de triángulo isósceles: dos lados iguales y la base. la altura normalmente se le llama "h". La altura divide el triángulo en dos... convirtiéndolo en un tríangulo rectángulo. Aquí aplicamos pitágoras. hipotenusa(lado) ^2 + = h^2 + base^2.

function calcularAlturaTriangulo() {
    const inputLado1 = document.getElementById("input-a");
    const inputLado2 = document.getElementById("input-b");
    const inputBase = document.getElementById("input-base-isosceles");

    const lado1 = Number(inputLado1.value);
    const lado2 = Number(inputLado2.value);
    const base = Number(inputBase.value);

    if (lado1 === lado2) {
        alturaTriangulo(lado1, lado2, base);
    } else {
        alert("Ingrese correctamente las medidas. Recuerde que el triángulo isósceles tiene sus dos lados iguales.");
    }
}

