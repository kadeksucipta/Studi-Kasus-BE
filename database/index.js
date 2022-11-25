const mongoose = require("mongoose");
// const{dbHost, dbPass, dbName, dbPort, dbUser} = require("../app/config");

mongoose.connect(`mongodb://kadeksucipta:kadeksucipta@ac-yu1ayca-shard-00-00.5c6405r.mongodb.net:27017,ac-yu1ayca-shard-00-01.5c6405r.mongodb.net:27017,ac-yu1ayca-shard-00-02.5c6405r.mongodb.net:27017/StudiKasusBE?ssl=true&replicaSet=atlas-e5y2u7-shard-0&authSource=admin&retryWrites=true&w=majority`);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => console.log("Server database terhubung"));

module.exports = db;