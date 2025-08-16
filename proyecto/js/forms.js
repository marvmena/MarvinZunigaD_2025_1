
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formFeedback");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

 
    const nombre = document.getElementById("fbNombre").value.trim();
    const email = document.getElementById("fbEmail").value.trim();
    const mensaje = document.getElementById("fbMensaje").value.trim();


    if (!nombre || !email || !mensaje) {
      Swal.fire({
        icon: "error",
        title: "Campos incompletos",
        text: "Por favor, completa todos los campos antes de enviar.",
        confirmButtonColor: "#198754" // verde Bootstrap
      });
      return;
    }


    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
      Swal.fire({
        icon: "warning",
        title: "Correo inválido",
        text: "Por favor, ingresa un correo electrónico válido.",
        confirmButtonColor: "#198754"
      });
      return;
    }


    Swal.fire({
      icon: "success",
      title: "¡Feedback enviado!",
      text: "Gracias por tu opinión, nos ayuda a mejorar en Casa Verde 💚",
      confirmButtonColor: "#198754"
    });

 
    form.reset();
  });
});



