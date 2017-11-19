class Animal {
  constructor(id, imagen, nombre, descripcion, tipo, raza, estado, genero, edad, tamaño, peso) {
    /**
     * Se controla en imagen, nombre, descripcion, tipo, raza, estado, genero y tamaño si son cadena vacia o de tipo numero.
     */
    if (imagen.length === 0) {
      throw new Error(error);
    } else {
      this.imagen = imagen;
    }

    if (nombre === "" || typeof nombre !== "string") {
      throw new Error(error);
    } else {
      this.nombre = nombre;
    }

    if (descripcion === "" || typeof descripcion !== "string") {
      throw new Error(error);
    } else {
      this.descripcion = descripcion;
    }

    if (tipo === "" || typeof tipo !== "string") {
      throw new Error(error);
    } else {
      this.tipo = tipo;
    }

    if (raza === "" || typeof raza !== "string") {
      throw new Error(error);
    } else {
      this.raza = raza;
    }

    if (estado === "" || typeof estado !== "string") {
      throw new Error(error);
    } else {
      this.estado = estado;
    }

    if (genero === "" || typeof genero !== "string") {
      throw new Error(error);
    } else {
      this.genero = genero;
    }

    if (tamaño === "" || typeof tamaño !== "string") {
      throw new Error(error);
    } else {
      this.tamaño = tamaño;
    }

    /**
     * En plataforma se controla que la edad y peso no sea menor de 0 y que el tipo de dato no sea de tipo cadena
     */

    this.id = id;

    if (edad < 0 || typeof edad !== "number") {
      throw new Error(error);
    } else {
      this.edad = edad;
    }

    if (edad < 0 || typeof edad !== "number") {
      throw new Error(error);
    } else {
      this.edad = edad;
    }

    if (peso < 0 || typeof peso !== "number") {
      throw new Error(error);
    } else {
      this.peso = peso;
    }
  }
}