
import { verificationC } from "./Functions.mjs";

const inputField = document.getElementById('inputField');
const outputLabel = document.getElementById('outputLabel');
const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', () => {
  const userInput = inputField.value;

  let charArray = userInput.split(" ");

  charArray = charArray.filter((char) => char.trim() !== "");

  charArray = charArray.map((char) => char.replace(/\n/g, ""));
  console.log(charArray);

  let arreglo = verificationC(charArray);
  console.log(arreglo);

  let formattedText = "";
  for (let i = 0; i < arreglo.length; i += 1) {
    formattedText += `${arreglo[i]?.expresion} -->${arreglo[i]?.category} index ${arreglo[i]?.index}<br>`;
  }

  outputLabel.innerHTML = formattedText;
});
