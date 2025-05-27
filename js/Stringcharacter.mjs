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

          return null;
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
    return null;
  }
  return null;
}
export { isCadenaCaracteres }
