import axios from "axios";
import React, { useState } from "react";
import { Container, Row } from "reactstrap";
import useFetch from "../hooks/useFetch";
import Search from "../search/Search";
import Listing from "./Listing";

function Listings() {
  const [listings] = useFetch("http://localhost:8002/properties");
  const [listingsToShow, setListingsToShow] = useState(null);
  async function onDelete(id) {
    try {
      await axios.delete(`http://localhost:8002/properties/${id}`, {
        headers: { "Content-Type": "application/json" },
      });
      let newListings = listings.filter((listing) => listing.id !== id);
      setListingsToShow(newListings);
    } catch (error) {
      console.error(error);
    }
  }

  function onUpdate(listing) {
    console.log(listing);
  }

  function onView(listing) {
    console.log(listing);
  }

  return (
    <>
 <Search/>
    <Row style={{ maxHeight: "100vh", overflowY: "auto" }}>
      {listingsToShow
        ? listingsToShow.map((listing) => (
            <Listing
              key={listing.id}
              listing={listing}
              onDelete={onDelete}
              onUpdate={onUpdate}
              onView={onView}
            />
          ))
        : listings &&
          listings.map((listing) => (
            <Listing
              key={listing.id}
              listing={listing}
              onDelete={onDelete}
              onUpdate={onUpdate}
              onView={onView}
            />
          ))}
    </Row>
    </>
  );
}

export default Listings;
