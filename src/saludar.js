
function saludarHr(hora) 
{
  
  let saludo = "";
  
  if (hora < 12) {
    saludo = "Buenos días";
  } else if (hora < 18) {
    saludo = "Buenas tardes";
  } else {
    saludo = "Buenas noches";
  }
  
  return saludo;
}

export default saludarHr;