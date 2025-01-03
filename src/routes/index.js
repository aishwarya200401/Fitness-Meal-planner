const userRouter = require("./user");

const apiRoutes = (app) => {
  app.use("/api/v1", userRouter);
};

module.exports = apiRoutes;
