const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({path:"./config.env"});
const port = process.env.port || 5000;
app.use(cors());
app.use(express.json());
app.use(require("./db/record"));
//get driver connection
const dbo = require("./db/conn");

app.listen(port, () => {
    //perform a database connection when server strts
    dbo.connectToServer(function (err){
        if(err) console.error(err);
    });
    console.log(`Server is running on port: ${port}`)
});