import axios from "axios";
import React, { useState } from "react";
import { Card, Container, Row } from "reactstrap";
import useFetch from "../hooks/useFetch";
import Search from "../search/Search";
import Listing from "./Listing";

function Listings() {
  const [listings] = useFetch("https://makazi-api.herokuapp.com/api/v1/listings");
  const [listingsToShow, setListingsToShow] = useState(null);
  async function onDelete(id) {
    try {
      await axios.delete(`https://makazi-api.herokuapp.com/api/v1/listings/${id}`, {
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
      <Card className="d-sm-none">
        <Search />
      </Card>
{/* style={{ maxHeight: "100vh", overflowY: "auto" }} */}
      <Row >
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
