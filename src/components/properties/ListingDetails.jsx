import React from "react";
import { useLocation } from "react-router-dom";
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
} from "reactstrap";

function ListingDetails({}) {
  const location = useLocation();
  const { listing } = location.state;
  const {
    id,
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
  } = listing;
  return (
    <Row className="my-5">
      <Col md={5}>
        <Card>
          <img src={img_url} alt="listing" />
        </Card>
      </Col>
      <Col md={7}>
        <Card className="p-5">
          <CardTitle className="h2 text-muted">{name}</CardTitle>
          <CardBody>
            <CardText>{description}</CardText>
            <CardTitle className="h2 text-muted">Listing at</CardTitle>
            <CardTitle className="h2">{price}</CardTitle>
            <CardTitle className="h2 text-muted">Size(sqrft)</CardTitle>
            <CardTitle className="h2">{size}</CardTitle>
            <CardTitle className="h2 text-muted">Location</CardTitle>
            <CardTitle className="h2">
              {city}, {county} county
            </CardTitle>
            <CardTitle className="h2 text-muted">Category</CardTitle>
            <CardTitle className="h2">{category}</CardTitle>
            <CardTitle className="h2 text-muted">Type</CardTitle>
            <CardTitle className="h2">{type || "N/A"}</CardTitle>
            <ListGroup
              horizontal
              className="d-flex text-center"
              style={{
                width: "100%",
                marginTop: "2rem",
              }}
            >
              <ListGroupItem
                style={{
                  width: "100%",
                }}
              >
                <i className="fa-solid fa-bed"></i>
                {listing.bedrooms}
              </ListGroupItem>
              <ListGroupItem
                style={{
                  width: "100%",
                }}
              >
                <i className="fa-solid fa-shower"></i>
                {listing.bathrooms}
              </ListGroupItem>
              <ListGroupItem
                style={{
                  width: "100%",
                }}
              >
                <var>{listing.size}</var>
                <sup>2</sup> ft
              </ListGroupItem>
            </ListGroup>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
}

export default ListingDetails;
