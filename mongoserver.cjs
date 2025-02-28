const express = require("express");

const app = express();
const mongodbRoutes = require("./mongodb.cjs");

// Serve static files from the public dir
app.use(express.static("public"));
app.use("/api", mongodbRoutes);

// Start the web server
app.listen(8080, function () {
    console.log("Listening on port 8080...");
});