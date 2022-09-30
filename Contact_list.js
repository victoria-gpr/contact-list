//Publica tu código en Github, en tu repositorio contact-list crea un branch llamado project-1 y compártelo con nosotros.

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
let contacto = prompt("Ingresar nombre del contacto nuevo: ")

agregarContacto(contacto)

contacto = prompt("Ingresar nombre del contacto a eliminar: ")
eliminarContacto(contacto)

imprimirContactos(contactos)

