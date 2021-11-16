const calc = document.querySelector("#js-calc");

calc.addEventListener("click", getValue);

function getValue() {
  const inputWeight = document.querySelector(".input__weight");
  const inputHeight = document.querySelector(".input__height");
  const valueWeight = Number(inputWeight.value);
  const valueHeight = Number(inputHeight.value);

  if (!valueHeight) {
    showImc("Altura Invalida!", false);
    return;
  }
  if (!valueWeight) {
    showImc("Peso Invalido!", false);
    return;
  }

  const imc = (valueWeight / valueHeight ** 2).toFixed(1);
  const rankImc = rank(imc);
  const msg = `Seu imc: ${imc} --> Classificação: ${rankImc}`;

  return showImc(msg);
}

function rank(value) {
  const rank = [
    "Abaixo do peso",
    "Peso normal",
    "Sobrepeso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Mórbida",
  ];

  if (value > 39.9) return rank[5];
  if (value > 34.9) return rank[4];
  if (value > 29.9) return rank[3];
  if (value > 24.9) return rank[2];
  if (value > 18.5) return rank[1];
  if (value <= 18.5) return rank[0];
}

function showImc(msg, isValid) {
  const result = document.querySelector(".result");
  result.innerHTML = "";
  const p = document.createElement("p");

  if (isValid === false) {
    p.style.background = "red";
  } else {
    p.style.background = "green";
  }

  p.innerHTML = msg;

  result.appendChild(p);
}

const clear = document.querySelector("#js-clear");
clear.addEventListener("click", reset);

function reset() {
  const result = document.querySelector(".result");
  const inputWeight = document.querySelector(".input__weight");
  const inputHeight = document.querySelector(".input__height");
  result.innerHTML = "";
  inputWeight.value = "";
  inputHeight.value = "";
}
