const cors = require("cors");

const express = require("express");

const mongoose = require("mongoose");

const bodyParser = require('body-parser')

require("dotenv").config();

const { uploader } = require("./cloudinary/cloudinary");

const app = express();

const PORT = process.env.PORT;


app.use(bodyParser.json({ limit: "50mb" }));

app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);

app.use(function (req, res, next) {
  // Website 
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods 
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers 
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});



app.post("/api/v1/upload", async (req, res) => {
  let { urlData } = req.body;
  const uploadedImage = await uploader.upload(
    urlData,
    {
      //   upload_preset: "unsigned_upload",
      allowed_formats: ["jpg", "png", "gif", "jpeg", "svg", "ico", "webp"],
    },
    function (error, result) {
      if (error) {
        console.log(error);
      } else {
        res.status(200).json(result);
      }
    }
  );
  try {
    res.status(200).json(uploadedImage);
  } catch (error) {
    console.log(error);
  }
});

// API
const uri = process.env.DB_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once("open", () => console.log("Mongo db connection success!"));

const listingController = require("./controllers/listings/listings.controller");
const userController = require("./controllers/users/users.controller");

app.use("/", userController);
app.use("/", listingController);

app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
