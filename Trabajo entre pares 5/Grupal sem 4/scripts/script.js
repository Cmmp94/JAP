const medallas_url = "https://danikho2020.github.io/json/medallas.json";

function cargarDatos(url) {
  document.getElementById("data").innerHTML = "";
  let tabla = document.getElementById("data");
  let fila = "";
  let img = "";
  fetch(url)
    .then((respuesta) => respuesta.json())

    .then((datos) => {
      console.log(datos);
      datos.forEach((dato) => {
        switch (dato.posicion) {
          case 1:
            img = `img/oro.png`;
            break;
          case 2:
            img = `img/plata.png`;

            break;
          case 3:
            img = `img/bronce.png`;
            break;
        }
        fila = `<tr><td>${dato.anio}</td>
          <td>${dato.sede}</td>
          <td>${dato.deporte}</td>
          <td><img src="${img}" height="20" alt="" srcset="" /></td></tr>`;
        console.log(fila);
        tabla.innerHTML += fila;
      });
    })
    .catch((error) => alert("Hubo un error: " + error));
}
