import getHour from "./hora.js";
import genero from "./genero.js";
import saludar from "./saludar.js";

const name = document.querySelector("#nombre");
const gen = document.querySelector("#genero");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameValue = name.value;
  const genValue = gen.value;
  const hora = getHour();
  const genText = genero(genValue);
  const saludo = saludar(hora);
  
  div.innerHTML = "<p>" + saludo + " "+ genText + " " + nameValue + "</p>";
  // div.innerHTML = "<p>Hola " + nameValue + "</p>";
});
