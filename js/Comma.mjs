import { Token } from "./Token.mjs"
import { terminalInvalid } from "./Dictionary.mjs";


/**
 * Verifica si una expresión dada es un separador de coma (",").
 *
 * @param {string} expresion - La expresión a evaluar.
 * @param {number} index - El índice de la expresión en la fuente.
 * @returns {Token|null} Un objeto Token si la expresión es un separador de coma, de lo contrario null.
 */
function isSeparadorComma(expresion, index) {
  expresion.trim();
  if (expresion.length > 1) {
    return null;
  }
  else if (expresion === ",") {
    return new Token(expresion, terminalInvalid[expresion], index);
  }

}

export { isSeparadorComma }
