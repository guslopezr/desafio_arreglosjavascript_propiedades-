const propiedadesJSON = [{
        nombre: "Casa de campo",
        descripcion: "Un lugar ideal para descansar de la ciudad",
        src: "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
        cuartos: 2,
        metros: 170
    },
    {
        nombre: "Casa de playa",
        descripcion: "Despierta tus días oyendo el oceano",
        src: "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
        cuartos: 2,
        metros: 130
    },
    {
        nombre: "Casa en el centro",
        descripcion: "Ten cerca de ti todo lo que necesitas",
        src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
        cuartos: 1,
        metros: 80
    },
    {
        nombre: "Casa rodante",
        descripcion: "Conviertete en un nómada del mundo sin salir de tu casa",
        src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
        cuartos: 1,
        metros: 6
    },
    {
        nombre: "Departamento",
        descripcion: "Desde las alturas todo se ve mejor",
        src: "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
        cuartos: 3,
        metros: 200
    },
    {
        nombre: "Mansión",
        descripcion: "Vive una vida lujosa en la mansión de tus sueños ",
        src: "https://thumbs.dreamstime.com/b/jacobean-manor-house-15201867.jpg",
        cuartos: 20,
        metros: 500
    },
    {
        nombre: "Loft",
        descripcion: "Amplio espacio en un entorno que invita a la creatividad ",
        src: "https://images.hola.com/imagenes/decoracion/20210621191783/loft-estilo-eclectico-industrial-decoracion-interiores-lm/0-966-599/loft-antrax-1a-a.jpg",
        cuartos: 2,
        metros: 120
    },
    {
        nombre: "Ley Pereira",
        descripcion: "Para los que gustan de un estilo funcional, con  buen gusto y un toque inglés",
        src: "https://cl.habcdn.com/photos/project/medium/10-300602.jpg",
        cuartos: 4,
        metros: 200
    },

];

let html = '';
let propSeleccionada;
let total;

//let total;

cajaPropiedades = document.querySelector('.propiedades');
let cantidad = document.querySelector('.py-3');

cargaInicial();

//FUNCION CARGA INICIAL

function cargaInicial() {

    for (let propiedad of propiedadesJSON) {
        html += `<div class="propiedad">
                  <div class="img" style="background-image: url(${propiedad.src})"></div>
                      <section>
                          <h5>${propiedad.nombre}</h5>
                          <div class="d-flex justify-content-between">
                              <p>Cuartos: ${propiedad.cuartos}</p>
                              <p>Metros: ${propiedad.metros}</p>
                          </div>
                          <p class="my-3">${propiedad.descripcion}</p>
                          <button class="btn btn-info ">Ver más</button>
                      </section>
               </div>`
    }

    cajaPropiedades.innerHTML = html
}





// FILTROS EN BASE AL ON CLICK

btn.onclick = (event) => {

    html = '';
    let total;
    let cuartos = Number(document.querySelector('#nrocuartos').value);
    let desde = Number(document.querySelector('#mtdesde').value);
    let hasta = Number(document.querySelector('#mthasta').value);
    // let cajaPropiedades = document.querySelector('.propiedades');
    // let cantidad = document.querySelector('.py-3');


    console.log(cuartos);
    console.log(desde);
    console.log(hasta);

    if (cuartos == 0 || desde == 0 || hasta == 0) {
        alert("Todos los campos de filtro deben tener datos");
    } else {
        propSeleccionada = propiedadesJSON.filter(propiedadSel => {
            return propiedadSel.cuartos >= cuartos && propiedadSel.metros >= desde && propiedadSel.metros <= hasta
        })

        for (let propFiltrada of propSeleccionada) {
            template(propFiltrada)
        }
        console.log("propSeleccionada->", propSeleccionada.length)


        total = propSeleccionada.length
        cantidad.innerHTML = total
        console.log(total)
    }

    if (total == 0) {
        cajaPropiedades.innerHTML = '<div><h1>Intenta buscar nuevamente  más propiedades <i class="bi bi-search"></i></h1></div>'
        cantidad.innerHTML = 0
        alert('No hay resultados')
    }


}

function template(propFiltrada) {

    html += `<div class="propiedad">
                    <div class="img" style="background-image: url(${propFiltrada.src})"></div>
                    <section>
                        <h5>${propFiltrada.nombre}</h5>
                        <div class="d-flex justify-content-between">
                            <p>Cuartos: ${propFiltrada.cuartos}</p>
                            <p>Metros: ${propFiltrada.metros}</p>
                        </div>
                        <p class="my-3">${propFiltrada.descripcion}</p>
                        <button class="btn btn-info ">Ver más</button>
                    </section>
                </div>`

    cajaPropiedades.innerHTML = html

}