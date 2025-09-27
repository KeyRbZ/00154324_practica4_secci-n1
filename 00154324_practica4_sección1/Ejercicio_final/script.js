// Función para aplicar estilos a la página
function aplicarEstilos() {
    // Estilos para el cuerpo (body) de la página
    document.body.style.fontFamily = 'Arial, sans-serif';
    document.body.style.display = 'flex';
    document.body.style.flexDirection = 'column';
    document.body.style.alignItems = 'center';
    document.body.style.justifyContent = 'center';
    document.body.style.minHeight = '100vh';
    document.body.style.margin = '0';
    document.body.style.backgroundColor = '#f0f0f0';

    // Estilos para el encabezado (h1)
    const h1Elemento = document.querySelector('h1');
    h1Elemento.style.color = '#333';

    // Estilos para el contenedor del recordatorio
    const recordatorioElemento = document.getElementById('recordatorio');
    recordatorioElemento.style.marginTop = '20px';
    recordatorioElemento.style.padding = '20px';
    recordatorioElemento.style.border = '1px solid #ccc';
    recordatorioElemento.style.borderRadius = '8px';
    recordatorioElemento.style.backgroundColor = '#fff';
    recordatorioElemento.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    recordatorioElemento.style.width = '80%';
    recordatorioElemento.style.textAlign = 'center';
}


// Función principal para el recordatorio
function recordatorio(dia, mensajePersonalizado) {
  const recordatorioElemento = document.getElementById('recordatorio');
  let actividad = "";
  let mensaje = "";

  switch (dia.toLowerCase()) {
    case "lunes":
      actividad = "atender un cliente específico.";
      break;
    case "martes":
      actividad = "visito una agencia fuera de la ciudad.";
      break;
    case "miercoles":
    case "miércoles":
      actividad = "debo llevar a mi hija al ballet (balé).";
      break;
    case "jueves":
      actividad = "debo priorizar entregas de desarrollo.";
      break;
    case "viernes":
      actividad = "debo atender problemas de manera remota.";
      break;
    case "sábado":
    case "sabado":
      actividad = "debo hacer lo que mi esposa quiera.";
      break;
    default:
      mensaje = "Hoy no hay una actividad específica agendada.";
      break;
  }

  if (actividad) {
    mensaje = `Hola, ${mensajePersonalizado}. Hoy es ${dia} y la actividad es: ${actividad}`;
  }

  if (recordatorioElemento) {
    recordatorioElemento.textContent = mensaje;
  } else {
    console.error("No se encontró el elemento con el ID 'recordatorio'");
  }
}

// Llamar a las funciones para ejecutar el código al cargar la página
aplicarEstilos();
recordatorio("Lunes", "Es un día importante para la semana");