import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";

require("dotenv").config();

const app = express();
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
// application/x-www-form-urlencoded
app.use(express.urlencoded({
  extended: true
}));

// Middleware para Vue.js router modo history
const history = require("connect-history-api-fallback");

app.use(history());
app.use(express.static(path.join(__dirname, "public")));

app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), () => console.log("Listen port", process.env.PORT));
