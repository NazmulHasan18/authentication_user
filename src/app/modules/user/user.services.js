const User = require("./user.model");

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
const getSingleUserFromDB = async (id) => {
   try {
      const result = await User.findOne({ _id: id, role: "user", isDeleted: false });
      return result;
   } catch (error) {
      throw new Error(error);
   }
};
const updateUserIntoDB = async (id, data) => {
   try {
      const { name, ...rest } = data;
      console.log(name, rest);
      let result = await User.findOneAndUpdate({ _id: id, role: "user", isDeleted: false }, rest, {
         new: true,
         runValidators: true,
      });

      if (name && Object.keys(name).length) {
         result = await User.findOneAndUpdate(
            { _id: id, role: "user", isDeleted: false },
            {
               $set: {
                  "name.first_name": name.first_name,
                  "name.last_name": name.last_name,
               },
            },
            {
               new: true,
               runValidators: true,
            }
         );
      }
      result.password = "";

      return result;
   } catch (error) {
      throw new Error(error);
   }
};
const deleteUserFromDB = async (id) => {
   try {
      const result = await User.findOneAndUpdate({ _id: id, role: "user" }, { isDeleted: true });
      return null;
   } catch (error) {
      throw new Error(error);
   }
};

module.exports = {
   createUserIntoDB,
   getAllUserFromDB,
   getUserFromDB,
   getSingleUserFromDB,
   updateUserIntoDB,
   deleteUserFromDB,
};
