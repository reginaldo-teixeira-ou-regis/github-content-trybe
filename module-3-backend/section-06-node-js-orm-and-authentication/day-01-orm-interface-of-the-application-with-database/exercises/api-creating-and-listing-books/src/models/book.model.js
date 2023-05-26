module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER,
    publisher: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });

  (async () => {
    await sequelize.sync({ force: true });
    const jurassicPark = Book.build({
      title: 'Jurassic Park',
      author: "Michael Crichton",
      pageQuantity: 528,
      publisher: "20 de novembro de 1990",
    });
    console.log(jurassicPark instanceof Book); // true
    console.log(jurassicPark.title); // "Jurassic Park"
    await jurassicPark.save();
    console.log('Pessoa salva no banco de dados!');

    const senhorDosAneis = await Book.create({
      title: "O Senhor dos Anéis",
      author: "J. R. R. Tolkien",
      pageQuantity: 1200,
      publisher: "29 de julho de 1954",
    });
    console.log(senhorDosAneis instanceof Book); // true
    console.log(senhorDosAneis.title); // "O Senhor dos Anéis"

    const hobbit = await Book.create({
      title: "O Hobbit",
      author: "Tolkien",
      pageQuantity: 304,
      publisher: "21 de setembro de 1937",
      });
    hobbit.author = "J. R. R. Tolkien";
    await hobbit.update({ title: "O Hobbit" });
    await hobbit.save();
    
    
    const harryPotter = await Book.create({ title: "Harry Potter" });
    console.log(harryPotter.title); // "Harry Potter"
    await harryPotter.destroy();
  })();

  return Book;
};