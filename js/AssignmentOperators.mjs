import { Token } from "./Token.mjs"
import { simbols, operatorAssignation } from "./Dictionary.mjs";

function isAssignmentOperators(expresion, index) {
  expresion.trim();
  let auxiliary = "";
  for (let i = 0; i < expresion.length; i += 1) {
    if (expresion[i] in simbols) {
      auxiliary += expresion[i];
    }
  }
  if (auxiliary in operatorAssignation) {
    return new Token(expresion, operatorAssignation[expresion], index);
  }
  else {
    return null;
  }
}

export { isAssignmentOperators }
