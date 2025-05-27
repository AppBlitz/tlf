
import { Token } from "./Token.mjs"

/**
 * Verifica si una expresión es un número natural (solo dígitos del 0 al 9).
 * 
 * Recorre cada carácter de la cadena y valida que sea un dígito numérico.
 * 
 * @param {string} expresion - La expresión a analizar.
 * @param {number} index - La posición de la expresión en el análisis general.
 * @returns {Token|null} Un objeto `Token` si la expresión es un número natural válido, o `null` si no lo es.
 */
function isNumber(expresion, index) {
  const cadena = expresion.trim();

  for (let i = 0; i < cadena.length; i++) {
    const codigo = cadena.charCodeAt(i);

    // Si el carácter no es un dígito ASCII (48-57), retorna null
    if (codigo < 48 || codigo > 57) {
      return null;
    }
  }

  // Si todos los caracteres son dígitos, retorna un Token con la categoría "numero natural"
  return new Token(cadena, "numero natural", index);
}

export { isNumber }
