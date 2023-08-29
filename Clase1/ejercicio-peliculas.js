// Peliculas Favoritas:
// Crea un objeto usuario con propiedades como nombre y peliculasFavoritas, que es un array de objetos donde cada objeto representa una película con propiedades como titulo y año. Agrega al menos tres películas favoritas y muestra en la consola el título de la segunda película favorita.

let usuario = {
    nombre: 'Gonzalo',
    peliculasFavoritas: [
      {
        peli1: {
          titulo: 'Piratas del caribe',
          anio: 2017
        },
        peli2: {
          titulo: 'Oppenheimer',
          anio: 2023
        },
        peli3: {
          titulo: 'cccc',
          anio: 2025
        }
      }
    ]
  }
  
  console.log(usuario.peliculasFavoritas[0].peli2.titulo)
  