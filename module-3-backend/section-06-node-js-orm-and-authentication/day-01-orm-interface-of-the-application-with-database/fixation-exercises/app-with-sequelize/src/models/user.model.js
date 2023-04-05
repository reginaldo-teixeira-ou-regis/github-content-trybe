const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNum: DataTypes.STRING,
  });

  (async () => {
    await sequelize.sync({ force: true });
    // Utilizando o build
    // const sara = User.build({
    //   fullName: 'Sara Silva Santos',
    //   email: 'sara.ss@trybe.com',
    //   phoneNum: 552199998888,
    // });
    // console.log(sara instanceof User); // true
    // console.log(sara.fullName); // "Sara Silva Santos"
    // await sara.save();
    // console.log('Pessoa salva no banco de dados!');

    // Criando com create
    const sara = await User.create({
      fullName: 'Sara Silva Santos',
      email: 'sara.ss@trybe.com',
      phoneNum: 552199998888,
    });
    console.log(sara instanceof User); // true
    console.log(sara.name); // "Sara Silva Santos"

    // update
    const jane = await User.create({
        fullName: "Jane Doe",
        email: "jane.doe@trybe.com",
        phoneNum: 552199998888,
      });
    jane.email = "ada.doe@trybe.com";
    await jane.update({ fullName: "Ada Joe" });
    // O banco de dados agora tem "Ada Joe" para o nome, mas o email ainda é "jane.doe@trybe.com".
    await jane.save();
    // O banco de dados agora tem "ada.doe@trybe.com" para o email.
    
    // Excluindo informações do banco de dados
    const mario = await User.create({ fullName: "Mario Bors" });
    console.log(mario.fullName); // "Mario Bors"
    await mario.destroy();
  })();

  return User;
};

module.exports = UserModel;