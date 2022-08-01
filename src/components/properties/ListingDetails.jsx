import React from "react";
import { useLocation, Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
  Button,
} from "reactstrap";
import Profile from "../profile/Profile";

function ListingDetails({}) {
  const location = useLocation();
  const { listing } = location.state;
  const {
    name,
    summary,
    city,
    county,
    category,
    description,
    imgUrl,
    bedrooms,
    bathrooms,
    size,
    price,
  } = listing;
  return (
    <Row className="my-5 mx-3">
      <Col xs={12} sm={12} md={3}>
        <Profile />
      </Col>
      <Col xs={12} sm={12} md={9}>
        <Card className="py-5 px-3">
          <Row>
            <Col xs={12} sm={12} md={12} className="mb-1">
              <Link to="/listings">
                <Button>
                  <i className="fa-solid fa-chevron-left"></i> Back
                </Button>
              </Link>
            </Col>
            <Row>
              <Col xs={12} sm={12} md={4}>
                <Card style={{ height: "auto" }}>
                  <img src={imgUrl} alt="listing" />
                </Card>
              </Col>
              <Col xs={12} sm={12} md={8}>                
                <CardBody>
                <CardTitle className="h2 text-muted">{name}</CardTitle>
                  <CardText>{description}</CardText>
                  <div className="">
                    <Row className="my-5 ">
                      <Col xs={12} sm={12} md={4} className="mb-2">
                        <Card className="bg-dark py-3 px-1" style={{width:'100%'}} >
                          <CardBody>
                            <CardText className="text-muted h5">
                              Offering at
                            </CardText>
                            <CardTitle className="h4 text-light">
                              {price}
                            </CardTitle>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col xs={12} sm={12} md={4} className="mb-2">
                        <Card className="bg-dark py-3 px-1" style={{width:'100%'}}>
                          <CardBody>
                            <CardText className="text-muted h5">
                              Location
                            </CardText>
                            <CardTitle className="h4 text-light">
                              {city}
                            </CardTitle>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col xs={12} sm={12} md={4} className="mb-2">
                        <Card className="bg-dark py-3 px-1" style={{width:'100%'}}>
                          <CardBody>
                            <CardText className="text-muted h5">
                              Category
                            </CardText>
                            <CardTitle className="h4 text-light">
                              {category}
                            </CardTitle>
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
                      {bedrooms}
                    </ListGroupItem>
                    <ListGroupItem
                      style={{
                        width: "100%",
                      }}
                    >
                      <i className="fa-solid fa-shower"></i>
                      {bathrooms}
                    </ListGroupItem>
                    <ListGroupItem
                      style={{
                        width: "100%",
                      }}
                    >
                      <var>{size}</var>
                      <sup>2</sup> ft
                    </ListGroupItem>
                  </ListGroup>
                </CardBody>
              </Col>
            </Row>
          </Row>
        </Card>
      </Col>
    </Row>
  );
}

export default ListingDetails;
