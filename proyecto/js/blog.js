document.addEventListener("DOMContentLoaded", () => {
  const formSubs = document.getElementById("formSubs");

  if (formSubs) {
    formSubs.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = document.getElementById("subsEmail").value.trim();

      if (!email) {
        Swal.fire({
          icon: "error",
          title: "Correo requerido",
          text: "Por favor, ingresa tu correo electrónico.",
          confirmButtonColor: "#0d6efd"
        });
        return;
      }

      const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!regexEmail.test(email)) {
        Swal.fire({
          icon: "warning",
          title: "Correo inválido",
          text: "Ingresa un correo electrónico válido.",
          confirmButtonColor: "#0d6efd"
        });
        return;
      }
      
      Swal.fire({
        icon: "success",
        title: "¡Suscripción confirmada!",
        text: "Gracias por unirte al blog de Casa Verde 💚",
        confirmButtonColor: "#0d6efd"
      });

      formSubs.reset();
    });
  }
});