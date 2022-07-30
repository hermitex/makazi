import { Router as router } from "express";
import Listing from "../../models/listings/listings.model";

router.route("/api/v1/listings").get((req, res) => {
  Listing.find()
    .then((listings) => res.json(listings))
    .catch((error) => res.status(100).json(`Error: ${error}`));
});

router.route("/api/v1/listings/new").post((req, res) => {
   const name=req.body.name
   const summary=req.body.summary
   const city=req.body.city
   const county=req.body.county
   const category=req.body.category
   const type=req.body.type
   const description=req.body.description
   const img_url=req.body.img_url
   const  bedrooms=req.body.bedrooms
   const  bathrooms=req.body.bathrooms
   const size=req.body.size
   const price=req.body.price

  const newListing = new Listing(
    name,
    summary,
    city,
    county,
    category,
    type,
    description,
    img_url,
    bedrooms,
    bathrooms,
    size,
    price,
  );

  newListing
    .save()
    .then(() => res.json("Listing added successfully!"))
    .catch((error) => res.status(100).json(`Error: ${error}`));
});

router.route("/api/v1/listings/:id").get((req, res) => {
  Listing.findById(req.params.id)
    .then((listing) => res.json(listing))
    .catch((error) => res.status(100).json(`Error: ${error}`));
});

router.route("/api/v1/listings/:id").delete((req, res) => {
  Listing.findOneAndDelete(req.params.id)
    .then((listing) => res.json(listing))
    .catch((error) => res.status(100).json(`Error: ${error}`));
});

router.route("/api/v1/listings/:id").patch((req, res) => {
  Listing.findOneAndDelete(req.params.id).then((listing) => {
    listing.name = req.body.name;
    listing.summary = req.body.summary;
    listing.city = req.body.city;
    listing.county = req.body.county;
    listing.category = req.body.category;
    listing.type = req.body.type;
    listing.description = req.body.description;
    listing.img_url = req.body.img_url;
    listing.bedrooms = req.body.bedrooms;
    listing.bathrooms = req.body.bathrooms;
    listing.size = req.body.size;
    listing.price = req.body.price;

    listing
      .save()
      .then(() => res.json("Listing updated"))
      .catch((error) => res.status(100).json(`Error: ${error}`));
  });
});

export default router;
