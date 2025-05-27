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
