const express = require("express");

const userRouter = express.Router();

const userController = require("../controllers/user");

/**
 * @description Mail routes resources
 *
 */

userRouter.post("/signup", userController.createUser);
userRouter.post("/login", userController.loginUser);

module.exports = userRouter;
