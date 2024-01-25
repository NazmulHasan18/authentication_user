const { Router } = require("express");
const validateRequest = require("../../middlewares/validateRequest");
const registrationValidationSchema = require("./user.validation");
const { createAdmin, createUser, getAdmins, getUsers, getAllUser } = require("./user.controller");

const router = Router();

router.post("/admin/sign_up", validateRequest(registrationValidationSchema), createAdmin);
router.post("/user/sign_up", validateRequest(registrationValidationSchema), createUser);
router.get("/admins", getAdmins);
router.get("/users", getUsers);
router.get("/all-user", getAllUser);

exports.userRoute = router;
