import { Token } from "./Token.mjs"

function isIdentificador(expresion, index) {
  const cadena = expresion.trim();
  const cadenaMin = cadena.toLowerCase();
  let flag = true;

  if (cadena == '' || cadena.length - 1 >= 10) {
    flag = false;
  }

  for (let i = 0; i < cadenaMin.length; i++) {
    const codigo = cadenaMin.charCodeAt(i);
    if (i == 0) {
      if (codigo >= 48 && codigo <= 57) {
        console.log(cadenaMin[i])
        return new Token(Error, "No es un identificador valido1", index);
      }
    }

    if (codigo >= 97 && codigo <= 122) {
      continue;
    } else if (codigo === 95) {
      continue;
    } else if (codigo >= 48 && codigo <= 57) {
      continue;
    } else {
      flag = false;
    }
  }
  if (flag === true) {
    return new Token(cadena, " identificador valido", index);
  } else {
    return new Token(Error, "No es un identificador valido", index);
  }
}

export { isIdentificador }
