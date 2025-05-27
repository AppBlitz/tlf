
import { Token } from "./Token.mjs"
import { simbols, terminalInvalid } from "./Dictionary.mjs"

/**
 * Verifica si una expresión corresponde a un operador de "compra" (combinación válida de símbolos).
 * 
 * Esta función construye una cadena auxiliar utilizando solo los caracteres que están presentes 
 * en el objeto `simbols`. Luego verifica si dicha combinación existe como clave en `terminalInvalid`.
 * 
 * Si es así, se considera un operador válido y se retorna un objeto `Token` con la descripción correspondiente.
 * En caso contrario, retorna `null`.
 * 
 * @param {string} expresion - Cadena a evaluar como posible operador.
 * @param {number} index - Índice de la expresión en el análisis general.
 * @returns {Token|null} Un `Token` si es un operador válido, o `null` si no lo es.
 */
function isOPeratorPurchasing(expresion, index) {
  expresion = expresion.trim(); // Asegura que no haya espacios

  let auxiliary = "";

  // Construye una nueva cadena con los caracteres válidos según el objeto `simbols`
  for (let i = 0; i < expresion.length; i += 1) {
    if (expresion[i] in simbols) {
      auxiliary += expresion[i];
    }
  }

  // Verifica si esa combinación está en los operadores definidos como válidos
  if (auxiliary in terminalInvalid) {
    return new Token(expresion, terminalInvalid[expresion], index);
  } else {
    return null;
  }
}

export { isOPeratorPurchasing }
