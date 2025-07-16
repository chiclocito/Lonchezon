// Mostrar el formulario al hacer clic en el botón
document.addEventListener("DOMContentLoaded", function () {
  const btnAbrir = document.getElementById("abrirFormulario");
  const contenedorFormulario = document.getElementById("formularioFacturacion");
  const form = document.getElementById("formFactura");
  const mensaje = document.getElementById("mensaje");

  if (btnAbrir && contenedorFormulario) {
    btnAbrir.addEventListener("click", function () {
      contenedorFormulario.style.display = "block";
    });
  }

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const datos = {
        rfc: form.rfc.value.trim(),
        nombre: form.nombre.value.trim(),
        cfdi: form.cfdi.value,
        email: form.email.value.trim(),
        monto: form.monto.value,
        fecha: form.fecha.value
      };

      // Aquí puedes enviar los datos a un backend, servicio externo, o usar EmailJS
      console.log("Datos recibidos para facturación:", datos);

      if (mensaje) {
        mensaje.textContent = "✅ Solicitud de factura enviada correctamente.";
        mensaje.style.color = "#00ff00";
      }

      form.reset();
    });
  }
});