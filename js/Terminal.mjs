
import { Token } from "./Token.mjs"
import { terminalInvalid } from "./Dictionary.mjs"

/**
 * Verifica si una expresión corresponde a un símbolo terminal válido.
 * 
 * Actualmente, solo se considera válido el símbolo `;` (punto y coma).
 * 
 * - Si la expresión es exactamente `;`, se considera un terminal válido y se retorna un Token.
 * - Si la expresión está en el diccionario `terminalInvalid` y **no está marcada como `true`**, no se genera ningún Token.
 * - En cualquier otro caso, no se considera terminal válido y se retorna `null`.
 * 
 * @param {string} expresion - Símbolo a evaluar.
 * @param {number} index - Posición del símbolo dentro del análisis general.
 * @returns {Token|null} Un Token si es un terminal válido; de lo contrario, `null`.
 */
function isTerminal(expresion, index) {
  if (expresion === ";") {
    return new Token(expresion, "Terminal válido", index);
  } else {
    if (terminalInvalid[expresion] != true) {
      return null;
    } else {
      return null;
    }
  }
}

export { isTerminal }
