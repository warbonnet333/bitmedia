const arrayData = require("./users.json");
const Sequelize = require("sequelize");
const express = require("express");

const startingServer = function() {

    const app = express();
    const port = 8017;

    app.use(express.json());

    const sequelize = new Sequelize("db", "user", "pass", {
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
        "User", {
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
        }, {
            timestamps: false,
        }
    );

    sequelize.sync({
        logging: console.log,
    });

}

export default startingServer



// app.get("/", async(req, res) => {
//     try {
//         const allUsers = await User.findAll();
//         res.status(200).send(allUsers);
//     } catch (err) {
//         console.log(err);
//     }
// });

// app.post("/", async(req, res) => {
//     try {
//         const userToAdd = req.body;
//         await User.create(userToAdd);
//         res.status(201).send("Created new user!");
//     } catch (error) {
//         console.log(error);
//     }
// });

// app.delete("/", async(req, res) => {
//     try {
//         const idToDelete = req.body.id;
//         await User.destroy({
//             where: {
//                 id: idToDelete,
//             },
//         });
//         res.status(200).send("Deleted!!")
//     } catch (err) {
//         console.log(err);
//     }
// });

// // User.bulkCreate(arrayData.slice(0, 500), {
// //   validation: true,
// // }).then((res) => console.log(res));

// // const arr100 = arrayData.slice(0, 100);

// // // arr100.map((item) => {
// // //   const { id, first_name, last_name, email, gender, ip_address } = item;

// // // User.findAll().then((users) => {
// // //   const data = JSON.stringify(users, null, 4)
// // //   console.log(JSON.parse(data));
// // // });
// // User.findOne({
// //   where: {
// //     id: 99,
// //   },
// // }).then((res) => {
// //   const neededOne = JSON.stringify(res, null, 4);
// //   console.log("res: ", JSON.parse(neededOne));
// // });