import { Token } from "./Token.mjs"

function isNumber(expresion, index) {
  const cadena = expresion.trim();
  for (let i = 0; i < cadena.length; i++) {
    const codigo = cadena.charCodeAt(i);
    if (codigo < 48 || codigo > 57) {
      return null;
    }
  }
  return new Token(cadena, "numero natural ", index);

}

export { isNumber }
