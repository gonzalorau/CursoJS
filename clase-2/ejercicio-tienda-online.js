// Tienda en Línea:
// Crea un objeto producto con propiedades como nombre, precio y disponible. Luego, crea una función llamada mostrarProducto que tome un objeto producto como argumento y muestre en la consola toda la información del producto.

const PRODUCTO = {
    nombre: "Velador",
    precio: 900,
    disponible: true
}

// desestructuracion de un objeto
mostrarProducto = ({nombre, precio, disponible}) => {
    console.log(`Nombre: ${nombre}`)
    console.log(`Precio: ${precio}`)
    console.log(`Disponible: ${disponible}`)
}

mostrarProducto(PRODUCTO)
