// Table names : overdues

module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "overdue", // 테이블의 이름을 지정합니다.
    {
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      ovDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      finDate: {
        type: DataTypes.DATE,
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
