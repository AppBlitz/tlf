/*
 * Se busca que esta objeto tenga ciertos objetos que permiten la identificación de simbolos más adelante, lo cual permite mcuho mejor el trabajo cuando se desea llamar 
 * Como tiene un token asociado a un valor booleano o una descripción textual de lo que se refiere el simbolo
 * Permite mucho mejor el llamado cuando se encesita
 * */
const terminalInvalid = {
  ":": false,
  ",": "separador de coma",
  "{": "Llave de apertura",
  "}": "Llave de cierre",
  "++": "OPerador de aumento",
  "--": "Operador de decremento",
  "-": "Operador de resta",
  "+": "Operador de suma",
  "%": "OPerador de madulo",
  "/": "Operador de división",
  "*": "Operador de multiplicación",
  "&&": "OPerador lógico and",
  "||": "Operador lógico or",
  "!": "OPerador de negación",
  "==": "Operador de comparación, igual a que",
  ">": "Operador comparación mayor que",
  "<": "Operador comperación menor que",
  ">=": "Operador de comparación mayor o igual que",
  "<=": "Operador de comparación menor o igual que",
  "!=": "Operador de comparación diferente a ",
}

/*
 * Con esto objeto se busca guardar todas las palabras reservadas que deberian de ser reconocidas por analizador léxico, también en mucho más fácil su manejo debido a que se le pueden agregar más palabras reservadas y el metodo de todas maneras lo va a pdoer reconocer
 * */
const keywords = {
  "if": "Palabra reservada",
  "int": "Palabra reservada",
  "for": "Palabra reservada",
  "else": "Palabra reservada",
  "switch": "Palabra reservada",
  "case": "Palabra reservada",
  "default": "Palabra reservada",
  "while": "Palabra reservada",
  "do": "Palabra reservada",
  "break": "Palara reservada",
  "continue": "Palabra reservada",
  "return": "Palabra reservada",
  "double": "Palabra reservada",
  "float": "Palabra reservada",
  "bool": "Palabra reservada",
  "const": "Palabra reservada"
}
/*
 * Con este objeto se desea agregar los diferentes caracteres como lo son letras de la a A la z y poder servirse como referencia para un futuro utilizarse para la busqueda de palabras reservadas o nombre de variables
 * */
const word = {
  "a": "a",
  "b": "b",
  "c": "c",
  "d": "d",
  "e": "e",
  "f": "f",
  "g": "g",
  "h": "h",
  "i": "i",
  "j": "j",
  "k": "k",
  "l": "l",
  "m": "m",
  "n": "n",
  "o": "o",
  "p": "p",
  "q": "q",
  "r": "r",
  "s": "s",
  "t": "t",
  "u": "u",
  "v": "v",
  "w": "w",
  "x": "x",
  "y": "y",
  "z": "z"
};

/*
 * Se creo un diccionario de simbolos donde se pueda identificar estos de una manera más clara y fácil, esto ayuda a que a la hora de buscar que simbolos permite el lenguaje estos se puedan utilizar
 * */

const simbols = {
  "=": "=",
  "+": "+",
  "-": "-",
  "*": "*",
  "/": "/",
  "%": "%",
  "&": "&",
  ">": ">",
  "<": "<"
}


/*
 * Se creo este diccionario donde se identifica todos los operadores de asignación que tiene c++, cuando se desea verificar si un operador de asignación permite c++ se recurre a este objeto
 * */
const operatorAssignation = {
  "=": "Operador de asignación simple",
  "+=": "Operador de suma y asignación",
  "-=": "Operador de resta y asignación",
  "*=": "Operador de multiplicación y asignación",
  "/=": "Operador de división y asignación",
  "%=": "Operador de modulo y asignación",
  "&=": "OPerador de asignación And y bit y asignación",
  "^=": "Operador Xor bi a bit y asignación",
  "|=": "Or bit a bit y asignación",
  ">>=": "Desplazamiento a la derecha y asignación",
  "<<=": "Desplazamiento a la izquierda y asignación"

}

export { terminalInvalid, word, keywords, simbols, operatorAssignation }
