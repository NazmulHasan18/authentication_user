const { default: mongoose } = require("mongoose");
const app = require("./app");
const config = require("./app/config");

async function main() {
   try {
      await mongoose.connect(config.database_url);

      app.listen(config.port, () => {
         console.log(`app is listening on port ${config.port}`);
      });
   } catch (err) {
      console.log("here", err);
   }
}

main();
