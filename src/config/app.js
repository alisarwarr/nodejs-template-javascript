const dotenv = require("dotenv");
dotenv.config();


const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const routes = require("../routes");
app.use(routes);


const cors = require("cors");
const whitelist = process.env.FRONDEND_URL ? process.env.FRONDEND_URL.split(',') : [];
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    }
};


//app.use(cors());                /* development */
  app.use(cors(corsOptions));     /* production */


module.exports = app;