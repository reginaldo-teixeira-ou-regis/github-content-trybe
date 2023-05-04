import 'mocha';
import { expect } from "chai";
import { approvedStudents } from "../src/Students";

const disciplinesDict = {
  mathematics: 'matemática',
  history: 'história',
};

describe('Testing the function "approvedStudents"', function () {
  const APPROVAL_GRADE = 0.7;

  describe('When all grades are greater than the passing criteria', function () {
    it('Returns "true"', function () {
      const disciplines = [
        { name: disciplinesDict.mathematics, grade: 0.8 },
        { name: disciplinesDict.history, grade: 0.9 },
      ];
      const school = {
        name: "School",
        approvalGrade: APPROVAL_GRADE
      };

      const result = approvedStudents({ name: "Student", disciplines, school });

      expect(result).to.be.equal(true);
    });
  });

  describe('When all grades are less than the passing criteria', function () {
    it('Returns "false"', function () {
      const disciplines = [
        { name: disciplinesDict.mathematics, grade: 0.1 },
        { name: disciplinesDict.history, grade: 0.2 },
      ];
      const school = {
        name: "School",
        approvalGrade: APPROVAL_GRADE
      };

      const result = approvedStudents({ name: "Student", disciplines, school });

      expect(result).to.be.equal(false);
    });
  });

  describe(
    'When part of the grades are lower than the passing criteria', function () {
    it('Returns "false"', function () {
      const disciplines = [
        { name: disciplinesDict.mathematics, grade: 0.5 },
        { name: disciplinesDict.history, grade: 0.9 },
      ];
      const school = {
        name: "School",
        approvalGrade: APPROVAL_GRADE
      };

      const result = approvedStudents({ name: "Student", disciplines, school });

      expect(result).to.be.equal(false);
    });
  });
});
