window.onload = function datosAnimales() {

  let id = getQueryVariable("id");
  let animal = arrayAnimales[id-1];
  let nombret = animal.nombre;
  let razat = animal.tipo + " " + animal.raza;
  let generot = animal.genero;

  //Guardo el elemento tabla mediante la ID
  let nombre = document.getElementById("nombre");
  let raza = document.getElementById("raza");
  let genero = document.getElementById("genero");

  //Insertar los alementos
  nombre.value = nombret;
  raza.value = razat;
  genero.value = generot;

  nombre.setAttribute("readonly", "readonly");
  raza.setAttribute("readonly", "readonly");
  genero.setAttribute("readonly", "readonly");
};