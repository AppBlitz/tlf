import { Token } from "./Token.mjs";

/**
 * Verifica si una cadena contiene un comentario en línea (`//`).
 * 
 * @param {string} expresion - La cadena que se va a analizar.
 * @param {number} index - Índice en el arreglo original.
 * @returns {Token|null}
**/
//Punto 1
function isNumeroNatural(expresion, index) {
    const cadena = expresion.trim();
     
    for (let i = 0; i < cadena.length; i++) {
      const codigo = cadena.charCodeAt(i);
      if(codigo < 48 || codigo > 57){
        return new Token(Error, "No es un numero natural valido", index);
      }
  }
  return new Token(cadena, "numero natural ", index);
}
//Punto 2
function isNumeroReal(expresion, index) {
  //Areglo que contiene codigos ASCII
  const simbolos = [48,49,50,51,52,53,54,55,56,57,43,45,46];
  const cadena = expresion.trim();   

  for (let i = 0; i < cadena.length; i++) {
    const codigo = cadena.charCodeAt(i);
    if(i==0){
      if (!simbolos.includes(codigo)) {
        return new Token(Error, "No es numero real valido ER1", index);
      }
    }
    if(codigo=== 46){

      if(cadena.length>1){
      for (let x = i+1; x < cadena.length; x++) {

        const codigo = cadena.charCodeAt(x);
        if(codigo === 102||codigo === 70){
          if(cadena.length-1==x){
            return new Token(cadena, "Numero real", index);
          }
        }
        if(codigo < 48 || codigo > 57){
          return new Token(Error, "No es un numero real valido ER3", index);
        }
      }
      return new Token(cadena, "Numero real", index);
      }else{
        return new Token(Error, "No es un numero real valido ER3", index);
      }
      
    }
    if(codigo < 48 || codigo > 57){
      return new Token(Error, "No es un numero real valido ER4", index);
    }
}
return new Token(cadena, "Numero real", index);
}
//Punto 3
function isIdentificador(expresion, index) {
  const cadena = expresion.trim();
  const cadenaMin = cadena.toLowerCase();
  let flag = true;

  if(cadena==''||cadena.length-1>=10){
    flag=false;
  }

  for (let i = 0; i < cadenaMin.length; i++) {
    const codigo = cadenaMin.charCodeAt(i);
    //Validar que el primer numero no sea un digito
    if(i==0){
      if(codigo >= 48 && codigo <= 57){
        console.log(cadenaMin[i])
        return new Token(Error, "No es un identificador valido1", index);
      }
    }

    if(codigo >= 97 && codigo <= 122){
      continue;
    }else if(codigo === 95){
      continue;     
    }else if (codigo >= 48 && codigo <= 57){
      continue;
    }else{
      flag = false;
    }
  }
  if(flag===true){
    return new Token(cadena, " identificador valido", index);
  }else{
    return new Token(Error, "No es un identificador valido", index);
  }
}


  //Main que hace como test
function main() {

}
  
main();