const Joi = require("joi");

const loginValidator = Joi.object({
   email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required(),
   password: Joi.string().required(),
});

const changePassValidator = Joi.object({
   old_password: Joi.string().required(),
   new_password: Joi.string()
      .pattern(new RegExp(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/))
      .message(
         "Password must contain a uppercase,lowercase,number, and special characters and length will be 8 to 16."
      )
      .required(),
});

module.exports = {
   loginValidator,
   changePassValidator,
};
