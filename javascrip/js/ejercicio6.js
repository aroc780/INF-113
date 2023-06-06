function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var edad = document.getElementById("edad").value;
    var email = document.getElementById("email").value;

    
    if (nombre !== nombre.toUpperCase() || apellido !== apellido.toUpperCase()) {
        alert("Por favor, ingresa el nombre y el apellido en mayúsculas.");
        return false;
    }

    
    if (parseInt(edad) < 18) {
        alert("Debes tener al menos 18 años para registrarte.");
        return false;
    }

  

    return true;
}

function limpiarFormulario() {
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("email").value = "";
}