document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formulario");
    const alerta = document.getElementById("alerta");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault(); 
      alerta.classList.remove("d-none");
      form.reset();
      setTimeout(() => {
        alerta.classList.add("d-none");
      }, 4000);
    });
  });