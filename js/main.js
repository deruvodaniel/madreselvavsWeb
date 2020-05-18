// A $( document ).ready() block.
$(document).ready(function () {
    console.log('Hola Mundo desde jQuery')

    // datos de anuncios
    var anuncios = [
        {
            nombre: 'Pack Full Proteína',
            descripcion: '10 Platos protéicos, Ideal para deportistas',
            precio: '2450',
            imagen : 'packproteina.jpg'
        },
        {
            nombre: 'Pack Veggie',
            descripcion: '10 Platos Vegetarianos, Super Sabrosos!',
            precio: '2150',
            imagen : 'packveggie.jpg'
        },
        {
            nombre: 'Pack Mixto',
            descripcion: '10 Platos Combinados, ideal para pérdida de peso',
            precio: '2350',
            imagen : 'packmixto.jpg'
        },
    ]

    // traer elemento del DOM  
    var getAnuncios = $('#js-anuncios-wrapper');

    for (var i = 0; i < anuncios.length; i++) {
        var template = "<div class='anuncio'><img src='img/" +  anuncios[i].imagen + "' alt='Pack Full Proteína'><div class='contenido-anuncio'><h3>" +  anuncios[i].nombre + "</h3><p>" +  anuncios[i].descripcion + "</p><p class='precio'>$" +  anuncios[i].precio + "</p><a href='anuncio.html' class='boton boton-amarillo d-block'>Elegir Platos</a></div></div>";
        getAnuncios.append(template)
    }

});