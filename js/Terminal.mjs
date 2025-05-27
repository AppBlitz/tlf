
import { Token } from "./Token.mjs"
import { terminalInvalid } from "./Dictionary.mjs";
function isTerminal(expresion, index) {
  if (expresion === ";") {
    return new Token(expresion, "Terminal valido", index)
  }
  else {
    if (terminalInvalid[expresion] != true) {
      return null;
    }
    else {
      return null;
    }
  }
}

export { isTerminal }
