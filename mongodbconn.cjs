   
const mongoose = require("mongoose");
//const uri = "mongodb://localhost/nutribyte";
const uri =
"mongodb+srv://ndwive:nutribyte@cluster0.st8ag.mongodb.net/nutribyte?retryWrites=true&w=majority&appName=Cluster0";

try {
    mongoose.connect(uri);
    console.log("Connected to Mongodb");
} catch (e) {
    console.log(e)
    console.log("Mongodb connection failed")
}

module.exports =  mongoose;