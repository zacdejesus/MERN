const express = require("express");
const morgan = require("morgan");
const path = require("path");
const { mongoose } = require("./database");

const app = express();

//settings
app.set("PORT", process.env.PORT || 5000);

//middleware
app.use(morgan("dev"));
app.use(express.json());

//routes
app.use("/api/tasks", require("./routes/task.routes"));

//static files
app.use(express.static(path.join(__dirname, "public")));

//starting server

app.listen(app.get("PORT"), () => {
  console.log(`servidor on port ${app.get("PORT")}`);
});
