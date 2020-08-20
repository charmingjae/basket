const sequelize = require("./models").sequelize;

const {
  User,
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
  },
};
