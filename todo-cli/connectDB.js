// connectDB.js

const Sequelize = require("sequelize");

const database = "todo_db";
const username = "postgres";
const password = "QwertyuioP01&1";
const sequelize = new Sequelize(database, username, password, {
  host: "localhost",
  dialect: "postgres",
});

sequelize
  .authenticate()
  .then(() => {
    async function connectToDatabase() {
        try {
          await sequelize.authenticate();
          console.log("Connection has been established successfully.");
          // Additional database-related code can go here
        } catch (error) {
          console.error("Unable to connect to the database:", error);
          process.exit(1);
        }
      }
      
      connectToDatabase();
   
    });


    module.exports = {
        connect,
        sequelize
      }



      
 