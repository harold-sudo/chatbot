import sumar from "./sumador";

const name = document.querySelector("#nombre");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameValue = name.value;

  div.innerHTML = "<p>Hola " + nameValue + "</p>";
});
