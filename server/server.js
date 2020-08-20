const express = require("express");

const cors = require("cors");

const app = express();

app.use(cors());

// Sequelize 연동
const sequelize = require("./models").sequelize;

// router.js 파일 접근
const router = require("./route");

// npm install body-parser
// 클라이언트가 보내는 데이터를 읽기 위한 라이브러리
const bodyParser = require("body-parser");

sequelize.sync();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// router.js 접근
app.use("/", router);

const {
  User,
  Sequelize: { Op },
} = require("./models");
sequelize.query("SET NAMES utf8;");

// 클라이언트로부터 받아오는 값을 조회할 수 있는 API 작성

app.post("/add/data", (req, res) => {
  console.log(req.body);

  User.create({
    userid: req.body.dataUserId,
    password: req.body.dataPassword,
    name: req.body.dataName,
  })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
});

// 회원 정보
app.get("/get/data", (req, res) => {
  User.findAll()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      throw err;
    });
});

// 로그인 처리

// app.post("/send/pw");

app.post("/send/pw", (req, res) => {
  try {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    res.header(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization, Content-Length, X-Requested-With"
    );

    console.log(res.data.id);
    console.log(res.data.pw);
    console.log("Post Test!!");
    res.send("Test");
  } catch (err) {
    console.log(err);
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server On : http://localhost:${PORT}/`);
});
