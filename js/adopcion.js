window.onload = function crearAnimales() {
//Guardo el elemento tabla mediante la IP
  let section = document.getElementsByClassName("animales");

    //Recorro el arrayAnimales
    for (let i = 0; i < arrayAnimales.length; i++) {

      //Creo los elementos y le doy atributos
      let a = document.createElement("a");
      a.setAttribute("class", "animal");
      a.setAttribute("href", "animal.html");

      let div = document.createElement("div");
      div.setAttribute("class", "img");

      let img = document.createElement("img");
      img.setAttribute("src", arrayAnimales[i].imagen[0]);

      let span = document.createElement("span");
      let texto = document.createTextNode(arrayAnimales[i].nombre);

      //Insertar los alementos
      span.appendChild(texto);

      div.appendChild(img);
      div.appendChild(span);

      console.log(div);
      a.appendChild(div);
      section[0].appendChild(a);
    }
};
