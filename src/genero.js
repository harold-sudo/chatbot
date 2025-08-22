function genero(gen, edad)
{
    if (edad < 30)
    {
        if (gen === "Femenino")
        {
            return "estimada";
        }
        else
        {
            return "estimado";
        }
    }
    else
    {
        if (gen === "Femenino")
        {
            return "Sra.";
        }
        else
        {
            return "Sr.";
        }
    }
}

export default genero;