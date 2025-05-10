import { verificationC } from "./functions.mjs"


const inputField = document.getElementById('inputField');
const outputLabel = document.getElementById('outputLabel');
const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', () => {
  const userInput = inputField.value;

  // Dividimos el texto en palabras
  let charArray = userInput.split(" ");

  // Filtramos palabras vacías o no deseadas
  charArray = charArray.filter((char) => char.trim() !== "");


  let arreglo = verificationC(charArray);
  console.log(arreglo);
  let formattedText = "";
  for (let i = 0; i < arreglo.length; i += 1) {
    formattedText += `${arreglo[i].expresion} -->${arreglo[i].category} index ${arreglo[i].index}<br>`;
  }

  // Mostrar el texto formateado en el label usando innerHTML
  outputLabel.innerHTML = formattedText;
});
