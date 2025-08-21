import getHour from "./hora.js";
import genero from "./genero.js";

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
  
  if (hora < 12 && genText !== "error de género") {
    div.innerHTML = "<p>Buenos días "+ genText + " " +nameValue+"</p>";
  } else if (hora < 18) {
    div.innerHTML = "<p>Buenas tardes "+ genText + " " +nameValue+"</p>";
  } else {
    div.innerHTML = "<p>Buenas noches "+ genText + " " +nameValue+"</p>"; 
  }

  // div.innerHTML = "<p>Hola " + nameValue + "</p>";
});
