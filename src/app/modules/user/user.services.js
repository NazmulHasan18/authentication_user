const User = require("./user.model");

const createAdminIntoDB = async (data) => {
   try {
      if (data.password !== data.confirm_password) {
         throw new Error("Password Do not matched.");
      }
      data.role = "admin";
      const isExist = await User.findOne({ email: data.email, username: data.username });
      if (isExist) {
         throw new Error(`${data.username} username or ${data.email} already exists`);
      }

      const result = await User.create(data);
      return result;
   } catch (error) {
      throw new Error(error);
   }
};
const createUserIntoDB = async (data) => {
   try {
      if (data.password !== data.confirm_password) {
         throw new Error("Password Do not matched.");
      }
      const isExist = await User.findOne({ email: data.email, username: data.username });
      if (isExist) {
         throw new Error(`${data.username} username or ${data.email} already exists`);
      }
      const result = await User.create(data);
      return result;
   } catch (error) {
      throw new Error(error);
   }
};

const getAllUserFromDB = async () => {
   try {
      const result = await User.find({ isDeleted: false });
      return result;
   } catch (error) {
      throw new Error(error);
   }
};
const getUserFromDB = async () => {
   try {
      const result = await User.find({ role: "user", isDeleted: false });
      return result;
   } catch (error) {
      throw new Error(error);
   }
};
const getAdminFromDB = async () => {
   try {
      const result = await User.find({ role: "admin", isDeleted: false });
      return result;
   } catch (error) {
      throw new Error(error);
   }
};

module.exports = {
   createAdminIntoDB,
   createUserIntoDB,
   getAllUserFromDB,
   getUserFromDB,
   getAdminFromDB,
};
