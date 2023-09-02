// Gestor de Contactos:
// Crea un objeto contactos que almacene una lista de objetos, donde cada objeto represente un contacto con propiedades como nombre, telefono y email. Luego, agrega un nuevo contacto a la lista y muestra en la consola la cantidad total de contactos.

const CONTACTOS = {
    contacto1: {
        nombre: "Elvira",
        edad: 68,
        email: "nona@elmaildelanona.com"
    },
    contacto2: {
        nombre: "Atilio",
        edad: 83,
        email: "atilio@live.com.ar"
    },
    contacto3: {
        nombre: "Marcelo",
        edad: 88,
        email: "marcelino@gmail.com"
    },
    contacto4: {
        nombre: "Lucrecia",
        edad: 28,
        email: "lucree@yahoo.com"
    },
    contacto5: {
        nombre: "Estefania",
        edad: 46,
        email: "estefi@hotmail.com"
    },
    contacto6: {
        nombre: "Agostina",
        edad: 33,
        email: "agostinaa_@outlook.com"
    },
}

// hasta acá hay 6 contactos
console.log(CONTACTOS)

// agrego otro contacto
CONTACTOS.contacto7 = {
    nombre: "Martin",
    edad: 24,
    email: "tincho@outlook.com"
}

// muestra que hay 7 contactos
console.log(CONTACTOS)
