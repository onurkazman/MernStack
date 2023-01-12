const express = require("express");

//recordRoutes is an instance of the express router.
const recordRoutes = express.Router();

//This will help us connect to database
const dbo = require("../db/conn")

//This helps to convert the id from string toObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

//This section will help us get a list of all the records.
recordRoutes.route("/record").get(function (req, res){
    let db_connect = dbo.getDb("employees");
    db_connect
        .collection("records")
        .find({})
        .toArray(function (err, result){
            if (err) throw err;
            res.json(result);
        });
});

//
