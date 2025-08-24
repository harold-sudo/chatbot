import genero from "./genero";

test('mujer joven', () => {
        expect(genero("Femenino", 18)).toBe("estimada");
    });

test('hombre joven', () => {
        expect(genero("Masculino", 18)).toBe("estimado");
    });

test('mujer mayor', () => {
        expect(genero("Femenino", 45)).toBe("Sra.");
    });

test('hombre mayor', () => {
        expect(genero("Masculino", 45)).toBe("Sr.");
    });
