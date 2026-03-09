const Quizzes = function (sequelize, DataTypes) {
  const model = sequelize.define(
    "Quizzes",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      question: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      answer: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING(20),
        allowNull: false,
        defaultValue: "subjective",
      },
      category: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
    },
    {
      timestamps: true,
      freezeTableName: true,
    },
  );

  return model;
};

module.exports = Quizzes;
