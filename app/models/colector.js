module.exports = (sequelize, DataTypes) => {
  const Colector = sequelize.define('Colector', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  });

  return Colector;
}
