
import { Token } from "./Token.mjs"

/**
 * Verifica si una expresión es un identificador válido.
 * 
 * Un identificador válido debe cumplir:
 * - No estar vacío.
 * - Tener una longitud máxima de 10 caracteres.
 * - No comenzar con un dígito.
 * - Contener solo letras (a-z), números (0-9) o guion bajo (_).
 * 
 * @param {string} expresion - La expresión que se quiere validar como identificador.
 * @param {number} index - La posición o índice del elemento en el análisis.
 * @returns {Token|null} Un objeto Token si la expresión es un identificador válido, o null si no lo es.
 */
function isIdentificador(expresion, index) {
  const cadena = expresion.trim();
  const cadenaMin = cadena.toLowerCase();
  let flag = true;

  if (cadena == '' || cadena.length - 1 >= 10) {
    flag = false;
  }

  for (let i = 0; i < cadenaMin.length; i++) {
    const codigo = cadenaMin.charCodeAt(i);
    // Validar que el primer caracter no sea un dígito
    if (i == 0) {
      if (codigo >= 48 && codigo <= 57) {
        console.log(cadenaMin[i])
        return null;
      }
    }

    if (codigo >= 97 && codigo <= 122) { // a-z
      continue;
    } else if (codigo === 95) { // _
      continue;
    } else if (codigo >= 48 && codigo <= 57) { // 0-9
      continue;
    } else {
      flag = false;
    }
  }

  if (flag === true) {
    return new Token(cadena, "Es un identificador", index);
  } else {
    return null;
  }
}

export { isIdentificador }
