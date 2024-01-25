const { Router } = require("express");
const validateRequest = require("../../middlewares/validateRequest");
const registrationValidationSchema = require("./user.validation");
const {
   createUser,

   getAllUser,
   getUserOnly,
   getSingleUser,
   updateUser,
   deleteUser,
} = require("./user.controller");
const authentication = require("../../middlewares/authentications");

const router = Router();

router.post("/sign_up", validateRequest(registrationValidationSchema), createUser);
router.get("/users", authentication("admin", "user"), getUserOnly);
router.get("/all-user", getAllUser);
router.get("/:id", authentication("admin", "user"), getSingleUser);
router.put("/:id", authentication("user"), updateUser);
router.delete("/:id", authentication("user", "admin"), deleteUser);

exports.userRoute = router;
