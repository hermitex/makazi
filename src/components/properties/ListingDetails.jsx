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
    <Row className="my-5 container-fluid">
      <Col md={5}>
        <Card className="h-100">
          <img src={img_url} alt="listing" />
        </Card>
      </Col>
      <Col md={7}>
        <Card className="p-5">
          <CardTitle className="h2 text-muted">{name}</CardTitle>
          <CardBody>
            <CardText>{description}</CardText>
            <div className="container">
              <Row className="my-5 ">
                <Col md={4} className="">
                  <Card className="bg-dark py-5 px-3">
                    <CardBody>
                      <CardText className="text-muted h3"> Offering at </CardText>
                      <CardTitle className="h3 text-light">{price}</CardTitle>
                    </CardBody>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="bg-dark py-5 px-3">
                    <CardBody>
                      
                      <CardText className="text-muted h3">
                      Location
                      </CardText>
                      <CardTitle className="h3 text-light"> {city}</CardTitle>
                    </CardBody>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="bg-dark py-5 px-3">
                    <CardBody>
                    <CardText className="text-muted h3">Category</CardText>
                      <CardTitle className="h3 text-light">{category}</CardTitle>
                     
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
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
