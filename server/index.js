import cors from "cors";

import express, { json, urlencoded } from "express";


import { uploader } from "./cloudinary/cloudinary.js";

require("dotenv").config();

const app = express();

const PORT = process.env.PORT;

app.use(cors());

app.use(json({ limit: "50mb" }));

app.use(urlencoded({ limit: "50mb", extended: true }));


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




app.listen(PORT,  () => {
  console.log("listening on port " + PORT);
});
