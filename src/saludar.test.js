import saludar from './saludar.js';

describe('saludar', () => {
  test('saludo en español por la mañana', () => {
    expect(saludar('espanol', 8, 'Sr.', 'Harold')).toBe('Buenos días Sr. Harold');
  });

  test('saludo en español por la tarde', () => {
    expect(saludar('espanol', 15, 'Sra.', 'Ana')).toBe('Buenas tardes Sra. Ana');
  });

  test('saludo en español por la noche', () => {
    expect(saludar('espanol', 20, 'Sr.', 'Luis')).toBe('Buenas noches Sr. Luis');
  });

  test('saludo en inglés por la mañana', () => {
    expect(saludar('ingles', 9, 'Sr.', 'John')).toBe('Good morning Mr. John');
  });

  test('saludo en inglés por la tarde', () => {
    expect(saludar('ingles', 16, 'Sra.', 'Mary')).toBe('Good afternoon Ms. Mary');
  });

  test('saludo en inglés por la noche', () => {
    expect(saludar('ingles', 22, 'Sr.', 'Paul')).toBe('Good night Mr. Paul');
  });
});