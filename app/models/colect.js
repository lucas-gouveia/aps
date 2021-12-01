module.exports = (sequelize, DataTypes) => {
  const Colect = sequelize.define('Colects', {
    user_id: DataTypes.INTEGER,
    colector_id: DataTypes.INTEGER,
    description: DataTypes.STRING,
    material: DataTypes.STRING,
    avenue: DataTypes.STRING,
    number: DataTypes.STRING,
    district: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING(2),
    postal_code: DataTypes.STRING(8),
    complement: DataTypes.STRING,
    conclused: DataTypes.BOOLEAN,
    canceled: DataTypes.BOOLEAN,
    acept: DataTypes.BOOLEAN,
  });

  return Colect;
}
