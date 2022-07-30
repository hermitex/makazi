import cors from "cors";

import express, { json, urlencoded } from "express";

// import {uploader}  from "./cloudinary/cloudinary.js";

const { uploader } = "./cloudinary/cloudinary";

import { config } from "dotenv";
import mongoose from "mongoose";

config();

const app = express();

const PORT = process.env.PORT;

app.use(cors());

app.use(json({ limit: "50mb" }));

app.use(urlencoded({ limit: "50mb", extended: true }));

app.use(json({ limit: "50mb" }));

app.use(json({ limit: "50mb" }));

app.use(urlencoded({ limit: "50mb", extended: true }));

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

const { listingController } = "./controllers/listings/listings.controller";
const { userController } = "./controllers/users/users.controller";

app.use('/users', userController)
app.use("/listings", listingController);

console.log();

app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
