const catchAsync = require("../../utils/catchAsync");
const sendResponse = require("../../utils/sendResponse");
const {
   createUserIntoDB,
   createAdminIntoDB,
   getAllUserFromDB,
   getUserFromDB,
   getAdminFromDB,
} = require("./user.services");

const createAdmin = catchAsync(async (req, res) => {
   const result = await createAdminIntoDB(req.body);

   sendResponse(res, {
      message: "Admin created successfully",
      result: result,
   });
});
const createUser = catchAsync(async (req, res) => {
   const result = await createUserIntoDB(req.body);

   sendResponse(res, {
      message: "User created successfully",
      result: result,
   });
});
const getAllUser = catchAsync(async (req, res) => {
   const result = await getAllUserFromDB();

   sendResponse(res, {
      message: "All user retrieved successfully",
      result: result,
   });
});
const getUsers = catchAsync(async (req, res) => {
   const result = await getUserFromDB();

   sendResponse(res, {
      message: "Users retrieved successfully",
      result: result,
   });
});
const getAdmins = catchAsync(async (req, res) => {
   const result = await getAdminFromDB();

   sendResponse(res, {
      message: "Admin retrieved successfully",
      result: result,
   });
});

module.exports = {
   createAdmin,
   createUser,
   getAllUser,
   getUsers,
   getAdmins,
};
