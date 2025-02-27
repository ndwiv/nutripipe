   
const mongoose = require("mongoose");
const local_uri = "mongodb://localhost/nutribyte";

try {
    mongoose.connect(local_uri);
    console.log("Connected to Mongodb");
} catch (e) {
    console.log(e)
    console.log("Mongodb connection failed")
}

module.exports =  mongoose;