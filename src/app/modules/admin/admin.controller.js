const catchAsync = require("../../utils/catchAsync");
const sendResponse = require("../../utils/sendResponse");
const {
   createAdminIntoDB,
   getAllAdminFromDB,
   getSingleAdminFromDB,
   updateAdminIntoDB,
   deleteAdminFromDB,
} = require("./admin.services");

const createAdmin = catchAsync(async (req, res) => {
   const result = await createAdminIntoDB(req.body);

   sendResponse(res, {
      message: "Admin created successfully",
      result: result,
   });
});
const getAdmins = catchAsync(async (req, res) => {
   const result = await getAllAdminFromDB();

   sendResponse(res, {
      message: "All Admin retrieved successfully",
      result: result,
   });
});
const getSingleAdmins = catchAsync(async (req, res) => {
   const result = await getSingleAdminFromDB(req.params.id);

   sendResponse(res, {
      message: "Admin retrieved successfully",
      result: result,
   });
});
const updateAdmin = catchAsync(async (req, res) => {
   const result = await updateAdminIntoDB(req.params.id, req.body);

   sendResponse(res, {
      message: "Admin Update successfully",
      result: result,
   });
});
const deleteAdmin = catchAsync(async (req, res) => {
   const result = await deleteAdminFromDB(req.params.id);

   sendResponse(res, {
      message: "Admin Deleted successfully",
      result: result,
   });
});

module.exports = {
   createAdmin,
   getAdmins,
   getSingleAdmins,
   updateAdmin,
   deleteAdmin,
};
