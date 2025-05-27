import { Token } from "./Token.mjs"
function isNumeroReal(expresion, index) {
  const simbolos = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 43, 45, 46];
  const cadena = expresion.trim();

  for (let i = 0; i < cadena.length; i++) {
    const codigo = cadena.charCodeAt(i);
    if (i == 0) {
      if (!simbolos.includes(codigo)) {
        return null;
      }
    }
    if (codigo === 46) {

      if (cadena.length > 1) {
        for (let x = i + 1; x < cadena.length; x++) {

          const codigo = cadena.charCodeAt(x);
          if (codigo === 102 || codigo === 70) {
            if (cadena.length - 1 == x) {
              return new Token(cadena, "Numero real", index);
            }
          }
          if (codigo < 48 || codigo > 57) {
            return null;
          }
        }
        return new Token(cadena, "Numero real", index);
      } else {
        return null;
      }

    }
    if (codigo < 48 || codigo > 57) {
      return null;
    }
  }
  return new Token(cadena, "Numero real", index);
}


export { isNumeroReal }
