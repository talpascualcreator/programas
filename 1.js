 // Obtener los elementos de los botones y el mensaje
 const botonPentagrama = document.getElementById("opcion-pentagrama");
 const botonBoquilla = document.getElementById("opcion-boquilla");
 const botonCoda = document.getElementById("opcion-coda");
 const mensaje = document.getElementById("mensaje");

 // Agregar un evento de clic al botón del pentagrama
 botonPentagrama.addEventListener("click", function() {
     mensaje.textContent = "Respuesta correcta";
     mensaje.style.color = "green";
 });

 // Agregar eventos de clic a los botones de boquilla y coda
 botonBoquilla.addEventListener("click", function() {
     mensaje.textContent = "Respuesta incorrecta";
     mensaje.style.color = "red";
 });

 botonCoda.addEventListener("click", function() {
     mensaje.textContent = "Respuesta incorrecta";
     mensaje.style.color = "red";
 });