import axios from "axios";
import React, { useState } from "react";
import { Card, Row } from "reactstrap";
import useFetch from "../hooks/useFetch";
import Search from "../search/Search";
import Loader from "../spinner/Loader";
import Listing from "./Listing";

function Listings() {
  const [listings] = useFetch(
    "https://makazi-api.herokuapp.com/api/v1/listings"
  );
  const [listingsToShow, setListingsToShow] = useState(null);
  async function onDelete(id) {
    try {
      await axios.delete(
        `https://makazi-api.herokuapp.com/api/v1/listings/${id}`,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      let newListings = listings.filter((listing) => listing.id !== id);
      setListingsToShow(newListings);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Card>
        <Search />
      </Card>
      <Row>
        {listingsToShow ? (
          listingsToShow.map((listing) => (
            <Listing
              key={listing.id}
              listing={listing}
              onDelete={onDelete}
            />
          ))
        ) : listings === null ? (
          <Loader />
        ) : (
          listings &&
          listings.map((listing) => (
            <Listing
              key={listing.id}
              listing={listing}
              onDelete={onDelete}
            />
          ))
        )}
      </Row>
    </>
  );
}

export default Listings;
