import 'mocha';
import { expect } from 'chai';
import { getLetterGrades } from '../src/Students';

const disciplinesDict = {
  mathematics: 'matemática',
};

describe('Testing the function "getLetterGrades"', function () {
  describe('When the grade is greater than or equal to 0.9', function () {
    it('Returns "A"', function () {
      const discipline = { name: disciplinesDict.mathematics, grade: 0.9 };

      const {
        letterGrade,
      } = getLetterGrades(discipline);

      expect(letterGrade).to.be.equals('A');
    });
  });

  describe(
    'When the grade is greater than or equal to 0.8 and less than 0.9',
    function () {
      it('Returns "B"', function () {
        const discipline = { name: disciplinesDict.mathematics, grade: 0.8 };

        const {
          letterGrade,
        } = getLetterGrades(discipline);

        expect(letterGrade).to.be.equals('B');
      });
    });

  describe(
    'When the grade is greater than or equal to 0.7 and less than 0.8',
    function () {
      it('Returns "C"', function () {
        const discipline = { name: disciplinesDict.mathematics, grade: 0.7 };

        const {
          letterGrade,
        } = getLetterGrades(discipline);

        expect(letterGrade).to.be.equals('C');
      });
    });

  describe(
    'When the grade is greater than or equal to 0.6 and less than 0.7',
    function () {
      it('Returns "D"', function () {
        const discipline = { name: disciplinesDict.mathematics, grade: 0.6 };

        const {
          letterGrade,
        } = getLetterGrades(discipline);

        expect(letterGrade).to.be.equals('D');
      });
    });

  describe(
    'When the grade is greater than or equal to 0.1 and less than 0.6',
    function () {
      it('Returns "E"', function () {
        const discipline = { name: disciplinesDict.mathematics, grade: 0.1 };

        const {
          letterGrade,
        } = getLetterGrades(discipline);

        expect(letterGrade).to.be.equals('E');
      });
    });

  describe('When the grade is less than 0.1', function () {
    it('Returns "F"', function () {
      const discipline = { name: disciplinesDict.mathematics, grade: 0.05 };

      const {
        letterGrade,
      } = getLetterGrades(discipline);

      expect(letterGrade).to.be.equals('F');
    });
  });
});