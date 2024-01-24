var express = require("express");
var server = express();
var routes = require("./route/route");
var mongoose = require("mongoose");
const cors = require("cors");
mongoose.set('strictQuery', false);
mongoose.connect(
  "mongodb+srv://kathikmrn:kmrn12@cluster0.zmnnz7p.mongodb.net/stud?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  function checkDB(error) {
    if (error) {
      console.log("errorr");
    } else {
      console.log("DB Connectedddd!!!!!!!!!!!");
    }
  }
);

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(8000, function check(error) {
  if (error) {
    console.log("errorr");
  } else {
    console.log("startedddddd");
  }
});
