const express = require("express");

const app = express();

// Sequelize 연동
const sequelize = require("./models").sequelize;

// npm install body-parser
// 클라이언트가 보내는 데이터를 읽기 위한 라이브러리
const bodyParser = require("body-parser");

sequelize.sync();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const {
  User,
  Sequelize: { Op },
} = require("./models");
sequelize.query("SET NAMES utf8;");

// 클라이언트로부터 받아오는 값을 조회할 수 있는 API 작성

app.post("/add/data", (req, res) => {
  console.log(req.body);

  User.create({
    name: req.body.data,
  })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server On : http://localhost:${PORT}/`);
});

////////////////////
// 20. 08. 08
// 차민재
////////////////////
//하단 백업
// const db = require("./config/db");

// app.get("/api/host", (req, res) => {
//   res.send({ host: "root" });
// });

// app.get("/api/test", (req, res) => {
//   db.query("select * from test", (err, data) => {
//     if (!err) {
//       res.send(data);
//     } else {
//       console.log(err);
//       res.send(err);
//     }
//   });
// });

// app.listen(PORT, () => {
//   console.log(`Server On : http://localhost:${PORT}/`);
// });
