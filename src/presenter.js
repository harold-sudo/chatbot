import getHour from "./hora.js";

const name = document.querySelector("#nombre");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameValue = name.value;
  const hora = getHour();
  
  if (hora < 12) {
    div.innerHTML = "<p>Buenos días "+ nameValue+"</p>";
  } else if (hora < 18) {
    div.innerHTML = "<p>Buenas tardes "+ nameValue+"</p>";
  } else {
    div.innerHTML = "<p>Buenas noches "+ nameValue+"</p>"; 
  }

  // div.innerHTML = "<p>Hola " + nameValue + "</p>";
});
