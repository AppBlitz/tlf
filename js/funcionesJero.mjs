
// Punto 15 

import { Token } from "./Token.mjs";

/**
 * Verifica si una cadena contiene un comentario en línea (`//`).
 * 
 * @param {string} expresion - La cadena que se va a analizar.
 * @param {number} index - Índice en el arreglo original.
 * @returns {Token|null} Un Token con categoría "Comentario en línea", o null si no lo es.
 */

// Punto 15 
function isComentario(expresion, index) {
  const mensaggeError ="error";
  const cadena = expresion.trim();
  let auxiliar = "";
  if (cadena[0] === "/" && cadena[1] === "*") {
    
    for (let i = 2; i < cadena.length; i++) {
        
        if(cadena[i] === "*" && cadena[i+1] === "/"){
          if(i+1== cadena.length-1){
            return new Token(auxiliar, "Comentario en bloque", index);
          }else{
            return new Token(mensaggeError, "No puede haver mas caracteres despues del */", index);
          }
        }
        auxiliar+=cadena[i];
    }
    return new Token(mensaggeError, "Debe terminar en */", index);
  } else {
    if(cadena[0] === "/" && cadena[1] === "/"){
      for (let i = 2; i < cadena.length; i++) {
        auxiliar+=cadena[i];
      }
      return new Token(auxiliar, "Comentario en linea", index);  
    }
  }
  return new Token(mensaggeError, "Debe comenzar en  */", index);
}

//Punto 14
function isCadenaCaracteres(expresion, index) {
 
  const cadena = expresion.trim();
  let auxiliar ="";
  
  if(cadena[0] === '"'){
    
    for (let i = 1; i < cadena.length; i++) {
      
      auxiliar+=expresion[i];
      
      if(cadena[i]==='"'){
        
        if(i+1 == cadena.length ){
          
          return new Token(auxiliar.slice(0, -1), "Es una cadena", index);
        
        }else{
          
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
            auxiliar +=  "(carácter nulo)";            
              i++;
              break;
          default:                            
      } 
    }
    
  } 
  } else{
    return new Token(Error, "debe comenzar con comillas", index);
  }
  return new Token(Error, "cadena debe termina en comillas", index); 
}

//Punto 13
function isSeparadorComa(expresion, index) {
  const cadena = expresion.trim();
  for (let i = 0; i < cadena.length; i++) {
    if(cadena[i]==","){
      if(i++ == cadena.length){
        return new Token(cadena, "Separador", index);
      }else{
        return new Token(Error, "No es un separador valido", index);
      }
      
    }else{
      return new Token(Error, "No es un separador valido", index);
    }
  }
}

//Punto 12
function isTerminal(expresion, index) {
  const cadena = expresion.trim();
  for (let i = 0; i < cadena.length; i++) {
    if(cadena[i]==";"){
      console.log(i++);
        console.log(cadena.length);
      if(i++ == cadena.length){
        return new Token(cadena, "Es un Terminal", index);
      }else{
        return new Token("Error 1", "No es un terminal valido", index);
      }
      
    }else{
      return new Token("Error 2", "No es un terminal valido", index);
    }
  }
}
//Punto 11
function isLlave(expresion, index) {
    // Eliminamos espacios al principio y al final
    expresion = expresion.trim();
  
    // Verificamos si la expresión es exactamente "{" o "}"
    if (expresion === "{" ) {
        return new Token(expresion, "Es llave de apertura", index);
    } 
    if( expresion === "}"){
        return new Token(expresion, "Es llave de cierre ", index);
    }
    return null;  
}
//Main que hace como test
function main() {

  console.log(isTerminal("hola;",0));
}
  
  main();