function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;

    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    
    return precioConDescuento;


}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("input-price");
    const inputCupon = document.getElementById("input-cupon");

    const price = inputPrice.value;
    const cupon = inputCupon.value;
    const codigos = ["pedro15", "gutierrez20", "rojas30"];
    const result = document.getElementById("result");
    let discount;

    if (cupon === codigos[0]) {
        discount = 15;
        const precioConDescuento = calcularPrecioConDescuento(price, discount);
        result.innerText = "El precio final es: $" + precioConDescuento + " dolares.";
    } else if (cupon === codigos[1]) {
        discount = 20;
        const precioConDescuento = calcularPrecioConDescuento(price, discount);
        result.innerText = "El precio final es: $" + precioConDescuento + " dolares.";
    } else if (cupon === codigos[2]) {
        discount = 30;
        const precioConDescuento = calcularPrecioConDescuento(price, discount);
        result.innerText = "El precio final es: $" + precioConDescuento + " dolares.";
    } else {
        result.innerText = "cupón incorrecto";
    }
}







