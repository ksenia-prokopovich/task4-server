const UserService = require("../services/user");

const express = require("express");
const userRouter = express.Router();

userRouter.get("/", (req, res) => {
    UserService.findAll().then(items => res.send(items));
});

userRouter.get("/:id", (req, res) => {
    UserService.findOne(req.params.id).then(user => res.send(user));
});

userRouter.delete("/delete/:id", (req, res) => {
    UserService.destroy(req.params.id)
        .then(result => {
            res.sendStatus(result === 0 ? 404 : 204);
        });
});

userRouter.put("/create", (req, res) => {
    console.log(req.body.email)
    UserService.create(req.body)
        .then(result => {
            res.sendStatus(result === 0 ? 404 : 200);
        });
});

userRouter.post("/login", (req, res) => {
    UserService.signIn(req.body.email, req.body.password)
        .then(result => {
            if (result) {
                res.send({...result.dataValues, password: null});
            } else {
                res.status(500);
            }
        });
});

module.exports = userRouter;
