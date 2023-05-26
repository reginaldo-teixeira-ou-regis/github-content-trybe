let residents = {
  blockOne: [
    {
      name: "Luiza",
      lastname: "Guimarães",
      apartmentFloor: 10,
      apartment: 1005,
    },
    {
      name: "William",
      lastname: "Albuquerque",
      apartmentFloor: 5,
      apartment: 502,
    },
  ],
  blockTwo: [
    {
      name: "Murilo",
      lastname: "Ferraz",
      apartmentFloor: 8,
      apartment: 804,
    },
    {
      name: "Zoey",
      lastname: "Brooks",
      apartmentFloor: 1,
      apartment: 101,
    },
  ],
};

for (let index = 0; index < residents.blockOne.length; index += 1) {
  console.log(residents.blockOne[index].name + " " + residents.blockOne[index].lastname);
}

for (let index = 0; index < residents.blockTwo.length; index++) {
  console.log(residents.blockTwo[index].name + " " + residents.blockTwo[index].lastname);
}
