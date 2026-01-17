module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "Users",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },

      userid: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
      },

      password: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },

      username: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
    },
    {
      tableName: "users",
      timestamps: false,
    },
  );
};
