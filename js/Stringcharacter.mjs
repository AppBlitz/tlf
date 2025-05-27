
import { Token } from "./Token.mjs"

/**
 * Verifica si una expresión representa una cadena de caracteres válida.
 * 
 * Reglas de validación:
 * - Debe comenzar y terminar con comillas dobles (`"`).
 * - Soporta caracteres de escape como:
 *   - `\"` → comilla doble
 *   - `\\` → barra invertida
 *   - `\n` → salto de línea
 *   - `\t` → tabulación
 *   - `\0` → carácter nulo
 * - No debe haber texto después de la comilla de cierre.
 * 
 * Si es válida, devuelve un Token que representa la cadena, excluyendo la comilla final.
 * Si es inválida (comillas mal cerradas o texto adicional), retorna `null`.
 * 
 * @param {string} expresion - La cadena de texto a evaluar.
 * @param {number} index - Posición de la expresión dentro del análisis global.
 * @returns {Token|null} Un Token si es una cadena válida, o `null` si no lo es.
 */
function isCadenaCaracteres(expresion, index) {
  const cadena = expresion.trim();
  let auxiliar = "";

  // Verifica que inicie con comilla doble
  if (cadena[0] === '"') {
    for (let i = 1; i < cadena.length; i++) {
      auxiliar += expresion[i];

      // Si encuentra una comilla de cierre
      if (cadena[i] === '"') {
        if (i + 1 === cadena.length) {
          // Retorna la cadena sin la comilla final
          return new Token(auxiliar.slice(0, -1), "Es una cadena", index);
        } else {
          // No debe haber texto después de la comilla de cierre
          return null;
        }
      }

      // Manejo de caracteres de escape
      if (cadena[i] === '\\') {
        const siguiente = cadena[i + 1];
        auxiliar = auxiliar.slice(0, -1); // Elimina el backslash visible

        switch (siguiente) {
          case '"':
            auxiliar += "(comilla doble)";
            i++;
            break;
          case '\\':
            auxiliar += "(barra invertida)";
            i++;
            break;
          case 'n':
            auxiliar += "(salto de línea)";
            i++;
            break;
          case 't':
            auxiliar += "(tabulación)";
            i++;
            break;
          case '0':
            auxiliar += "(carácter nulo)";
            i++;
            break;
          default:
            // Si el carácter de escape no es reconocido, no hace nada
            break;
        }
      }
    }
  } else {
    // Si no comienza con comilla doble, no es una cadena
    return null;
  }

  // Si termina el bucle sin encontrar comilla de cierre
  return null;
}

export { isCadenaCaracteres }
