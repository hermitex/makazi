import React from "react";
import { Container, Row } from "reactstrap";
import useFetch from "../hooks/useFetch";
import Listing from "./Listing";

function Listings() {
  const [listings] = useFetch("http://localhost:8002/properties");
  return (
    <Row style={{maxHeight: '100vh', overflowY: 'auto'}}>  
      {listings &&
        listings.map((listing) => (
          <Listing key={listing.id} listing={listing} />
        ))}
    </Row>
  );
}

export default Listings;
