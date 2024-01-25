const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.join((process.cwd(), ".env")) });

module.exports = {
   port: process.env.PORT,
   database_url: process.env.DATABASE_URL,
   bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
   jwt_access_secret: process.env.JWT_ACCESS_SECRET,
};
