import { Token } from "./Token.mjs"
import { simbols, terminalInvalid } from "./Dictionary.mjs"

function isOPeratorPurchasing(expresion, index) {
  expresion.trim();
  let auxiliary = "";
  for (let i = 0; i < expresion.length; i += 1) {
    if (expresion[i] in simbols) {
      auxiliary += expresion[i];
    }
  }
  if (auxiliary in terminalInvalid) {
    return new Token(expresion, terminalInvalid[expresion], index);
  }
  else {
    return null;
  }
}
export { isOPeratorPurchasing }
