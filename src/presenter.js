import getHour from "./hora.js";
import genero from "./genero.js";
import saludar from "./saludar.js";

const name = document.querySelector("#nombre");
const gen = document.querySelector("#genero");
const edad = document.querySelector("#edad");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameValue = name.value;
  const hora = getHour();
  const genText = genero(gen.value, edad.value);
  const saludo = saludar(hora);
  
  div.innerHTML = "<p>" + saludo + " "+ genText + " " + nameValue + "</p>";
});
