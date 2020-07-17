const dotenv = require("dotenv");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const swaggerUi = require("swagger-ui-express");

dotenv.config();
const routes = require("./routes");

const port = process.env.PORT;
const app = express();
app.use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .use(morgan("tiny"));

const swaggerDocument = require("./swagger.json");

swaggerDocument.host = process.env.URI_HOSTS;

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const whitelist = [ "*", "http://localhost:3000", "http://example2.com" ];
app.use(cors({
    origin(origin, callback) {
        if (!origin) return callback(null, true);
        if (whitelist.indexOf(origin) === -1) {
            const msg = "The CORS policy for this site does not "
                + "allow access = require(the specified Origin.";
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}));

app.get("/", (req, res) => {
    res.send("Hi People!");
});

app.use("/v1", routes);
app.get("*", (req, res) => {
    res.status(400).send({ message: "not found" });
});

app.listen(port, () => {
    console.log("Starting in Port", port);
});
