import 'mocha';
import { expect } from "chai";
import { percentageGradesIntoLetters } from "../src/Students";

const disciplinesDict = {
  mathematics: 'matemática',
};

describe('Testing the function "percentageGradesIntoLetters"', function () {
  describe('When the grade is greater than or equal to 0.9', function () {
    it('Returns "A"', function () {
      const student = {
        name: 'Lee',
        disciplines: [
          { name: disciplinesDict.mathematics, grade: 0.9 },
        ],
      };

      const {
        disciplines: [{ letterGrade }],
      } = percentageGradesIntoLetters(student);

      expect(letterGrade).to.be.equals('A');
    });
  });

  describe(
    'When the grade is greater than or equal to 0.8 and less than 0.9',
    function () {
      it('Returns "B"', function () {
        const student = {
          name: 'Lee',
          disciplines: [
            { name: disciplinesDict.mathematics, grade: 0.8 },
          ],
        };

        const {
          disciplines: [{ letterGrade }],
        } = percentageGradesIntoLetters(student);

        expect(letterGrade).to.be.equals('B');
      });
    });

  describe(
    'When the grade is greater than or equal to 0.7 and less than 0.8',
    function () {
    it('Returns "C"', function () {
      const student = {
        name: 'Lee',
        disciplines: [
          { name: disciplinesDict.mathematics, grade: 0.7 },
        ],
      };

      const {
        disciplines: [{ letterGrade }],
      } = percentageGradesIntoLetters(student);

      expect(letterGrade).to.be.equals('C');
    });
  });

  describe(
    'When the grade is greater than or equal to 0.6 and less than 0.7',
    function () {
    it('Returns "D"', function () {
      const student = {
        name: 'Lee',
        disciplines: [
          { name: disciplinesDict.mathematics, grade: 0.6 },
        ],
      };

      const {
        disciplines: [{ letterGrade }],
      } = percentageGradesIntoLetters(student);

      expect(letterGrade).to.be.equals('D');
    });
  });

  describe(
    'When the grade is greater than or equal to 0.1 and less than 0.6',
    function () {
    it('Returns "E"', function () {
      const student = {
        name: 'Lee',
        disciplines: [
          { name: disciplinesDict.mathematics, grade: 0.1 },
        ],
      };

      const {
        disciplines: [{ letterGrade }],
      } = percentageGradesIntoLetters(student);

      expect(letterGrade).to.be.equals('E');
    });
  });

  describe('When the grade is less than 0.1', function () {
    it('Returns "F"', function () {
      const student = {
        name: 'Lee',
        disciplines: [
          { name: 'matemática', grade: 0.05 },
        ],
      };

      const {
        disciplines: [{ letterGrade }],
      } = percentageGradesIntoLetters(student);

      expect(letterGrade).to.be.equals('F');
    });
  });
});