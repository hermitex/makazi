import React from "react";

import { Row, Col } from "reactstrap";
import BlogList from "../blogs/BlogList";
import NewListingForm from "../NewListing/NewListingForm";
import Profile from "../profile/Profile";
import Listings from "./Listings";

function ListingContainer() {
  return (
    <div className="container-fluid">
      <Row>
        <Col md={8}>
          <Listings />
        </Col>
        <Col md={4}>
          <BlogList />
        </Col>
      </Row>
    </div>
  );
}

export default ListingContainer;
