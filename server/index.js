import { config } from 'dotenv';

import { MongoClient } from 'mongodb';



import cors from "cors";

import express, { json, urlencoded } from "express";



import uploader  from "./cloudinary/cloudinary.js";


import  connect  from "mongoose";

config();

const app = express();

const PORT = process.env.PORT;


const uri = process.env.DB_URI;


app.use(cors());

app.use(json({ limit: "50mb" }));

app.use(urlencoded({ limit: "50mb", extended: true }));


app.use(json({ limit: "50mb" }));

app.use(urlencoded({ limit: "50mb", extended: true }));




export async function connectToCluster(uri) {
  let mongoClient;

  try {
      mongoClient = new MongoClient(uri);
      console.log('Connecting to MongoDB Atlas cluster...');
      await mongoClient.connect();
      console.log('Successfully connected to MongoDB Atlas!');

      return mongoClient;
  } catch (error) {
      console.error('Connection to MongoDB Atlas failed!', error);
      process.exit();
  }
}


app.get('/api/v1/login', (req, res, next) => {
    res.json({ok: true});
})

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

app.post("/", async (req, res) => {
  res.json("I have received the data");
});

app.patch("/", (req, res) => {});

app.delete("/", (req, res) => {});







app.listen(PORT,  () => {
  console.log("listening on port " + PORT);
});
