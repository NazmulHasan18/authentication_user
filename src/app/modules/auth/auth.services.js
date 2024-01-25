const config = require("../../config");
const User = require("../user/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userLogin = async (data) => {
   try {
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
   } catch (error) {
      throw new Error(error);
   }
};

const changePasswordIntoDB = async (userId, data) => {
   try {
      const user = await User.findOne({ _id: userId, isDeleted: false });
      if (!user) {
         throw new Error("User not found");
      }

      const isMatched = await bcrypt.compare(data.old_password, user.password);
      if (!isMatched) {
         throw new Error("Password don't matched.");
      }

      const newHashPassword = await bcrypt.hash(data.new_password, Number(config.bcrypt_salt_rounds));

      const updatePass = await User.findByIdAndUpdate(userId, { password: newHashPassword });

      return null;
   } catch (error) {
      throw new Error(error);
   }
};

module.exports = {
   userLogin,
   changePasswordIntoDB,
};
