import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardTitle,
  Col,
  Row,
  ListGroupItem,
  ListGroup,
  Button,
  CardImgOverlay,
} from "reactstrap";

function Listing({ listing, onDelete }) {
  function handleDelete(listing) {
    if (window.confirm("Are you sure you want to delete this listing?")) {
      onDelete(listing.id);
    }
  }

  return (
    <>
      <Col md={12}>
        <Card className="mt-3 mb-2">
          <Row>
            <Col md={5}>
              <img
                src={listing.imgUrl}
                style={{ width: "100%", height: "270px" }}
                alt={listing.name}
              />
              <CardImgOverlay style={{ width: "100%", height: "270px" }}>
                <i
                  className="fa-solid fa-heart"
                  style={{ fontSize: "1.7rem" }}
                ></i>
              </CardImgOverlay>
            </Col>
            <Col md={7} className="py-2 px-4">
              <div
                className="list-unstyled d-flex justify-content-between"
                style={{ width: "100%" }}
              >
                <CardTitle className="text-muted">{listing.name}</CardTitle>
                <i className="fa-solid fa-share"></i>
              </div>

              <CardTitle className="h3">Ksh.{listing.price}</CardTitle>
              <CardTitle className="h4 text-muted">{listing.summary}</CardTitle>

              <ul
                className="list-unstyled d-flex justify-content-start"
                style={{
                  width: "100%",
                }}
              >
                <li style={{ marginRight: "1rem" }}>
                  <i className="fa-solid fa-house"></i>
                  {listing.category}
                </li>
                <li>
                  <i className="fa-solid fa-location-dot"></i>
                  {listing.location} {listing.county} county
                </li>
              </ul>

              <ListGroup
                horizontal
                className="d-flex text-center"
                style={{
                  width: "auto",
                  marginTop: "0.3rem",
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
                  <i className="fa-solid fa-ruler-combined"></i>{" "}
                  <var>{listing.size}</var>
                  <sup>2</sup> ft
                </ListGroupItem>
              </ListGroup>

              <ListGroup
                horizontal
                className="d-flex text-center"
                style={{
                  width: "auto",
                  marginTop: "0.3rem",
                }}
              >
                <ListGroupItem
                  style={{
                    width: "100%",
                  }}
                >
                  <Link to="/details" state={{ listing }}>
                    <Button
                      style={{
                        width: "100%",
                      }}
                    >
                      Details
                    </Button>
                  </Link>
                </ListGroupItem>
                <ListGroupItem
                  style={{
                    width: "100%",
                  }}
                >
                  <Link to="/update" state={{ listing }}>
                    <Button
                      style={{
                        width: "100%",
                      }}
                    >
                      Update
                    </Button>
                  </Link>
                </ListGroupItem>
                <ListGroupItem
                  style={{
                    width: "100%",
                  }}
                >
                  <Button
                    style={{
                      width: "100%",
                    }}
                    onClick={() => handleDelete(listing)}
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
