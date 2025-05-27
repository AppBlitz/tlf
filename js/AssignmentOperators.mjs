import { Token } from "./Token.mjs"
import { simbols, operatorAssignation } from "./Dictionary.mjs";

/**
 * Función para la verificación de los operadores de asignación
 *
 * @param {string} expresion - La expresión a evaluar.
 * @param {number} index - El índice de la expresión en la fuente.
 * @returns {Token|null} Un objeto Token si la expresión es un operador de expresion
 */

function isAssignmentOperators(expresion, index) {
  expresion.trim();
  let auxiliary = "";
  for (let i = 0; i < expresion.length; i += 1) {
    if (expresion[i] in simbols) {
      auxiliary += expresion[i];
    }
  }
  if (auxiliary in operatorAssignation) {
    return new Token(expresion, operatorAssignation[expresion], index);
  }
  else {
    return null;
  }
}

export { isAssignmentOperators }
