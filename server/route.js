// 여러 개의 API 주소를 담는 라우터 생성

const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.post("/send/pw", controller.api.sendPw);

// 블로그 에서는 modify, delete, get 까지 했으나, 현재 add 기능만 필요하여 add만 추가.
router.get("/get/data", controller.api.getData);
router.post("/add/data");

module.exports = router;
