import saludarHr from './saludar.js';
import getHour from './hora.js';

const hora = getHour();

if (hora < 12) 
{
    test('saludar en la mañana', () => {
        expect(saludarHr(hora)).toBe("Buenos días");
    });
} else if (hora < 18) {
    test('saludar en la tarde', () => {
        expect(saludarHr(hora)).toBe("Buenas tardes");
    });
} else {
    test('saludar en la noche', () => {
        expect(saludarHr(hora)).toBe("Buenas noches");
    });
}