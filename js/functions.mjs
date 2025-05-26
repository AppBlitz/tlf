import { Token } from "./Token.mjs"
import { isSeparadorComma } from "./comma.mjs"
import { terminalInvalid } from "./dictionary.mjs";
import { isKey } from "./keys.mjs"
/**
 * Verifica si una expresión es igual a un carácter específico.
 * 
 * @param {string} expression - La expresión que se va a comparar.
 * @param {string} character - El carácter con el que se compara la expresión.
 * @returns {boolean} `true` si la expresión es igual al carácter, de lo contrario `false`.
 */
function verificationCaracter(expression, character) {
  return (expression === character);
}


/**
 * Determina el tipo de operador aritmético o de incremento/decremento en una expresión.
 * 
 * @param {Array} datas - La expresión en forma de array de caracteres o tokens.
 * @param {number} index - El índice de la posición del operador dentro de la expresión.
 * @returns {Token|null} Un objeto `Token` que representa el operador encontrado, o `null` si no se encuentra ninguno.
 */
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
function verificationC(array) {
  let arreglo = [];
  for (let i = 0; i < array.length; i += 1) {
    if (isAritemticoOrDecrement(array[i], i) != null) {
      arreglo.push(isAritemticoOrDecrement(array[i], i));
    }
    else if (verificationA(array[i], i) != null) {
      arreglo.push(verificationA(array[i], i));
    }
    else if (isTerminal(array[i], i) != null) {
      arreglo.push(isTerminal(array[i], i));
    }
    else if (isSeparadorComma(array[i], i) != null) {
      arreglo.push(isSeparadorComma(array[i], i));
    }
    else if (isKey(array[i], i) != null) {
      arreglo.push(isKey(array[i], i));
    }
  }

  return arreglo;

}



export { verificationCaracter, isAritemticoOrDecrement, verificationA, verificationC, isTerminal }

