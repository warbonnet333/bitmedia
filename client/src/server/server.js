const userModel = require("./models/User");
const usersData = require("./users.json");
const { Sequelize } = require("sequelize");
const express = require("express");
const cors = require("cors");
// const statsData = require("./users_statistic.json");
// const clickModel = require("./models/Click")

let app;
let port;
let sequelize;

app = express();
port = 8017;

app.use(express.json());
app.use(cors());

sequelize = new Sequelize("db", "user", "pass", {
  host: "localhost",
  dialect: "sqlite",
  storage: "db.sqlite",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection to database established successfully.");
  })
  .catch((err) => {
    console.log("Unable to connect to the database: ", err);
  });

app.listen(port, () => {
  console.log("App is listening on port: ", port);
});

const User = sequelize.define("User", userModel, {
  timestamps: false,
});

// const Click = sequelize.define("Click", clickModel, {
//   timestamps: false,
// });

sequelize.sync({
  logging: console.log,
});

// Click.bulkCreate(statsData)
//   .then((stats) => console.log("good"))
//   .catch((err) => console.log(err));

User.bulkCreate(usersData)
  .then((users) => console.log("good"))
  .catch((err) => console.log(err));

// User.hasMany(Click, { foreignKey: "user_id" });

// Click.belongsTo(User, {
//   foreignKey: "user_id",
// });

app.get("/users", async (req, res) => {
  const { page } = req.query;

  const offset = (page - 1) * 25;
  const limit = 25;

  try {
    const allUsers = await User.findAll({
      offset,
      limit,
      // include: Click,
    });
    res.status(200).send(allUsers);
  } catch (err) {
    console.log(err);
  }
});

// app.get("/users/stats/", async (req, res) => {
//   try {
//     const result = await Click.findAll();
//     console.log(result);
//     res.status(200).send(result);
//   } catch (error) {
//     console.log(error);
//   }
// });
