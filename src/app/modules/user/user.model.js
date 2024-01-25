const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const config = require("../../config");

const userRegistrationSchema = new Schema(
   {
      name: {
         first_name: { type: String, required: true },
         last_name: { type: String, required: true },
      },
      username: {
         type: String,
         unique: true,
         lowercase: true,
         required: true,
      },
      email: {
         type: String,
         unique: true,
         required: true,
      },
      password: {
         type: String,
         required: true,
      },
      role: {
         type: String,
         enum: ["admin", "user"],
         default: "user",
      },
      isDeleted: {
         type: Boolean,
         default: false,
      },
   },
   {
      timestamps: true,
   }
);

userRegistrationSchema.pre("save", async function (next) {
   this.password = await bcrypt.hash(this.password, Number(config.bcrypt_salt_rounds));
   next();
});
userRegistrationSchema.post("save", function () {
   this.password = "";
});

const User = model("user", userRegistrationSchema);

module.exports = User;
