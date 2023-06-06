document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto
  
    // Obtener los valores de los campos del formulario
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var email = document.getElementById("email").value;
    var asunto = document.getElementById("asunto").value.toUpperCase();
    var mensaje = document.getElementById("mensaje").value;
  
    // Validar el nombre (no más de 20 caracteres)
    if (nombre.length > 20) {
      alert("El nombre no debe tener más de 20 caracteres");
      return;
    }
  
    // Validar los apellidos (no más de 40 caracteres)
    if (apellidos.length > 40) {
      alert("Los apellidos no deben tener más de 40 caracteres");
      return;
    }
  
    // Validar el email utilizando una expresión regular
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("El email está mal escrito");
      return;
    }
  
    // Validar el mensaje (no más de 255 caracteres)
    if (mensaje.length > 255) {
      alert("El mensaje no debe tener más de 255 caracteres");
      return;
    }
  
    // Crear una página HTML para mostrar los datos ingresados
    var html = "<h1>Datos del formulario:</h1>";
    html += "<p><strong>Nombre:</strong> " + nombre + "</p>";
    html += "<p><strong>Apellidos:</strong> " + apellidos + "</p>";
    html += "<p><strong>Email:</strong> " + email + "</p>";
    html += "<p><strong>Asunto:</strong> " + asunto + "</p>";
    html += "<p><strong>Mensaje:</strong> " + mensaje + "</p>";
  
    // Mostrar la página HTML con los datos ingresados
    document.body.innerHTML = html;
  });
  