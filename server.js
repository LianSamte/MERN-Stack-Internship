const express = require("express");
const bodyParser = require("body-parser");
const dbconfig = require("./config/database.config.js");
const mongoose = require("mongoose");
const UserRoute = require("./routes/User.js");
const cors = require("cors");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cors());

mongoose.Promise = global.Promise;
mongoose.connect(dbconfig.url, {
    useNewUrlParser: true
}).then(()=>
{
    console.log("Database connection successful");
}).catch(err => {
    console.log("Database could not connect", err);
});

app.use("/user", UserRoute);

app.get("/", (req, res) =>
{
    res.json({"message": "CRUD Node Express"});
});

app.listen(5000, ()=>
{
    console.log("Connection Established");
});

