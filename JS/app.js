// 5- Realizar una web con un cronómetro, que tenga las opciones de iniciar, reset (volver el cronómetro a 0) y pausar.gast

// Variables de control
let segundos = 0;
let intervalo = null;

// Mostrar tiempo en formato hh:mm:ss
function mostrarTiempo() {
  const horas = String(Math.floor(segundos / 3600)).padStart(2, "0");
  const minutos = String(Math.floor((segundos % 3600) / 60)).padStart(2, "0");
  const seg = String(segundos % 60).padStart(2, "0");

  document.getElementById("cronometro").textContent = `${horas}:${minutos}:${seg}`;
}

// Función para iniciar el cronómetro
function iniciarCronometro() {
  if (intervalo === null) {
    intervalo = setInterval(() => {
      segundos++;
      mostrarTiempo();
    }, 1000);
  }
}

// Función para pausar el cronómetro
function pausarCronometro() {
  clearInterval(intervalo);
  intervalo = null;
}

// Función para resetear el cronómetro
function resetearCronometro() {
  clearInterval(intervalo);
  intervalo = null;
  segundos = 0;
  mostrarTiempo();
}

// Eventos
document.getElementById("btnIniciar").addEventListener("click", iniciarCronometro);
document.getElementById("btnPausar").addEventListener("click", pausarCronometro);
document.getElementById("btnReset").addEventListener("click", resetearCronometro);

// Mostrar 00:00:00 al cargar
mostrarTiempo();
