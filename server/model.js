const sequelize = require("./models").sequelize;

const moment = require("moment");
require("moment-timezone");
moment.tz.setDefault("Asia/Seoul");

const now_date = moment().format("YYYY-MM-DD HH:mm:ss");
const return_date = moment().add(5, "days").format("YYYY-MM-DD HH:mm:ss");
const finish_overdue = moment().add(1, "days").format("YYYY-MM-DD HH:mm:ss");

const {
  User,
  Umbetc,
  Borrow,
  Overdue,
  Sequelize: { Op },
} = require("./models");
sequelize.query("SET NAMES utf8");

module.exports = {
  api: {
    getData: (callback) => {
      User.findAll()
        .then((result) => {
          callback(result);
        })
        .catch((err) => {
          throw err;
        });
    },
    searchInfo: (body, hash, callback) => {
      User.findAll({
        where: { [Op.and]: [{ userid: body.id, password: hash }] },
      })
        .then((data) => {
          callback(data);
        })
        .catch((err) => {
          throw err;
        });
    },
    // 우산 개수 get api
    getEtc: (callback) => {
      Umbetc.findAll()
        .then((result) => {
          callback(result);
        })
        .catch((err) => {
          throw err;
        });
    },
    etc: (body, callback) => {
      Umbetc.update(
        { etc: body.umbEtc },
        {
          where: { id: 1 },
        }
      );
    },
    borrow: (body, callback) => {
      console.log("넘어온 우산 개수 : ", body.umbEtc[0].etc);

      // 대여 중복 처리
      Borrow.count({
        where: { name: body.name },
      }).then((cnt) => {
        if (cnt > 0) {
          callback("Borrowed");
        } else {
          // 대여 중 아니면 연체 중인지 검사
          Overdue.count({
            where: { name: body.name },
          }).then((cnt) => {
            if (cnt > 0) {
              callback("Overdued");
            } else {
              Borrow.create({
                name: body.name,
                brDate: now_date,
                rtDate: return_date,
              })
                .then(() => {
                  // 대여 명단에 등록 성공 시
                  // 우산 개수 하나 감소
                  Umbetc.update(
                    { etc: body.umbEtc[0].etc - 1 },
                    {
                      where: { id: 1 },
                    }
                  );
                })
                .then(() => {
                  callback(true);
                })
                .catch((err) => {
                  throw err;
                });
            }
          });
        }
      });
    },
    getMyinfo: (body, callback) => {
      console.log("model: body.name : ", body.name);
      Borrow.findAll({ where: { name: body.name } })
        .then((data) => {
          callback(data);
        })
        .catch((err) => {
          throw err;
        });
    },
    getBorrowlist: (callback) => {
      Borrow.findAll({ order: [["id", "DESC"]] })
        .then((result) => {
          callback(result);
        })
        .catch((err) => {
          throw err;
        });
    },
    returnbook: (body, callback) => {
      console.log("body", body);
      Borrow.destroy({ where: { id: body } })
        .then((result) => {
          callback(result);
        })
        .catch((err) => {
          throw err;
        });
    },
    getOverduelist: (callback) => {
      Overdue.findAll({ order: [["id", "DESC"]] })
        .then((result) => {
          callback(result);
        })
        .catch((err) => {
          throw err;
        });
    },
    finoverdue: (body, callback) => {
      console.log("body", body);
      Overdue.destroy({ where: { id: body } })
        .then((result) => {
          callback(result);
        })
        .catch((err) => {
          throw err;
        });
    },
    myoverdue: (body, callback) => {
      console.log("model: body.name : ", body.name);
      Overdue.findAll({ where: { name: body.name } })
        .then((data) => {
          callback(data);
        })
        .catch((err) => {
          throw err;
        });
    },
  },
};
