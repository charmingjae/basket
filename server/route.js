// 여러 개의 API 주소를 담는 라우터 생성

const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.post("/send/pw", controller.api.sendPw);

// 블로그 에서는 modify, delete, get 까지 했으나, 현재 add 기능만 필요하여 add만 추가.
router.get("/get/data", controller.api.getData);

// backup
router.post("/add/data");

// router.post("/add/data", controller.add.data);

// 우산 개수 가져오는 router
router.get("/get/etc", controller.api.getEtc);

router.post("/update/etc", controller.api.etc);

router.post("/add/borrow", controller.api.borrow);

router.post("/get/myinfo", controller.api.getMyinfo);

router.get("/get/borrowlist", controller.api.getBorrowlist);

router.post("/post/returnbook", controller.api.returnbook);

router.get("/get/overduelist", controller.api.getOverduelist);

router.post("/post/finoverdue", controller.api.finoverdue);

router.post("/get/myoverdue", controller.api.myoverdue);

module.exports = router;
