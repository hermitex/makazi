import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  Button,
  CardSubtitle,
  CardImg,
  CardImgOverlay,
  CardTitle,
  CardText,
  CardGroup,
  Container,
  Col,
  Row,
} from "reactstrap";

function Home() {
  return (
    <div style={{ marginTop: "-3rem" }}>
      <Card inverse style={{ border: "none" }}>
        <video
          style={{ height: "50vh", objectFit: "cover" }}
          autoPlay
          muted
          loop
        >
          <source
            src="https://res.cloudinary.com/hng-pre-internship/video/upload/v1659185611/makazi/videos/production_ID_4770380_zwfpal.mp4"
            type="video/mp4"
          />
          Sorry, your browser doesn't support embedded videos.
        </video>
        <CardImgOverlay
          className="d-flex justify-content-center align-content-center"
          style={{ flexDirection: "column", lineHeight: "2rem" }}
        >
          <CardTitle tag="h1">Get your Dream Place!</CardTitle>
          <CardText tag="p" style={{ width: "50vh", fontSize: "1.5rem" }}>
            Buy or rent comfortable and hilarious properites of that matches
            your needs.
          </CardText>
          <Link to="/listings" style={{ width: "fit-content" }}>
            <Button className="text-light">Browse Listings</Button>
          </Link>
        </CardImgOverlay>
      </Card>
      <div className="container">
        <Row className="my-5 ">
          <Col md={12} className="text-center my-3 text-dark">
            <h3>What we Offer</h3>
          </Col>
          <Col md={4} className="mb-2">
            <Card className="bg-dark py-5 px-3">
              <CardBody>
                <div className="text-center">
                <i className="fa-solid fa-video" style={{fontSize:'2rem', color: 'skyblue'}}></i>
                </div>
                <CardTitle className="h3 text-warning">Virtual Survey</CardTitle>
                <CardText className="text-muted">
                  You can catch a glimple of your dream property from the comfot
                  of your leaving room. Yes! No travelling.
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col md={4} className="mb-2">
            <Card className="bg-dark py-5 px-3">
              <CardBody>
              <div className="text-center">
                <i className="fa-solid fa-clipboard-check" style={{fontSize:'2rem', color: 'skyblue'}}></i>
                </div>
                <CardTitle className="h3 text-warning">
                  Choose your type
                </CardTitle>
                <CardText className="text-muted">
                  Find your lovely dream property, look for property model you
                  like and choose the best location that suites your needs
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col md={4} className="mb-2">
            <Card className="bg-dark py-5 px-3">
              <CardBody>
              <div className="text-center">
                <i className="fa-solid fa-money-bill-1" style={{fontSize:'2rem', color: 'skyblue'}}></i>
                </div>
                <CardTitle className="h3 text-warning">Easy Payment</CardTitle>
                <CardText className="text-muted">
                  We accept a wide range of payment methods, including card
                  payments, bank payments.
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Home;
