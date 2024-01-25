const catchAsync = require("../../utils/catchAsync");
const sendResponse = require("../../utils/sendResponse");
const {
   createUserIntoDB,
   createAdminIntoDB,
   getAllUserFromDB,
   getUserFromDB,
   getAdminFromDB,
   getSingleUserFromDB,
   updateUserIntoDB,
   deleteUserFromDB,
} = require("./user.services");

const createUser = catchAsync(async (req, res) => {
   const result = await createUserIntoDB(req.body);

   sendResponse(res, {
      message: "User created successfully",
      result: result,
   });
});

const getUserOnly = catchAsync(async (req, res) => {
   const result = await getUserFromDB();

   sendResponse(res, {
      message: "Users retrieved successfully",
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
const getSingleUser = catchAsync(async (req, res) => {
   const result = await getSingleUserFromDB(req.params.id);

   sendResponse(res, {
      message: "User retrieved successfully",
      result: result,
   });
});
const updateUser = catchAsync(async (req, res) => {
   const result = await updateUserIntoDB(req.params.id, req.body);

   sendResponse(res, {
      message: "User update successfully",
      result: result,
   });
});
const deleteUser = catchAsync(async (req, res) => {
   const result = await deleteUserFromDB(req.params.id);

   sendResponse(res, {
      message: "User Deleted successfully",
      result: result,
   });
});

module.exports = {
   createUser,
   getAllUser,
   getUserOnly,
   getSingleUser,
   updateUser,
   deleteUser,
};
