const express = require("express");
const bodyParser = require("body-parser");

const router = require("./router");

const path = require("path");
const port = 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname,"../client/dist")));

app.use("/",router);

app.listen(port, () => console.log("server up:" + port));
