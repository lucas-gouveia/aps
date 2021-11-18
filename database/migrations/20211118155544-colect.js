module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Colects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
          key: "id"
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
      description: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      material: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      avenue: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      number: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      district: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      city: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      state: {
        allowNull: false,
        type: DataTypes.STRING(2),
      },
      postal_code: {
        allowNull: false,
        type: DataTypes.STRING(8),
      },
      complement: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      conclused: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      canceled: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      colector_id: {
        allowNull: true,
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
          key: "id"
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('Colects');
  }
};
