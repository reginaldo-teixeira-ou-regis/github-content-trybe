import 'mocha';
import { expect } from "chai";
import { approvedStudents } from "../src/Students";

const disciplinesDict = {
  mathematics: 'matemática',
  history: 'história',
};

describe('Testing the function "approvedStudents"', function () {
  describe('When all grades are greater than 0.7', function () {
    it('Returns "true"', function () {
      const disciplines = [
        { name: disciplinesDict.mathematics, grade: 0.8 },
        { name: disciplinesDict.history, grade: 0.9 },
      ];
      const student = {
        name: "test",
        disciplines: disciplines
      };
      const result = approvedStudents(student);

      expect(result).to.be.equal(true);
    });
  });

  describe('When all grades are less than 0.7', function () {
    it('Returns "false"', function () {
      const disciplines = [
        { name: disciplinesDict.mathematics, grade: 0.1 },
        { name: disciplinesDict.history, grade: 0.2 },
      ];
      const student = {
        name: "test",
        disciplines: disciplines
      };
      const result = approvedStudents(student);

      expect(result).to.be.equal(false);
    });
  });

  describe('When part of the grades are less than 0.7', function () {
    it('Returns "false"', function () {
      const disciplines = [
        { name: disciplinesDict.mathematics, grade: 0.5 },
        { name: disciplinesDict.history, grade: 0.9 },
      ];
      const student = {
        name: "test",
        disciplines: disciplines
      };
      const result = approvedStudents(student);

      expect(result).to.be.equal(false);
    });
  });
});