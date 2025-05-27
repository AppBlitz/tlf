import { Token } from "./Token.mjs"
import { terminalInvalid } from "./Dictionary.mjs";

/**
 * Checks if a given expression is a comma separator (",").
 *
 * @param {string} expresion - The expression to evaluate.
 * @param {number} index - The index of the expression in the source.
 * @returns {Token|null} A Token object if the expression is a comma separator, otherwise null.
 */
function isSeparadorComma(expresion, index) {
  expresion.trim();
  if (expresion.length > 1) {
    return null;
  }
  else if (expresion === ",") {
    return new Token(expresion, terminalInvalid[expresion], index);
  }

}

export { isSeparadorComma }

