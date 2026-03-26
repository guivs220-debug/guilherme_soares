function gerar() {
  let total = 0;
  let texto = "";

  document.querySelectorAll("input[type=checkbox]:checked").forEach(item => {
    let valor = parseFloat(item.value);
    let nome = item.dataset.name;

    texto += `${nome} | R$${valor.toFixed(2)}\n`;
    total += valor;
  });

  let usuarios = document.getElementById("usuarios").value;

  if (usuarios > 0) {
    let valorUsuarios = usuarios * 29;
    texto += `Usuários adicionais | ${usuarios}x R$29,00 | R$${valorUsuarios.toFixed(2)}\n`;
    total += valorUsuarios;
  }

  texto += `\nTotal mensal: R$${total.toFixed(2)}`;

  document.getElementById("resultado").innerText = texto;
}
