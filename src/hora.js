function getHour() 
{
  let fechaActual = new Date();
  let horaActual = fechaActual.getHours();
  return horaActual;
}

export default getHour;