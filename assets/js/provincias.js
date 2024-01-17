
const container = document.querySelector(".container");
const resultado = document.querySelector("#resultado");
const formulario = document.querySelector("#formulario");

window.addEventListener("load", () => {
  formulario.addEventListener("submit", buscarDato);
});


//validador de numeros 
function solonumeros(e){
    key = e.keycode || e.which;
    teclado = String.fromCharCode(key),

    numero = "0123456789";
    especiales="8-37-38-46";

    teclado_especial = false;

    for(var i in especiales){
        if(key ==especiales[i]){
            teclado_especial = true;

        }

    }

    if(numero.indexOf(teclado) == -1 && !teclado_especial){
        return false;

    }
}







function buscarDato(e) {
  e.preventDefault();
  const ciudad = document.querySelector("#ciudad").value;


  console.log(ciudad);


  if (ciudad === "") {
    // Hubo un error
    mostrarError("Campo obligatorio");

    return;
  }
  consultarAPI(ciudad);
}

function mostrarError(mensaje) {
  const alerta = document.querySelector(".bg-red-100");
  if (!alerta) {
    const alerta = document.createElement("div");

    alerta.classList.add(
      "bg-red-100",
      "border-red-400",
      "text-red-700",
      "px-4",
      "py-3",
      "rounded",
      "relative",
      "max-w-md",
      "mx-auto",
      "mt-6",
      "text-center"
    );

    alerta.innerHTML = `
          <strong class="font-bold">Error!</strong>
          <span class="block sm:inline">${mensaje}</span>
      `;

    container.appendChild(alerta);
    setTimeout(() => {
      alerta.remove();
    }, 5000);
  }
}

function consultarAPI(ciudad) {
  // Consultar la API e imprimir el Resultado...

  // leer la url  y agregar el API key

  const url = ` https://apis.digital.gob.cl/dpa/provincias/${ciudad}`;

  // console.log(url);

  Spinner(); //Muestra un spninner

  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((datos) => {
      console.log(datos);
      limpiarHTML(); //limpiar el html previo

      if (datos.codigo == "404") {
        mostrarError("Ciudad no encontrada");
        return;
      }
      //Imprimir respuesta
      buscarDato(datos);
    });

  function buscarDato(datos) {
    const { codigo, tipo, nombre } = datos;

    //console.log(codigo,tipo,nombre);

    const cod = codigo;
    const actual = document.createElement("div");
    actual.innerHTML = `Código de región: ${cod}`;
    actual.classList.add("font-bold", "text-2xl", "text-center", "text-white");
    resultado.appendChild(actual);

    const nom = nombre;
    const actual1 = document.createElement("div");
    actual1.innerHTML = `Nombre de la provincia: ${nom}`;
    actual1.classList.add("font-bold", "text-2xl", "text-center", "text-white");
    resultado.appendChild(actual1);
  }

  //``
}

function limpiarHTML() {
  while (resultado.firstChild) {
    resultado.removeChild(resultado.firstChild);
  }
}

function Spinner() {
  limpiarHTML();

  const divSpinner = document.createElement("div");
  divSpinner.classList.add("sk-fading-circle");

  divSpinner.innerHTML = `
  <div class="sk-circle1 sk-circle"></div>
  <div class="sk-circle2 sk-circle"></div>
  <div class="sk-circle3 sk-circle"></div>
  <div class="sk-circle4 sk-circle"></div>
  <div class="sk-circle5 sk-circle"></div>
  <div class="sk-circle6 sk-circle"></div>
  <div class="sk-circle7 sk-circle"></div>
  <div class="sk-circle8 sk-circle"></div>
  <div class="sk-circle9 sk-circle"></div>
  <div class="sk-circle10 sk-circle"></div>
  <div class="sk-circle11 sk-circle"></div>
  <div class="sk-circle12 sk-circle"></div>
  `;

  resultado.appendChild(divSpinner);
}























//tabla de provincias

let url ='https://apis.digital.gob.cl/dpa/provincias'
            fetch (url)
                .then(response => response.json())
                .then(data => mostrarData(data))
                .catch(error => console.log(error))

            const mostrarData = (data)=>{
                console.log(data)
                let body =''
                for(let i=0;i<data.length;i++){
                    body +=`<tr><td>${data[i].codigo}</td></td><td>${data[i].nombre}</tr>`
                     
                }
                document.getElementById('data').innerHTML=body
            }




            //volver al home
            let my_url = "main.html";
            document.getElementById("btn").onclick=function(){
              window.location.replace(my_url);
      
            }