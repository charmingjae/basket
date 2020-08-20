// Controller 설정

// npm install path aws-sdk
// path : 디렉토리 및 파일의 경로를 연결해주는 모듈
// aws-sdk : AWS에 대한 서비스(EC2, S3, DB) 등에 대한 서비스를 객체로 제공

const path = require("path");
const model = require("./model");

const AWS = require("aws-sdk");

const hashing = require(path.join(__dirname, "config", "hashing.js"));

const salt = require(path.join(__dirname, "config", "db.json")).salt;

AWS.config.loadFromPath(path.join(__dirname, "config", "awsConfig.json"));

module.exports = {
  api: {
    getData: (req, res) => {
      model.api.getData((data) => {
        return res.send(data);
      });
    },
    addData: (req, res) => {},
    sendPw: (req, res) => {
      const body = req.body;
      const hash = hashing.enc(body.id, body.password, salt);

      console.log("bodyId = ", body.id);
      console.log("bodyPW = ", body.password);

      model.api.searchInfo(body, hash, (result) => {
        var obj = {};
        if (result[0]) {
          obj["suc"] = true;
          obj["msg"] = "로그인 성공";
        } else {
          obj["suc"] = false;
          obj["msg"] = "로그인 실패";
        }
        res.send(obj);
      });

      console.log("1. salt 값 : ", salt);
      console.log("3. hash 결과 : ", hash);
    },
  },
};
