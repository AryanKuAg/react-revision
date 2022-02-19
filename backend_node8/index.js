const express = require("express");
const path = require("path");
const app = express();

const publicDirPath = path.join(__dirname, "/public");
const port = process.env.PORT || 5000;
app.use(express.static(publicDirPath));

app.listen(port, () => console.log("listening on port:", port));
