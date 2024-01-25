const config = require("../config");
const User = require("../modules/user/user.model");
const catchAsync = require("../utils/catchAsync");
const jwt = require("jsonwebtoken");

const authentication = (...requiredRoles) => {
   return catchAsync(async (req, res, next) => {
      const token = req.headers.authorization;

      if (!token) {
         throw new Error(`No authorization header.`);
      }
      const decoded = jwt.verify(token, config.jwt_access_secret);
      const { _id, role } = decoded;
      const user = await User.findById(_id);
      if (!user) {
         throw new Error("No user found for token.");
      }
      const isDeleted = user.isDeleted;
      if (isDeleted) {
         throw new Error("Your account has been deleted.");
      }
      if (requiredRoles.length > 0 && !requiredRoles.includes(role)) {
         throw new Error("You are not authorized!");
      }

      req.user = decoded;

      next();
   });
};

module.exports = authentication;
