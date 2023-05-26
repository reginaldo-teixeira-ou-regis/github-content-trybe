const techList = require("./script.js");

describe("Test the function techList", () => {
  it("Test if the function techList is defined", () => {
    expect(techList).toBeDefined();
  });

  it("Test if techList is a function", () => {
    expect(typeof techList).toBe("function");
  });

  it("List with 5 technologies should return an ordered list of objects", () => {
    expect(
      techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas")
    ).toEqual([
      {
        tech: "CSS",
        name: "Lucas",
      },
      {
        tech: "HTML",
        name: "Lucas",
      },
      {
        tech: "JavaScript",
        name: "Lucas",
      },
      {
        tech: "Jest",
        name: "Lucas",
      },
      {
        tech: "React",
        name: "Lucas",
      },
    ]);
  });

  it('List with 0 technologies should return a message of error "Empty!"', () => {
    expect(techList([], "Lucas")).toBe("Vazio!");
  });
});

module.exports = techList;