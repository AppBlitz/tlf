import { Token } from "./Token.mjs"
function isCadenaCaracteres(expresion, index) {

  const cadena = expresion.trim();
  let auxiliar = "";

  if (cadena[0] === '"') {

    for (let i = 1; i < cadena.length; i++) {

      auxiliar += expresion[i];

      if (cadena[i] === '"') {

        if (i + 1 == cadena.length) {

          return new Token(auxiliar.slice(0, -1), "Es una cadena", index);

        } else {

          return new Token("Error", "No debes haver caracteres despues de la ultima comilla", index);
        }
      }
      if (cadena[i] === '\\') {
        const siguiente = cadena[i + 1];
        auxiliar = auxiliar.slice(0, -1);
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
            auxiliar += "(Salto de linea)";

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
        }
      }

    }
  } else {
    return new Token(Error, "debe comenzar con comillas", index);
  }
  return new Token(Error, "cadena debe termina en comillas", index);
}
export { isCadenaCaracteres }
