import getHour from "./hora.js";
import genero from "./genero.js";
import saludar from "./saludar.js";

const name = document.querySelector("#nombre");
const gen = document.querySelector("#genero");
const edad = document.querySelector("#edad");
const idioma = document.querySelector("#idioma");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const genText = genero(gen.value, edad.value);
  const hora = getHour();
  const saludo = saludar(idioma.value, hora, genText, name.value);
  div.innerHTML = "<p>" + saludo + "</p>";
});
