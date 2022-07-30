import React from "react";

import { Row, Col } from "reactstrap";
import NewListingForm from "../NewListing/NewListingForm";
import Profile from "../profile/Profile";
import Listings from "./Listings";

function ListingContainer() {
  return (
    <div>
      <Row>
        <Col md={4}>
          <Profile />
        </Col>
        <Col md={8}>
          <Listings />
        </Col>
      </Row>
    </div>
  );
}

export default ListingContainer;
