const catchAsync = require("../../utils/catchAsync");
const sendResponse = require("../../utils/sendResponse");
const { userLogin, changePasswordIntoDB } = require("./auth.services");

const signInUser = catchAsync(async (req, res) => {
   const result = await userLogin(req.body);

   sendResponse(res, {
      message: `${result.user.role} login successful`,
      result: result,
   });
});

const changePassword = catchAsync(async (req, res) => {
   const result = await changePasswordIntoDB(req.user._id, req.body);

   sendResponse(res, {
      message: `Password Change successfully`,
      result: result,
   });
});

module.exports = {
   signInUser,
   changePassword,
};
