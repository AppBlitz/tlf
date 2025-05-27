
import { Token } from "./Token.mjs"

/**
 * Verifica si una expresión representa un número real válido.
 * 
 * Reglas para considerar una expresión como número real:
 * - Puede comenzar con un signo `+` o `-`, o un dígito.
 * - Puede contener un punto decimal `.` con dígitos antes o después.
 * - Opcionalmente puede terminar en `f` o `F`, como notación de flotante.
 * 
 * Caracteres permitidos: [0-9], `+`, `-`, `.`
 * 
 * @param {string} expresion - La expresión a analizar.
 * @param {number} index - La posición de la expresión en el análisis general.
 * @returns {Token|null} Un objeto Token si es un número real válido, o `null` si no lo es.
 */
function isNumeroReal(expresion, index) {
  const simbolos = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 43, 45, 46]; // Caracteres válidos: 0-9, +, -, .
  const cadena = expresion.trim();

  for (let i = 0; i < cadena.length; i++) {
    const codigo = cadena.charCodeAt(i);

    // Primer carácter: debe ser símbolo válido
    if (i === 0) {
      if (!simbolos.includes(codigo)) {
        return null;
      }
    }

    // Detección del punto decimal
    if (codigo === 46) { // "."
      // Debe haber al menos un carácter más
      if (cadena.length > 1) {
        for (let x = i + 1; x < cadena.length; x++) {
          const codigo = cadena.charCodeAt(x);

          // Soporta notación tipo `1.23f` o `4.5F`
          if (codigo === 102 || codigo === 70) { // 'f' o 'F'
            if (x === cadena.length - 1) {
              return new Token(cadena, "Numero real", index);
            }
          }

          // Solo se permiten dígitos después del punto
          if (codigo < 48 || codigo > 57) {
            return null;
          }
        }

        return new Token(cadena, "Numero real", index);
      } else {
        return null;
      }
    }

    // Si no es punto, debe ser dígito
    if (codigo < 48 || codigo > 57) {
      return null;
    }
  }

  // Si pasa todas las validaciones, es un número real
  return new Token(cadena, "Numero real", index);
}

export { isNumeroReal }
