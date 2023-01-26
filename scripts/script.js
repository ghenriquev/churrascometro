// Carne - 400g por pessoa (se + de 6h - 650g)
// Cerveja - 1200ml por pessoa (se + de 6h - 2000ml)
// Refrigerante/água - 1000ml por pessoa (se + de 6h 1500ml)
// Crianças valem por 0.5

let inputAdultos = document.querySelector("#adultos");
let inputCriancas = document.querySelector("#criancas");
let inputDuracao = document.querySelector("#duracao");
let buttonCalcular = document.querySelector("#calcular");
let resultado = document.querySelector("#resultado");

buttonCalcular.addEventListener("click", calcular);

function calcular() {
  // Trocar todos esses ifs por switch

  // ------------------- VALIDAÇÃO ------------------
  if (
    inputAdultos.value == 0 &&
    inputCriancas.value == 0 &&
    inputDuracao.value == 0
  ) {
    alert("Favor inserir dados!");
  } else if (!inputDuracao.value || inputDuracao.value == 0) {
    alert("Favor inserir tempo de duração!");
  } else if (!inputAdultos.value) {
    alert("Favor inserir número de adultos!");
  } else if (!inputCriancas.value) {
    alert("Favor inserir número de crianças!");
  // --------------------------------------------------------------
  } else {
    let quantidadeAdultos = inputAdultos.value;
    let quantidadeCriancas = inputCriancas.value;
    let duracao = inputDuracao.value;
    let carne = carnePorPessoa(duracao);
    let cerveja = cervejaPorPessoa(duracao);
    let refri = refriPorPessoa(duracao);

    let quantidadeTotalCarne =
      carne * quantidadeAdultos + (carne / 2) * quantidadeCriancas;

    let quantidadeTotalCerveja = cerveja * quantidadeAdultos;

    let quantidadeTotalRefri =
      refri * quantidadeAdultos + (refri / 2) * quantidadeCriancas;

    resultado.innerHTML = "";
    resultado.innerHTML += `<p>${quantidadeTotalCarne / 1000}kg de carne</p>`;
    resultado.innerHTML += `<p>${quantidadeTotalCerveja / 1000}L de cerveja`;
    resultado.innerHTML += `<p>${quantidadeTotalRefri / 1000}L de refrigerante`;
  }
}

function carnePorPessoa(duracao) {
  if (duracao >= 6) {
    return 600;
  } else {
    return 400;
  }
}

function cervejaPorPessoa(duracao) {
  if (duracao >= 6) {
    return 2000;
  } else {
    return 1200;
  }
}

function refriPorPessoa(duracao) {
  if (duracao >= 6) {
    return 1500;
  } else {
    return 1000;
  }
}
