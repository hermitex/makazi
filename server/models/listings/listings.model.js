const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const listingSchema = new Schema(
  {
    name: { type: String, require: true },
    summary: { type: String, require: true },
    city: { type: String, require: true },
    county: { type: String, require: true },
    category: { type: String, require: true },
    type: { type: String, require: true },
    description: { type: String, require: true },
    img_url: { type: String, require: true },
    bedrooms: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    size: { type: Number, required: true },
    price: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Listing = mongoose.model("listings", listingSchema);

module.exports = Listing;
