
import { Token } from "./Token.mjs"

function verificationCaracter(expression, character) {
  return (expression === character);
}

function isAritemticoOrDecrement(datas, index) {
  if (verificationCaracter(datas, "++")) {
    return new Token(datas, "Operador aumento", index);
  }
  else if (verificationCaracter(datas, "--")) {
    return new Token(datas, "Operador de decremento", index);
  }
  else if (verificationCaracter(datas, "+")) {
    return new Token(datas, "Operador de suma", index);
  }
  else if (verificationCaracter(datas, "-")) {
    return new Token(datas, "Operador de resta", index);
  }
  else if (verificationCaracter(datas, "/")) {
    return new Token(datas, "Operador de división", index);
  }
  else if (verificationCaracter(datas, "*")) {
    return new Token(datas, "Operador de multiplicación", index);
  }
  else if (verificationCaracter(datas, "%")) {
    return new Token(datas, "Operador de modulo", index);
  }
  else {
    return null;
  }
}


/**
 * Verifica si un carácter corresponde a un paréntesis de apertura o cierre en una expresión.
 * 
 * @param {Array} datas - La expresión en forma de array de caracteres o tokens.
 * @param {number} index - El índice donde se debe realizar la búsqueda de los paréntesis.
 * @returns {Token|null} Un objeto `Token` representando el paréntesis encontrado, o `null` si no se encuentra ninguno.
 */
function verificationA(datas, index) {
  let aux = 0;
  while (aux <= datas.length) {
    if (verificationCaracter(datas[aux], "(")) {
      return new Token(datas, "Parentisis de apertura", index);
    }
    else if (verificationCaracter(datas[aux], ")")) {
      return new Token(datas, "Parentisis de cierre", index);
    }

    aux += 1;
  }
  return null;
}

export { verificationA, isAritemticoOrDecrement }
