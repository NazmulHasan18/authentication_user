const config = require("../../config");
const User = require("../user/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userLogin = async (data) => {
   const user = await User.findOne({ email: data.email });
   if (!user) {
      throw new Error(`${data.email} does not exists. Please register`);
   }

   const passMatched = await bcrypt.compare(data.password, user.password);
   if (!passMatched) {
      throw new Error("Wrong password.You are unauthorized user.");
   }

   const token = jwt.sign(
      {
         _id: user._id,
         role: user.role,
      },
      config.jwt_access_secret,
      { expiresIn: "2h" }
   );

   user.password = "";

   return { user, token };
};

module.exports = {
   userLogin,
};
