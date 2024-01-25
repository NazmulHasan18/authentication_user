const { Router } = require("express");
const validateRequest = require("../../middlewares/validateRequest");
const registrationValidationSchema = require("../user/user.validation");
const { createAdmin, getAdmins, updateAdmin, getSingleAdmins, deleteAdmin } = require("./admin.controller");
const authentication = require("../../middlewares/authentications");

const router = Router();

router.post("/sign_up", validateRequest(registrationValidationSchema), createAdmin);

router.get("/admins", authentication("admin"), getAdmins);
router.get("/:id", authentication("admin"), getSingleAdmins);
router.put("/:id", authentication("admin"), updateAdmin);
router.delete("/:id", authentication("admin"), deleteAdmin);

exports.adminRoute = router;
