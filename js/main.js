var miCarrito = [];
let miNombre = prompt("Ingresa tu nombre");

if (miNombre == null || miNombre == "") {
    miNombre = "Usuario Anónimo";
}

function calcularImpuesto(valorBase, impPaisMxIva = 0.16) {
    let impuestos = valorBase * impPaisMxIva;
    alert("EL impuesto al valor agregado es de: " + impuestos + "MXN" + " '16% de IVA'");
    return valorBase + impuestos;
}

let confirmacion = true;
do {
    let valorProducto = parseFloat(prompt("Ingrese el valor del producto"));
    if (isNaN(valorProducto) || valorProducto <= 0) {
        valorProducto = parseFloat(0);
        suma = 0;
        alert("Ingresa un valor numerico mayor a 1, presiona F5 para reiniciar tu compra");
        break
    }

    let costoTotal = calcularImpuesto(valorProducto);
    alert("El costo con impuesto es de: " + costoTotal + "MXN");

    miCarrito.push(costoTotal);

    var suma = 0;
    for (i = 0; i < miCarrito.length; i++) {
        suma += miCarrito[i];
    }

    let respuesta = prompt(`¿Desea ingresar otro producto? escriba SI o NO cualquier otra respuesta diferente de NO se tomara como un SI`);
    let respuesta2 = alert(`Llevas ${miCarrito.length} producto's y el total de tu compra al momento es de: ${suma} MXN`);

    if (respuesta == 'no' || respuesta == 'NO' || respuesta == 'No' || respuesta == 'nO') {
        respuesta3;
        confirmacion = false;
    }
    respuesta2
} while (confirmacion == true);

var respuesta3 = alert(`Gracias ${miNombre} compraste ${miCarrito.length} producto's y el total de tu compra es de: ${suma} MXN`);