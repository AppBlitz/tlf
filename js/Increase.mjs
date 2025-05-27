import { Token } from "./Token.mjs"
/**
 * Determina el tipo de operador aritmético o de incremento/decremento en una expresión.
 * 
 * @param {Array} datas - La expresión en forma de array de caracteres o tokens.
 * @param {number} index - El índice de la posición del operador dentro de la expresión.
 * @returns {Token|null} Un objeto Token que representa el operador encontrado, o null si no se encuentra ninguno.
 */

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
export { isAritemticoOrDecrement }
