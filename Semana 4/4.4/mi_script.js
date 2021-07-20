document.addEventListener('DOMContentLoaded', function () {
    // Numero de enlaces de la pagina
    let enlaces = document.getElementsByTagName("a");
    let cantidadEnlaces = enlaces.length;

    // Direccion del penultimo enlace
    
    let cantidad = enlaces.length;
    let penultimoEnlace = enlaces[cantidad-1];

    // Numero de enlaces que apuntan a http://prueba

    let enlacesAPrueba = 0;
    for (let index = 0; index < enlaces.length; index++) {
        if(enlaces[index].href == "http://prueba/"){
            enlacesAPrueba = enlacesAPrueba + 1;
        }       
    }

    
    
    
    
    // Numero de enlaces del tercer párrafo
    let parrafos = document.getElementsByTagName("p");
    let enlacesTercerP = parrafos[2].getElementsByTagName("a");
    let cantEnlacesTercerP = enlacesTercerP.length;


    let Info1 = document.createTextNode("Número de enlaces de la página:" + cantidadEnlaces);
    let Info2 = document.createTextNode("Direccion del penúltimo enlace:" + penultimoEnlace);
    let Info3 = document.createTextNode("Cantidad de enlaces a http://prueba: " + enlacesAPrueba);
    let Info4 = document.createTextNode("Numero de enlaces del tercer párrafo: " + cantEnlacesTercerP);

    let Elemento = document.createElement("informacion");

    Elemento.appendChild(Info1);
    Elemento.appendChild(Info2);
    Elemento.appendChild(Info3);
    Elemento.appendChild(Info4);

    document.getElementById("informacion").innerHTML = "Número de enlaces de la página:" + cantidadEnlaces;



});

