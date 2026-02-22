function rolarDados(faces) {
  return Math.floor(Math.random() * faces) + 1;
}

function rolar(atributo) {
  let resultado = rolarDados(20); // sempre 1d20
  document.getElementById("resultado").textContent =
    `Rolagem de ${atributo}: 🎲 ${resultado}`;
}
