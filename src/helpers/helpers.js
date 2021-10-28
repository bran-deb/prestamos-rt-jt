export function calcularTotal(cantidad, plazo) {

    let totalCantidad
    if (cantidad <= 1000) {
        totalCantidad = cantidad * .25
    } else if (cantidad > 1000 && cantidad < 5000) {
        totalCantidad = cantidad * .20
    } else if (cantidad > 5000 && cantidad > 10000) {
        totalCantidad = cantidad * .15
    } else if (cantidad > 10000) {
        totalCantidad = cantidad * .10
    }
    console.log(totalCantidad)
}