//Ajusta las funciones de crear y eliminar un contacto para que puedan almacenar la siguiente información como objetos:

let contactos = [];

function agregarContacto() {
  const contacto = {};
  contacto.id = prompt("Ingresar ID del nuevo contacto");
  contacto.nombres = prompt("Ingresar nombres del nuevo contacto");
  contacto.apellidos = prompt("Ingresar apellidos del nuevo contacto");
  contacto.telefono = prompt("Ingresar número de teléfono del nuevo contacto");
  contacto.ubicaciones = {};
  contacto.ubicaciones.ciudad = prompt("Ingresar ciudad del nuevo contacto");
  contacto.ubicaciones.direccion = prompt(
    "Ingresar dirección del nuevo contacto"
  );
  contactos.push(contacto);
}

function eliminarContacto(contacto) {
  contactos = contactos.filter((nombre) => contacto !== nombre);
}

agregarContacto();
imprimirContactos();

contacto = prompt("Ingresar nombre del contacto a eliminar: ");
eliminarContacto(contacto);
