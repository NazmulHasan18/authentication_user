const Joi = require("joi");

const registrationValidationSchema = Joi.object({
   name: {
      first_name: Joi.string().required(),
      last_name: Joi.string().required(),
   },
   username: Joi.string()
      .regex(/^[a-z]+$/)
      .message("Username must contain only lowercase letters")
      .alphanum()
      .min(3)
      .message("must be at least 3 to 30 characters and lowercase")
      .max(30)
      .required(),
   email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required(),
   password: Joi.string()
      .pattern(new RegExp(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/))
      .message(
         "Password must contain a uppercase,lowercase,number, and special characters and length will be 8 to 16."
      )
      .required(),
   confirm_password: Joi.string()
      .pattern(new RegExp(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/))
      .message(
         "Password must contain a uppercase,lowercase,number, and special characters and length will be 8 to 16."
      )
      .required(),
   role: Joi.string().valid("user", "admin"),
});

module.exports = registrationValidationSchema;
