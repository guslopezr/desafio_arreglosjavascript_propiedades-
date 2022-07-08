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
        nombre: "Mansión2",
        descripcion: "Vive una vida lujosa en la mansión de tus sueños ",
        src: "https://thumbs.dreamstime.com/b/jacobean-manor-house-15201867.jpg",
        cuartos: 20,
        metros: 500
    },
    {
        nombre: "Mansión3",
        descripcion: "Vive una vida lujosa en la mansión de tus sueños ",
        src: "https://thumbs.dreamstime.com/b/jacobean-manor-house-15201867.jpg",
        cuartos: 20,
        metros: 500
    },

];

let html = '';
let propSeleccionada;
let total;

cajaPropiedades = document.querySelector('.propiedades');

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

/* 
// PRUEBA DE DESPLIEGUE EN LAS CARDS

const props = document.querySelector(".propiedades")
for (prop of propiedadesJSON) {
    const template = `
    
     <div class="img" style=>
     <img src= ${prop.src}></img>
     </div>
     <section>
     <h5> ${prop.nombre} </h5>
     <div class="d-flex justify-content-between">
         <p>${prop.descripcion}</p>
         <p>${prop.cuartos}</p>
     </div>
     <p class="my-3"></p>
     <button class="btn btn-info ">Ver más</button>
     </section>
    `;
    props.innerHTML += template;
}
*/

/*
CODIGO IMPORTADO DE TITAN PARA PRUEBA 


let cuartos = document.querySelector('#nrocuartos').value;
let desde = document.querySelector('#mtdesde').value;
let hasta = document.querySelector('#mthasta').value;

if (cuartos == '' || desde == '' || hasta == '') {
    alert('Todos los campos de filtro deben tener datos');
} else {
    propSeleccionada = propiedadesJSON.filter(prop => {
        return prop.cuartos >= cuartos && (prop.m >= desde && prop.m <= hasta)
    })
}

for (let propiedad of propSeleccionada) {
    template(propiedad)
}

total = propSeleccionada.length
cantidad.innerHTML = total

if (total == 0) {
    cajaPropiedades.innerHTML = '<div><h1>Intenta buscar nuevamente <i class="bi bi-search"></i></h1></div>'
    cantidad.innerHTML = 0
    alert('No hay resultados')
}


*/

// VACIO EL HTML
html = '';


// FILTROS EN BASE AL ON CLICK

btn.onclick = (event) => {

    let cuartos = document.querySelector('#nrocuartos').value;
    let desde = document.querySelector('#mtdesde').value;
    let hasta = document.querySelector('#mthasta').value;
    let cajaPropiedades = document.querySelector('.propiedades');
    let cantidad = document.querySelector('.py-3').value;

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

        total = propFiltrada.length
        cantidad.innerHTML = total
    }

    if (total == 0) {
        cajaPropiedades.innerHTML = '<div><h1>Intenta buscar nuevamente <i class="bi bi-search"></i></h1></div>'
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




//PRUEBAS

/*
        html += `<div class="propiedad">
        <div class="img" style="background-image: url(${propiedadFiltrada.src})"></div>
            <section>
                <h5>${propiedadFiltrada.nombre}</h5>
                <div class="d-flex justify-content-between">
                    <p>Cuartos: ${propiedadFiltrada.cuartos}</p>
                    <p>Metros: ${propiedadFiltrada.metros}</p>
                </div>
                <p class="my-3">${propiedadFiltrada.descripcion}</p>
                <button class="btn btn-info ">Ver más</button>
            </section>
     </div>`
            //agregar propiedad o
            //agregar el html nuevamente con los parámetros del arreglo
            // terminar con     cajaPropiedades.innerHTML = html
    }
*/