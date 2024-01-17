const resultado = document.querySelector("#resultado");

fetch("https://apis.digital.gob.cl/dpa/comunas")
  .then((res) => res.json())
  .then((data) => {
    //console.log(data)

    data.forEach((user) => {
      $("#body").append(`

            <tr>
                <td>${user.nombre}</td>
                <td>${user.tipo}</td>
                <td>${user.codigo}</td>
            
            </tr>


        `);
    });

    $(".tablemanager").tablemanager({
      firstSort: [
        [3, 0],
        [2, 0],
        [1, "asc"],
      ],
      appendFilterby: true,
      debug: true,
      vocabulary: {
        voc_filter_by: "Filtrar por",
        voc_type_here_filter: "Escribe el codigo de la comuna",
        voc_show_rows: "Mostra righe",
      },
      pagination: true,
    });
  });

// Consultar la API e imprimir el Resultado...

// contador de region

const url = `https://apis.digital.gob.cl/dpa/regiones`;

// console.log(url);

fetch(url)
  .then((respuesta) => respuesta.json())
  .then((datos) => {
    const regc = datos.length;
    console.log(regc);

    const actual = document.createElement("p");
    actual.innerHTML = `Cantidad de Regiones: ${regc}`;
    resultado.appendChild(actual);
  });

// contador de provincias

const url1 = `https://apis.digital.gob.cl/dpa/provincias`;

// console.log(url);

fetch(url1)
  .then((respuesta) => respuesta.json())
  .then((datos) => {
    const provc = datos.length;
    console.log(provc);

    const actual = document.createElement("p");
    actual.innerHTML = `Cantidad de Provincias: ${provc}`;
    resultado.appendChild(actual);
  });

// contador de comunas

const url2 = `https://apis.digital.gob.cl/dpa/comunas`;

// console.log(url);

fetch(url2)
  .then((respuesta) => respuesta.json())
  .then((datos) => {
    const comc = datos.length;
    console.log(comc);

    const actual = document.createElement("p");
    actual.innerHTML = `Cantidad de Comunas: ${comc}`;
    resultado.appendChild(actual);
  });

let my_url = "main.html";
document.getElementById("btn").onclick = function () {
  window.location.replace(my_url);
};
