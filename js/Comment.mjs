
import { Token } from "./Token.mjs"

// COn esta función lo que se busca es observar si la función corresponde a un comentario
//
// @param { string } expresion - La expresión a analizar.
// @param { number } index - El índice de la expresión dentro del análisis total.
// @returns { Token| null} Un objeto Token que representa el tipo de comentario, o un Token de error si hay problemas de formato.
function isComentario(expresion, index) {
  const cadena = expresion.trim(); // Elimina espacios al inicio y al final
  let auxiliar = "";

  // Verifica si es un comentario en bloque
  if (cadena[0] === "/" && cadena[1] === "*") {
    for (let i = 2; i < cadena.length; i++) {
      // Detecta el cierre del comentario
      if (cadena[i] === "*" && cadena[i + 1] === "/") {
        // Asegura que no haya más caracteres después de cerrar el comentario
        if (i + 1 === cadena.length - 1) {
          return new Token(auxiliar, "Comentario en bloque", index);
        } else {
          return null;
        }
      }
      auxiliar += cadena[i];
    }
    return null;
  }

  // Verifica si es un comentario en línea
  else if (cadena[0] === "/" && cadena[1] === "/") {
    for (let i = 2; i < cadena.length; i++) {
      auxiliar += cadena[i];
    }
    return new Token(auxiliar, "Comentario en línea", index);
  }

  // Si no comienza correctamente como comentario
  return null;
}

export { isComentario }
