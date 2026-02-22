function rolarDados(qtd, faces) {
  let resultados = [];
  for (let i = 0; i < qtd; i++) {
    resultados.push(Math.floor(Math.random() * faces) + 1);
  }
  return resultados;
}

function rolar() {
  let forca = parseInt(document.getElementById("forca").textContent);
  let pericia = parseInt(document.getElementById("pericia").textContent);

  let dados = rolarDados(forca, 6);
  let soma = dados.reduce((a,b) => a+b, 0) + pericia;

  document.getElementById("resultado").textContent =
    `Rolagem: ${dados.join(", ")} | Total: ${soma}`;
}
