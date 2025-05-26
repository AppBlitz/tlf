import { Token } from "./Token.mjs"
import { terminalInvalid } from "./dictionary.mjs";
/**
 * Checks if a given expression is an opening or closing key ("{" or "}").
 *
 * @param {string} expresion - The expression to evaluate.
 * @param {number} index - The index of the expression in the source.
 * @returns {Token|null} A Token object if the expression is a key, otherwise null.
 */
function isKey(expresion, index) {
  expresion.trim();
  if (expresion.length == 1 && expresion === "{") {
    return new Token(expresion, terminalInvalid[expresion], index);
  }
  else if (expresion.length == 1 && expresion === "}") {
    return new Token(expresion, terminalInvalid[expresion], index);
  }
  else {
    return null;
  }
}

export { isKey }
