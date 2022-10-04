//Ajusta las funciones de crear y eliminar un contacto para que puedan almacenar la siguiente información como objetos:

let contactos = [];

function agregarContacto(contacto) {
  contacto.id = prompt("Ingresar ID del contacto");
  contacto.nombres = prompt("Ingresar nombres del contacto");
  contacto.apellidos = prompt("Ingresar apellidos del contacto");
  contacto.telefono = prompt("Ingresar número de teléfono del contacto");
  contacto.ubicaciones = prompt("Ingresar ubicaciones del contacto");
  contacto.ciudad = prompt("Ingresar ciudad del contacto");
  contacto.direccion = prompt("Ingresar dirección del contacto");
  contactos.push(contacto);
}

function eliminarContacto(contacto) {
  contactos = contactos.filter((nombre) => contacto !== nombre);
}

agregarContacto(contacto);
imprimirContactos;

contacto = prompt("Ingresar nombre del contacto a eliminar: ");
eliminarContacto(contacto);
