// crear una clase aeropuerto con las propiedades nombreAeropuerto y lista de aviones, esta clase deberá contener el método agregarAvion, el cual recibira un objeto de tipo Avion, ademas de un metodo buscarAvion el cual recibira el nombre de un avion y devolvera información en caso de encontrarlo, si no lo encontro indicar con un mensaje.
// Por su parte los aviones tendran las propiedades: nombre, capacidad, destino, lista de pasajeros. Los aviones tienen le metodo abordar el cual permite que un pasajero suba al avion solo si hay capacidad disponible en el mismo, caso contrario mostrar un mensaje que indique que el avion esta lleno.

// Crear un objeto de tipo aeropuerto llamado "Aeropuerto Internacional", crear 3 objeto aviones a diferentes desinos. Agregar los 3 aviones al aeropuerto, buscar un avion y usar el metodo abordar.

// Definimos una clase para los aviones
class Avion {
    constructor(nombre, capacidad, destino) {
      this.nombre = nombre;
      this.capacidad = capacidad;
      this.destino = destino;
      this.pasajeros = [];
    }
  
    abordar(pasajero) {
      if (this.pasajeros.length < this.capacidad) {
        this.pasajeros.push(pasajero);
        console.log(`${pasajero} abordó el avión ${this.nombre} con destino a ${this.destino}.`);
      } else {
        console.log(`El avión ${this.nombre} ya está lleno.`);
      }
    }
  }
  
  // Definimos una clase para el aeropuerto
  class Aeropuerto {
    constructor(nombre) {
      this.nombre = nombre;
      this.aviones = [];
    }
  
    agregarAvion(avion) {
      this.aviones.push(avion);
      console.log(`El avión ${avion.nombre} se ha agregado al aeropuerto ${this.nombre}.`);
    }
  
    buscarAvion(nombre) {
      for (let i = 0; i < this.aviones.length; i++) {
        if (this.aviones[i].nombre === nombre) {
          return this.aviones[i];
        }
      }
      console.log(`No se encontró el avión ${nombre}.`);
    }
  }
  
  // Creamos un aeropuerto
  const aeropuertoInternacional = new Aeropuerto("Aeropuerto Internacional");
  
  // Creamos unos aviones
  const avion1 = new Avion("Avión 1", 100, "Londres");
  const avion2 = new Avion("Avión 2", 200, "Nueva York");
  const avion3 = new Avion("Avión 3", 50, "Madrid");
  
  // Agregamos los aviones al aeropuerto
  aeropuertoInternacional.agregarAvion(avion1);
  aeropuertoInternacional.agregarAvion(avion2);
  aeropuertoInternacional.agregarAvion(avion3);
  
  // Buscamos un avión y lo abordamos
  const avionEncontrado = aeropuertoInternacional.buscarAvion("Avión 2");
  avionEncontrado.abord