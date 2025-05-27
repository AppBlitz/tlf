import { Token } from "./Token.mjs"
function isComentario(expresion, index) {
  const mensaggeError = "error";
  const cadena = expresion.trim();
  let auxiliar = "";
  if (cadena[0] === "/" && cadena[1] === "*") {

    for (let i = 2; i < cadena.length; i++) {

      if (cadena[i] === "*" && cadena[i + 1] === "/") {
        if (i + 1 == cadena.length - 1) {
          return new Token(auxiliar, "Comentario en bloque", index);
        } else {
          return new Token(mensaggeError, "No puede haver mas caracteres despues del */", index);
        }
      }
      auxiliar += cadena[i];
    }
    return new Token(mensaggeError, "Debe terminar en */", index);
  } else {
    if (cadena[0] === "/" && cadena[1] === "/") {
      for (let i = 2; i < cadena.length; i++) {
        auxiliar += cadena[i];
      }
      return new Token(auxiliar, "Comentario en linea", index);
    }
  }
  return new Token(mensaggeError, "Debe comenzar en  */", index);
}
export { isComentario }
