function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;

    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    
    return precioConDescuento;
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("input-price");
    const inputDiscount = document.getElementById("input-discount");

    const price = inputPrice.value;
    const discount = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(price, discount);

    const result = document.getElementById("result");

    result.innerText = "El precio final es: $" + precioConDescuento + " dolares.";

}



// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// });

