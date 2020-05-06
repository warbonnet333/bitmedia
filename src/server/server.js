const usersData = require("./users.json");
// const statsData = require("./users_statistic.json");
const { Sequelize, DataTypes } = require("sequelize");
const express = require("express");
const cors = require("cors");

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

const User = sequelize.define(
  "User",
  {
    id: { type: Sequelize.NUMBER, allowNull: false, primaryKey: true },
    first_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    last_name: {
      type: Sequelize.STRING,
      // allowNull defaults to true
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    gender: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    ip_address: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

// const Click = sequelize.define(
//   "Click",
//   {
//     user_id: {
//       type: Sequelize.NUMBER,
//       allowNull: false,
//       type: DataTypes.INTEGER,
//       // references: {
//       //   model: User,
//       //   key: "id",
//       // },
//     },
//     date: { type: Sequelize.NUMBER, allowNull: true },
//     page_views: { type: Sequelize.NUMBER, allowNull: true },
//     clicks: { type: Sequelize.NUMBER, allowNull: true },
//     id: {
//       type: DataTypes.UUID,
//       defaultValue: Sequelize.UUIDV4,
//       autoIncrement: true,
//       primaryKey: true,
//       field: "id",
//       unique: true,
//     },
//   },
//   {
//     timestamps: false,
//   }
// );

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
