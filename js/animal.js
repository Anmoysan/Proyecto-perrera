window.onload = function crearAnimales() {

  let id = getQueryVariable("id");
  let animal = arrayAnimales[id-1];

  //Guardo el elemento tabla mediante la IP
  let nombre = document.getElementById("nombre");
  let imagen = document.getElementById("imagen");
  let descripcion = document.getElementById("descripcion");
  let tipo = document.getElementById("tipo");
  let raza = document.getElementById("raza");
  let estado = document.getElementById("estado");
  let genero = document.getElementById("genero");
  let edad = document.getElementById("edad");
  let tamano = document.getElementById("tamano");
  let peso = document.getElementById("peso");

  //Creo los elementos y le doy atributos

  let textoNombre = document.createTextNode(animal.nombre);
  imagen.setAttribute("src", animal.imagen);
  let textoImagen = document.createTextNode(animal.imagen);
  let textoDescripcion = document.createTextNode(animal.descripcion);
  let textoTipo = document.createTextNode(animal.tipo);
  let textoRaza = document.createTextNode(animal.raza);
  let textoEstado = document.createTextNode(animal.estado);
  let textoGenero = document.createTextNode(animal.genero);
  let textoEdad = document.createTextNode(animal.edad);
  let textoTamano = document.createTextNode(animal.tamano);
  let textoPeso = document.createTextNode(animal.peso);

  //Insertar los alementos
  nombre.appendChild(textoNombre);
  descripcion.appendChild(textoDescripcion);
  tipo.appendChild(textoTipo);
  raza.appendChild(textoRaza);
  estado.appendChild(textoEstado);
  genero.appendChild(textoGenero);
  edad.appendChild(textoEdad);
  tamano.appendChild(textoTamano);
  peso.appendChild(textoPeso);
};