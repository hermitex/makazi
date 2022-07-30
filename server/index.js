require("dotenv").config();

const cors = require("cors");

const express = require("express");

const app = express();

const PORT = process.env.PORT;


const cloudinary = require("./cloudinary/cloudinary");

app.use(cors());

app.use(express.json({ limit: "50mb" }));

app.use(express.urlencoded({ limit: "50mb", extended: true }));


app.use(express.json({ limit: "50mb" }));

app.use(express.urlencoded({ limit: "50mb", extended: true }));


app.get('/api/v1/test', (req, res, next) => {
    res.json({ok: true});
})

app.post("/api/v1/upload", async (req, res) => {
  let { urlData } = req.body;
  const uploadedImage = await cloudinary.uploader.upload(
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

app.post("/", async (req, res) => {
  res.json("I have received the data");
});

app.patch("/", (req, res) => {});

app.delete("/", (req, res) => {});





app.listen(PORT,  () => {
  console.log("listening on port " + PORT);
});
