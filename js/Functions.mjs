
import { Token } from "./Token.mjs"
import { isSeparadorComma } from "./Comma.mjs"
import { isKey } from "./Keys.mjs"
import { isTerminal } from "./Terminal.mjs"
import { verificationKeyWord } from "./KeyWords.mjs"
import { isAssignmentOperators } from "./AssignmentOperators.mjs"
import { isOPeratorPurchasing } from "./PurchasingOperators.mjs"
import { isNumber } from "./NumberNature.mjs"
import { isNumeroReal } from "./RealNumbers.mjs"
import { verificationA, isAritemticoOrDecrement } from "./Verification.mjs"

const verifiers = [
  isAritemticoOrDecrement,
  verificationKeyWord,
  verificationA,
  isTerminal,
  isSeparadorComma,
  isKey,
  isAssignmentOperators,
  isOPeratorPurchasing,
  isNumber,
  isNumeroReal,
]

/**
 * Recorre un array de entradas y aplica funciones de verificación para extraer Tokens.
 * @param {Array} array - Lista de elementos a analizar.
 * @returns {Token[]} Lista de objetos Token encontrados.
 */
function verificationC(array) {
  const resultado = []

  for (let i = 0; i < array.length; i++) {
    for (const verify of verifiers) {
      const token = verify(array[i], i)
      if (token != null) {
        resultado.push(token)
        break
      }
    }
  }

  return resultado
}

export { verificationC }
