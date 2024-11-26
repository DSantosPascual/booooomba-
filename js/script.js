const inputUsuario = document.getElementById("userInput");
const divCuentaAtras = document.getElementById("countdown");
const resultado = document.getElementById("result");
const restartBtn = document.getElementById("restart");

function empezarJuego() {
  const numeroAlAzar = Math.floor(Math.random() * 3) + 1;
  const numeroUsuario = parseInt(inputUsuario.value, 10);

  if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 3) {
    resultado.innerHTML = `<span style="color: red;">¡Debe ser un número del 1 al 3!</span>`;
    return;
  }

  let segundos = 5;
  divCuentaAtras.textContent = `Cuenta atrás: ${segundos} segundos`;

  const cuentaRegresiva = setInterval(() => {
    segundos--;
    divCuentaAtras.textContent = `Cuenta atrás: ${segundos} segundos`;
  }, 1000);

  setTimeout(() => {
    clearInterval(cuentaRegresiva);
    divCuentaAtras.textContent = "Cuenta atrás: 0 segundos";

    if (numeroUsuario === numeroAlAzar) {
      resultado.innerHTML = `
        <span style="color: green; font-weight: bold;">Enhorabuena, has salvado el mundo 👑</span><br>
        El número ${numeroUsuario} es el mismo que el número: ${numeroAlAzar}.
      `;
    } else {
      resultado.innerHTML = `
        <span style="color: red; font-weight: bold;">La bomba ha estallado 💥</span><br>
        El número ${numeroUsuario} no coincide con el número: ${numeroAlAzar}.
      `;
    }
  }, 5000);
}

function reiniciarJuego() {
  inputUsuario.value = ""; 
  divCuentaAtras.textContent = ""; 
  resultado.textContent = ""; 
}

inputUsuario.addEventListener("blur", empezarJuego); 
restartBtn.addEventListener("click", reiniciarJuego);

