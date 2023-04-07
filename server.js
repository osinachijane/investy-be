require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
let cors = require("cors");

const account = require("./routes/api/v1/account");
const accounts = require("./routes/api/v1/accounts");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

//Use routes
app.use("/api/v1/account", account);
app.use("/api/v1/accounts", accounts);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port} `);
});
