// Table Name : borrow

// Table names : borrows

module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "borrow", // 테이블의 이름을 지정합니다.
    {
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      brDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      rtDate: {
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
