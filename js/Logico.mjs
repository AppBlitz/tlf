
import { Token } from "./Token.mjs"
import { terminalInvalid } from "./Dictionary.mjs"

/**
 * Verifica si la expresión es un operador lógico válido.
 * 
 * Reconoce los operadores: !, &&, ||.
 * Los operadores "&" y "|" solos no se consideran válidos.
 * 
 * @param {string} expresion - Cadena que representa el posible operador lógico.
 * @param {number} index - Índice de la expresión dentro del análisis.
 * @returns {Token|null} Token con el operador válido o null si no es válido.
 */
function isLogicol(expresion, index) {
  expresion = expresion.trim();

  if (expresion === "&") {
    return null;
  } else if (expresion === "|") {
    return null;
  } else if (expresion === "!") {
    return new Token(expresion, terminalInvalid[expresion], index);
  } else if (expresion === "&&") {
    return new Token(expresion, terminalInvalid[expresion], index);
  } else if (expresion === "||") {
    return new Token(expresion, terminalInvalid[expresion], index);
  } else {
    return null;
  }
}

export { isLogicol }
