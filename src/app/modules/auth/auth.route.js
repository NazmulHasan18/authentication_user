const { Router } = require("express");
const validateRequest = require("../../middlewares/validateRequest");

const { signInUser, changePassword } = require("./auth.controller");
const { loginValidator, changePassValidator } = require("./auth.validate");
const authentication = require("../../middlewares/authentications");

const router = Router();

router.post("/login", validateRequest(loginValidator), signInUser);
router.post("/change-password", validateRequest(changePassValidator), authentication(), changePassword);

exports.authRoute = router;
