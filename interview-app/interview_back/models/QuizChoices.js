// 객관식 퀴즈용
const QuizChoices = function (sequelize, DataTypes) {
  const model = sequelize.define(
    "QuizChoices",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      quizId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      isCorrect: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    },
  );

  return model;
};

module.exports = QuizChoices;
