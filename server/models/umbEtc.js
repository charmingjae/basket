// Table Name : umbEtc

module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "umbetc", // 테이블의 이름을 지정합니다.
    {
      etc: {
        type: DataTypes.INTEGER(255),
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
