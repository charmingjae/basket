// Table Name : user

module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "user", // 테이블의 이름을 지정합니다.
    {
      userid: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci",
      timestamps: false,
    }
  );
};
