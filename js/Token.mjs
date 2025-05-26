/**
 * Clase que representa un Token, que contiene una expresión, categoría e índice.
 * 
 * @class Token
 */
class Token {

  /**
   * Crea una instancia de la clase Token.
   * 
   * @param {string} expresion - La expresión asociada al token.
   * @param {string} category - La categoría o tipo del token.
   * @param {number} index - El índice de la posición del token.
   */
  constructor(expresion, category, index) {
    this.expresion = expresion;
    this.category = category;
    this.index = index;
  }

  /**
   * Obtiene el token completo como una cadena de texto.
   * 
   * @returns {string} La representación en cadena del token, combinando la expresión, categoría, índice y la palabra "finalizado".
   */
  get token() {
    return `${this.expresion} (${this.category}) at index ${this.index}`;
  }

}

export { Token };
