// Peliculas Favoritas:
// Crea un objeto usuario con propiedades como nombre y peliculasFavoritas, que es un array de objetos donde cada objeto representa una película con propiedades como titulo y año. Agrega al menos tres películas favoritas y muestra en la consola el título de la segunda película favorita.

const USUARIO = {
nombre: "Gonzalo",
peliculasFavoritas: [
    pelicula1 = {
        titulo: "Star Trek",
        anio: 2016
    },
    pelicula2 = {
        titulo: "Mad Max",
        anio: 2015
    },
    pelicula3 = {
        titulo: "Indiana Jones",
        anio: 2008
    },
    palicula4 = {
        titulo: "Harry Potter",
        anio: 2001
    },
    pelicula5 = {
        titulo: "Batman",
        anio: 2012
    }
]
}

console.log(`La peli favorita de ${USUARIO.nombre} es ${USUARIO.peliculasFavoritas[1].titulo} que se estreno en el año ${USUARIO.peliculasFavoritas[1].anio}`)
