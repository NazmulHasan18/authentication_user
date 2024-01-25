const sendResponse = (res, data) => {
   return res.status(200).json({
      success: true,
      message: data.message,
      result: data.result,
   });
};
module.exports = sendResponse;
