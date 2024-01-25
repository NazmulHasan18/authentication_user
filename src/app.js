const express = require("express");
const cors = require("cors");
const { userRoute } = require("./app/modules/user/user.route");
const { authRoute } = require("./app/modules/auth/auth.route");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", userRoute);
app.use("/api", authRoute);

app.get("/", (req, res) => {
   res.send("Hello World!");
});
// global error handler
app.use((error, req, res, next) => {
   res.status(400).json({
      success: false,
      message: error.message,
      error: error,
   });
});
//  invalid route error handler
app.use((req, res, next) => {
   res.status(400).json({
      success: false,
      message: "Invalid Api",
      error: "Something went wrong please try again.",
   });
});
module.exports = app;
