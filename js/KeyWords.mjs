
import { Token } from "./Token.mjs";
import { keywords, word } from "./Dictionary.mjs";


/**
 * Checks if a given expression is a comma separator (",").
 *
 * @param {string} expresion - The expression to evaluate.
 * @param {number} index - The index of the expression in the source.
 * @returns {Token|null} A Token object if the expression is a comma separator, otherwise null.
 */
function verificationKeyWord(expresion, index) {
  let auxiliary = "";

  for (let i = 0; i < expresion.length; i++) {
    const letter = word[expresion[i]];

    if (letter === undefined) {
      return null;
    }
    auxiliary += expresion[i];
  }

  if (auxiliary in keywords) {
    return new Token(expresion, keywords[auxiliary], index);
  } else {
    return null;
  }
}

export { verificationKeyWord };
