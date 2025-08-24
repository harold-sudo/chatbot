function saludar(idioma, hora, genText, name) 
{
  
  let saludo = "";

  if (idioma === "espanol") {
    if (hora < 12) {
      saludo = "Buenos días";
    } else if (hora < 18) {
      saludo = "Buenas tardes";
    } else {
      saludo = "Buenas noches";
    }
    return saludo + " " + genText + " " + name;
  }
  else
  {
    if (genText === "estimada" || genText === "Sra.") {
      genText = "Ms.";
    } else if (genText === "estimado" || genText === "Sr.") {
      genText = "Mr.";
    }
    if (hora < 12) {
      saludo = "Good morning";
    } else if (hora < 18) {
      saludo = "Good afternoon";
    } else {
      saludo = "Good night";
    }
    return saludo + " " + genText + " " + name;
  }
}

export default saludar;