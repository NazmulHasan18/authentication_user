const { Router } = require("express");
const validateRequest = require("../../middlewares/validateRequest");
const loginValidator = require("./auth.validate");
const { signInUser } = require("./auth.controller");

const router = Router();

router.post("/login", validateRequest(loginValidator), signInUser);

exports.authRoute = router;
