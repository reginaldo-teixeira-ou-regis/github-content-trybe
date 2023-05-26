const searchEmployee = require('./script.js');

describe('Test the function searchEmployee', () => {
  it('Test if searchEmployee is a function', () => {
    expect(typeof searchEmployee).toBe('function');
  });

  it('Test if searchEmployee(id, "firstName") returns the first username of the queried id', () => {
    const actual = searchEmployee('1256-4', 'firstName');
    const expected = 'Linda';

    expect(actual).toBe(expected);
  });

  it('Test if searchEmployee(id, "lastName") returns the secund username of the queried id', () => {
    const actual = searchEmployee('1256-4', 'lastName');
    const expected = 'Bezos';

    expect(actual).toBe(expected);
  });

  it('Test if searchEmployee(id, "specialities") returns an array with all skills of the searched id', () => {
    const actual = searchEmployee('1256-4', 'specialities');
    expect(actual).toContain('Hooks', 'Context API', 'Tailwind CSS');
  });

  it('Test if an error with the message "ID não identificada" is returned when the ID does not exist', () => {
    expect(() => { searchEmployee('1256-8', 'specialities') }).toThrow();
  });

  it('Test the error message for non-existent ID', () => {
    expect(() => { searchEmployee('1256-8', 'specialities') }).toThrowError(new Error("ID não identificada"));
  });

  it('Test if throws an error when the information and ID are non-existent', () => {
    expect(() => { searchEmployee() }).toThrow();
  });
  
  it('Test the error message for nonexistent information', () => {
    expect(() => { searchEmployee('4678-2', 'shift') }).toThrowError(new Error("Informação indisponível"));
  });
});