let dado, btn, cx_txt;

dado = document.getElementById("dado");
btn = document.getElementById("botao");
cx_txt = document.getElementById("txt");
 
btn.addEventListener("click", function () {validacao()});

function validacao() {
  let valor = dado.value;
  if (valor.length == 11) {
    validacao_cpf();
  } else {
    if (valor.length == 14) {
      validacao_cnpj();
    } else {
      if (valor.length == 0) {
        cx_txt.innerHTML = "Digite alguma coisa";
      } else {
      cx_txt.innerHTML = "O dado não é nem CPF nem CNPJ";
      }
    }
  }
}

function validacao_cpf() {
  let pd, sd;
  let valor = dado.value;
  let peso = 10;
  let sum = 0;
    
  for (let i = 0; i < valor.length - 2; i++) {
    sum  += valor[i] * peso; 
    peso--;
  }
  let resto = sum % 11;
    
  if (11 - resto > 9) {
    pd = 0;
  } else {
    pd = 11 - resto;
  }
    
  if (pd != valor[9]) {
    cx_txt.innerHTML = "Esse CPF é inválido";
  } else {
    let peso = 11;
    let sum = 0;
  
    for (let i = 0; i < valor.length - 1; i++) {
      sum += valor[i] * peso;
      peso--;
    }
    let resto = sum % 11;
    if (11 - resto > 9) {
      sd = 0;
    } else {
      sd = 11 - resto;
    }

    if (sd == valor[10]) {
      cx_txt.innerHTML = "Esse CPF é válido";
    } else {
      cx_txt.innerHTML = "Esse CPF é inválido";
    }
  }
}

function validacao_cnpj() {
  let pd, sd;
  let valor = dado.value;
  let peso = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  let soma = 0;

  for (let i = 0; i < valor.length - 2; i++) {
    soma += valor[i] * peso[i];
  }
  let resto = soma % 11;

  if (resto < 2) {
    pd = 0;
  } else {
    pd = 11 - resto;
  }

  if (pd != valor[12]) {
    cx_txt.innerHTML = "Esse CNPJ é inválido";
  } else {
    let peso = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    let soma = 0;
    
    for (let i = 0; i < valor.length - 1; i++) {
      soma += valor[i] * peso[i];
    }
    let resto = soma % 11;

    if (resto < 2) {
      sd = 0;
    } else {
      sd = 11 - resto;
    }

    if (sd == valor[13]) {
      cx_txt.innerHTML = "Esse CNPJ é válido";
    } else {
      cx_txt.innerHTML = "Esse CNPJ é inválido";
    }
  }
}
