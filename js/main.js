var miCarrito = [];
let miNombre = prompt("Ingresa tu nombre");
if (miNombre == null || miNombre == "") {
    miNombre = "Usuario Anónimo";
}

let validarDireccion = true;
do {
    var miDireccion = prompt("Ingresa tu dirección de envio");
    if (miDireccion.length <= 9) {
        alert("Ingresa un dirección de minimo 10 caracteres")
    } else if (miDireccion.length >= 10) {
        break;
    }
} while (validarDireccion == true);

function calcularImpuesto(valorBase, impPaisMxIva = 0.16) {
    let impuestos = valorBase * impPaisMxIva;
    alert("EL impuesto al valor agregado es de: " + impuestos + "MXN" + " '16% de IVA'");
    return valorBase + impuestos;
}

function validarRespuesta(texto, textoValidar) {
    if (texto.toLowerCase() == textoValidar) {
        return textoValidar
    }
}

let confirmacion = true;
do {

    let valorProducto
    do {
        valorProducto = parseFloat(prompt("Ingrese el valor del producto adquirido"))
        if (isNaN(valorProducto) == true) {
            alert("Solo se permiten numeros")
        }
    } while (isNaN(valorProducto) == true)

    let costoTotal = calcularImpuesto(valorProducto);
    alert("El costo con impuesto es de: " + costoTotal + "MXN");

    miCarrito.push(costoTotal);
    var suma = 0;
    for (i = 0; i < miCarrito.length; i++) {
        suma += miCarrito[i];
    }

    let resp = true;
    do {
        let respuesta = prompt("¿Desea ingresar otro producto? escriba SI, o NO para terminar con su compra.");
        if (validarRespuesta(respuesta, "no") == "no") {
            alert(`${miNombre} compraste ${miCarrito.length} producto's y el total de tu compra es de: ${suma} MXN y tu pedido se enviara a ${miDireccion} Gracias por tu compra!`);
            resp == false;
            confirmacion = false;
            break
        } else if (validarRespuesta(respuesta, "si") == "si") {
            alert(`Llevas ${miCarrito.length} producto's y el total de tu compra al momento es de: ${suma} MXN`);
            resp == false;
            confirmacion = true;
            break
        }
        alert(`Respuesta invalida`);

    } while (resp == true)

} while (confirmacion == true);