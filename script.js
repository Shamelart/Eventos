const nombre = document.querySelector(".nombre");
const telefono = document.querySelector(".telefono");
const direccion = document.querySelector(".direccion");
const agregar = document.querySelector(".agregar");

const listado = document.querySelector(".list");

const dataBase = window.localStorage

const guardar = (dataBase, contacto) => {
    dataBase.setItem(contacto.id, JSON.stringify(contacto));
    window.location.href = '/';
}

const cargar = (dataBase, parentNode) => {
    let claves = Object.keys(dataBase)
        let clave
        for (clave of claves){
         contacto = JSON.parse(dataBase.getItem(clave));
        crear(parentNode, contacto, dataBase);

    }

}
const creando = (parentNode, contacto, dataBase) => {
    let divContacto = document.createElement('div')
    let nombreContacto = document.createElemen('p');
    let telefonoContacto = document.createElement('p');
    let direccionContacto = documentcreateElement('p');

    nombreContacto.innerHTML = contacto.nombre;
    telefonoContacto.innerHTML = contacto.telefono;
    direccionContacto.innerHTML = contacto.direccion;

    divContacto.classList.add(tareas);

    divContacto.appendChild(nombreContacto);
    divContacto.appendChild(telefonoContacto);
    divContacto.appendChild(direccionContacto
        
        parentNode.appendChild(divContacto))
}



    btnAgregar.onclick = () => {
    let contacto = {
        id: Math.random(1,100),
        nombre: nombre.value,
        telefono: telefono.value,
        direccion: direccion.value,
    }

    guardar (dataBase, contacto)
}

cargar (dataBase, listado)

