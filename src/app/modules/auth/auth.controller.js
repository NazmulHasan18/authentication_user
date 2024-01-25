const catchAsync = require("../../utils/catchAsync");
const sendResponse = require("../../utils/sendResponse");
const { userLogin } = require("./auth.services");

const signInUser = catchAsync(async (req, res) => {
   const result = await userLogin(req.body);

   sendResponse(res, {
      message: `${result.role} login successful`,
      result: result,
   });
});

module.exports = {
   signInUser,
};
