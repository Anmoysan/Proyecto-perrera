window.onload = function crearAnimales() {

  let especie = getQueryVariable("especie").toLowerCase();
  let arrayPerros = arrayAnimales.filter(x => x.tipo.toLowerCase() === "perro" && x.estado !== "adoptado");
  let arrayGatos = arrayAnimales.filter(x => x.tipo.toLowerCase() === "gato" && x.estado !== "adoptado");
  let arrayAdoptados = arrayAnimales.filter(x => x.estado === "adoptado");

  if (especie === "adoptado") {
    arrayAnimal(arrayAdoptados);
  } else if (especie === "perro") {
    arrayAnimal(arrayPerros);
  } else {
    arrayAnimal(arrayGatos);
  }
};

function arrayAnimal(x) {
  //Guardo el elemento tabla mediante la IP
  let section = document.getElementsByClassName("animales");

  //Recorro el arrayAnimales
  for (let i = 0; i < x.length; i++) {
    //Creo los elementos y le doy atributos
    let a = document.createElement("a");
    a.setAttribute("class", "animal");
    a.setAttribute("href", "animal.html?id=" + x[i].id);

    let div = document.createElement("div");
    div.setAttribute("class", "img");

    let img = document.createElement("img");
    img.setAttribute("src", x[i].imagen[0]);

    let span = document.createElement("span");
    let texto = document.createTextNode(x[i].nombre);

    //Insertar los alementos
    span.appendChild(texto);

    div.appendChild(img);
    div.appendChild(span);

    console.log(div);
    a.appendChild(div);
    section[0].appendChild(a);
  }
}
