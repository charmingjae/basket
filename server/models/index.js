// 20. 08. 08
// 차민재
// 서버와 연동되면서 테이블 역할 한다고 한다.

// Sequelize 설정
"use strict";

const path = require("path");
const Sequelize = require("sequelize");

// 원래 config/db.js 에서 데이터베이스 정보를 불러왔으나,
// js파일은 네트워크 상에서 데이터를 주고 받을 때에는 별로 효율적인 성능을 못 띈다고 함.
// 따라서 .js를 .json으로 변경

// path.join 모듈 설명
// '..'는 경로의 이동 값. 단순하게 ../config/db.json 이라고 생각하면 된다.
// 현재 index.js의 위치는 server/models/index.js 이므로, db.json을 가져오려면 ../config/db.json 으로 경로 설정을 해야한다.
const env = process.env.NODE_ENV || "development";

const config = require(path.join(__dirname, "..", "config", "db.json"))[env];
const db = {};

// const config에 db.json의 정보가 할당되어 있다.
let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config,
  {
    define: {
      charset: "utf8",
      collate: "utf8_general_ci",
    },
  }
);

// 왜 두 개인지 모르겠음
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.log("Unable to connect to the database: ", err);
  });

// Import 'user' table
db.User = require("./user")(sequelize, Sequelize);
// Import 'umbEtc' table
db.Umbetc = require("./umbEtc")(sequelize, Sequelize);
// import 'borrows' table
db.Borrow = require("./borrow")(sequelize, Sequelize);
// import 'overdues' table
db.Overdue = require("./overdue")(sequelize, Sequelize);

db.secret = "(9*)5$&!3%^0%^@@2$1!#5@2!4";
module.exports = db;
