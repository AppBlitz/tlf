import { Token } from "./Token.mjs"
import { terminalInvalid } from "./Dictionary.mjs";

function isLogicol(expresion, index) {
  expresion.trim();
  if (expresion === "&") {
    return null;
  }
  else if ("|") {
    return null;
  }
  else if (expresion === "!") {
    return new Token(expresion, terminalInvalid[expresion], index);
  }
  else if (expresion === "&&") {
    return new Token(expresion, terminalInvalid[expresion], index);
  }
  else if (expresion === "||") {
    return new Token(expresion, terminalInvalid[expresion], index);
  }
  else {
    return null;
  }
}

export { isLogicol }
