const validateRequest = (schema) => {
   return async (req, res, next) => {
      try {
         await schema.validateAsync(req.body);

         next();
      } catch (error) {
         res.status(404).json({
            success: false,
            message: error.message || "Something went wrong, please try again.",
            error,
         });
      }
   };
};

module.exports = validateRequest;
