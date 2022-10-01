/*Ajusta las funciones de crear y eliminar un contacto para que puedan almacenar la siguiente información como objetos:
id
nombres
apellidos
teléfono
ubicaciones
ciudad
dirección */

function agregarContacto (contacto) {
  contactos.push(contacto)
}

function eliminarContacto(contacto){
  contactos = contactos.filter(nombre => contacto !== nombre)
}

function imprimirContactos(contactos){
  console.log(contactos)
}

let contactos = ["Ana López", "Daniel Vega", "Héctor Rojas", "Mariana Díaz"]
let contacto = prompt("Ingresar nombres del contacto nuevo: ")

agregarContacto(contacto)

contacto = prompt("Ingresar nombre del contacto a eliminar: ")
eliminarContacto(contacto)

imprimirContactos(contactos)