document.getElementById("formulario").addEventListener("submit", function(event) {
  event.preventDefault(); // Impede o envio do formulário

  validarEmail();
  validarPlaca();
  validarCPF();
  validarMatricula();
  validarIFCE();
});

function validarEmail() {
  const email = document.getElementById("email").value;
  const erroEmail = document.getElementById("erro-email");
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (regex.test(email)) {
    erroEmail.textContent = "✔ E-mail válido";
    erroEmail.style.color = "green";
  } else {
    erroEmail.textContent = "✘ E-mail inválido";
    erroEmail.style.color = "red";
  }
}


function validarPlaca() {
  const placa = document.getElementById("placa").value.toUpperCase();
  const erroPlaca = document.getElementById("erro-placa");
  const regex = /^[A-Z]{3}[0-9][A-Z][0-9]{2}$/;

  if (regex.test(placa)) {
    erroPlaca.textContent = "✔ Placa válida";
    erroPlaca.style.color = "green";
  } else {
    erroPlaca.textContent = "✘ Placa inválida";
    erroPlaca.style.color = "red";
  }
}


function validarCPF() {
  const cpf = document.getElementById("cpf").value;
  const erroCPF = document.getElementById("erro-cpf");
  const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

  if (regex.test(cpf)) {
    erroCPF.textContent = "✔ CPF válido";
    erroCPF.style.color = "green";
  } else {
    erroCPF.textContent = "✘ CPF inválido";
    erroCPF.style.color = "red";
  }
}

function validarMatricula() {
  const matricula = document.getElementById("matricula").value;
  const erroMatricula = document.getElementById("erro-matricula");
  const regex = /^\d{4}(10|20)11060\d{3}$/;

  if (regex.test(matricula)) {
    erroMatricula.textContent = "✔ Matrícula válida";
    erroMatricula.style.color = "green";
  } else {
    erroMatricula.textContent = "✘ Matrícula inválida";
    erroMatricula.style.color = "red";
  }
}



function validarIFCE() {
  const ifce = document.getElementById("ifce").value;
  const erroIFCE = document.getElementById("erro-ifce");
  const regex = /^IFCE - Campus [A-Za-zÀ-ú ]+$/;

  if (regex.test(ifce)) {
    erroIFCE.textContent = "✔ Expressão válida";
    erroIFCE.style.color = "green";
  } else {
    erroIFCE.textContent = "✘ Expressão inválida";
    erroIFCE.style.color = "red";
  }
}

