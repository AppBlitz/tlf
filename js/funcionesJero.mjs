
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
    if (expresion.length < 2) {
      return null;
    }
  
    const primerCaracter = expresion[0];
    const ultimoCaracter = expresion[expresion.length - 1];
  
    if (primerCaracter === '"' && ultimoCaracter === '"') {
      for (let i = 1; i < expresion.length - 1; i++) {
        if (expresion[i] === '\\') {
          if (i === expresion.length - 2) {
            console.log("Error: El carácter de escape \\ no puede estar al final.");
            return new Token(expresion, "Error 1", index);
          }
  
          const siguienteCaracter = expresion[i + 1];
          const caracteresValidos = ['n', 't', '\\', '"', '0'];
          if (!caracteresValidos.includes(siguienteCaracter)) {
            console.log(`Error: Secuencia de escape inválida \\${siguienteCaracter} en la posición ${i}`);
            return new Token(expresion, "Error2", index);
          }
          i++; // saltar el carácter escapado
        }
      }
      return new Token(expresion, "Cadena de caracteres", index);
    }
  
    return new Token(expresion, "Error 3", index);
  }

//Punto 13
function isSeparadorComa(expresion, index) {
    // Si el texto está vacío, retornamos false
    if (!expresion || expresion.trim() === '') {
      return null;
    }
    // Validamos que el string no empiece ni termine con coma
    if (expresion.trim().startsWith(',') || expresion.trim().endsWith(',')) {
      return null;
    }
    // Dividimos por comas para verificar cada elemento
    const elementos = expresion.split(',');
    
    // Verificamos cada elemento
    for (let elemento of elementos) {
      const elementoTrimmed = elemento.trim();
    // Si el elemento está vacío (comas consecutivas)
      if (elementoTrimmed === '') {
        return null;
      }
     // Verificamos si hay espacios dentro del elemento (no solo al inicio o final)
      // Si tiene espacios internos, el formato es incorrecto
      if (elementoTrimmed.includes(' ')) {
        return null;
      }
    // Si al quitar espacios iniciales y finales, aún quedan espacios
      if (elemento !== elementoTrimmed && elementoTrimmed.length > 0) {
        const soloEspaciosExtremos =
          (elemento.startsWith(' ') && elemento.trimStart() === elementoTrimmed) ||
          (elemento.endsWith(' ') && elemento.trimEnd() === elementoTrimmed) ||
          (elemento.startsWith(' ') && elemento.endsWith(' ') &&
            elemento.trim() === elementoTrimmed);
         // Si hay espacios que no están en los extremos, es formato incorrecto
        if (!soloEspaciosExtremos) {
          return null;
        }
      }
    }
    // Si hay un espacio que no esté alrededor de una coma, es formato incorrecto
    // Esto detectaría "palabra palabra" o "palabra    palabra"
    const sinComas = expresion.replace(/\s*,\s*/g, ',');
    if (sinComas.includes(' ')) {
      return null;
    }
  
    return new Token(expresion, "Separador por coma válido", index);
  }

//Punto 12
function isTerminal(expresion, index) {
    // Quitamos espacios en blanco al final de la expresión
    expresion = expresion.trimEnd();
  
    // Verificamos si el último carácter es ";"
    if (expresion.endsWith(";")) {
      return new Token(expresion, "Terminal", index);
    } else {
      return false;
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


}
  
  main();