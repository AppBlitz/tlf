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
    //Validar que el primer numero no sea un digito
    if (i == 0) {
      if (codigo >= 48 && codigo <= 57) {
        console.log(cadenaMin[i])
        return null;
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
    return new Token(cadena, "Es un identificador", index);
  } else {
    return null;
  }
}
export { isIdentificador }
