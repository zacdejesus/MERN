const mongoose = require("mongoose");
const URI =
  "mongodb+srv://zacdejesus:leiKdaz*1m@devconnector-xjtdm.mongodb.net/test?retryWrites=true&w=majority";

mongoose
  .connect(URI)
  .then(db => console.log("DB is connected"))
  .catch(err => console.error(err));

module.exports = mongoose;
