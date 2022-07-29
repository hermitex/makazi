import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  Col,
  Row,
  ListGroupItem,
  ListGroup,
  Button,
} from "reactstrap";

function Listing({ listing }) {
  return (
    <>
      <Col md={12} >
        <Card className="mt-3">
          <Row >
            <Col md={4}>
              <img src={listing.img_url} style={{ width: "100%", height: "100%" }} />
            </Col>
            <Col md={8} className="py-2 px-4">
              <CardTitle className="text-muted">{listing.name}</CardTitle>
              <CardTitle className="h2">{listing.price}</CardTitle>
              <CardTitle className="h2 text-muted">{listing.summary}</CardTitle>

              <ul
                className="list-unstyled d-flex justify-content-start"
                style={{
                  width: "100%",
                }}
              >
                <li style={{ marginRight: "1rem" }}>
                  <i class="fa-solid fa-house"></i>
                  {listing.category}
                </li>
                <li>
                  <i class="fa-solid fa-location-dot"></i>
                  {listing.location} {listing.county} county
                </li>
              </ul>

              <ListGroup
                horizontal
                className="d-flex text-center"
                style={{
                  width: "100%",
                  marginTop: "2rem",
                }}
              >
                <ListGroupItem
                  tag="a"
                  style={{
                    width: "100%",
                  }}
                >
                  <i className="fa-solid fa-bed"></i>
                  {listing.bedrooms}
                </ListGroupItem>
                <ListGroupItem
                  tag="a"
                  style={{
                    width: "100%",
                  }}
                >
                  <i className="fa-solid fa-shower"></i>
                  {listing.bathrooms}
                </ListGroupItem>
                <ListGroupItem
                  tag="a"
                  style={{
                    width: "100%",
                  }}
                >
                  <var>{listing.size}</var>
                  <sup>2</sup> ft
                </ListGroupItem>
              </ListGroup>

              <ListGroup
                horizontal
                className="d-flex text-center"
                style={{
                  width: "100%",
                  marginTop: "2rem",
                }}
              >
                <ListGroupItem
                  tag="a"
                  style={{
                    width: "100%",
                  }}
                >
                  <Button
                    style={{
                      width: "100%",
                    }}
                  >
                    See More
                  </Button>
                </ListGroupItem>
                <ListGroupItem
                  tag="a"
                  style={{
                    width: "100%",
                  }}
                >
                  <Button
                    style={{
                      width: "100%",
                    }}
                  >
                    Edit
                  </Button>
                </ListGroupItem>
                <ListGroupItem
                  tag="a"
                  style={{
                    width: "100%",
                  }}
                >
                  <Button
                    style={{
                      width: "100%",
                    }}
                  >
                    Delete
                  </Button>
                </ListGroupItem>
              </ListGroup>
            </Col>
          </Row>
        </Card>
      </Col>
    </>
  );
}

export default Listing;
