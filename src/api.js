import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";

dotenv.config();
const routes = require("./routes");

const app = express();
app.use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .use(morgan("tiny"));

const whitelist = [ "*", "http://localhost:3000", "http://example2.com" ];
app.use(cors({
    origin(origin, callback) {
        if (!origin) return callback(null, true);
        if (whitelist.indexOf(origin) === -1) {
            const msg = "The CORS policy for this site does not "
                + "allow access from the specified Origin.";
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}));

app.get("/", (req, res) => {
    res.send("Hi People!");
});

app.use("/", routes);
app.get("*", (req, res) => {
    res.status(400).send({ message: "not found" });
});

app.listen(process.env.PORT, () => {
    console.log("Starting in Port", process.env.PORT);
});
