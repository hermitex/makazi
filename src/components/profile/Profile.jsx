import React from "react";
import {
  CardBody,
  CardTitle,
  Card,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";

function Profile() {
  return (
    <Card
      className="d-flex justify-content-center align-content-center align-items-center"
      style={{
        flexDirection: "column",
        width: "auto",
        height: "100%",
        margin: "auto",
      }}
    >
      <h2 className="text-muted">Agent Profile</h2>
      <img
        alt="profile"
        src="https://picsum.photos/300/200"
        style={{
          width: "120px",
          height: "120px",
          borderRadius: "100%",
          margin: "0 auto",
          marginTop: "0.5rem",
        }}
      />
      <CardBody>
        <CardTitle tag="h5" className="text-center">
          Jim Rock
        </CardTitle>
        <CardSubtitle className="mb-2 text-muted text-center" tag="h6">
          Agent
        </CardSubtitle>
        <CardText>
          <address>
            <ul className="list-unstyled">
              <li>
                <i class="fa-solid fa-envelope"></i> Email:{" "}
                <a href="mailto:jim@rock.com">jim@rock.com</a>
              </li>
              <li>
                <i class="fa-solid fa-phone"></i>Phone:{" "}
                <a href="tel:+13115552368">(+254) 755-2368</a>{" "}
              </li>
              <li>
                <i class="fa-solid fa-location-dot"></i>Location: Nairobi, Kenya
              </li>
              <li className=" d-flex">
                Social:
                <ul className="list-unstyled d-flex justify-content-between">
                  <li>
                    <a href="http://www.facebook.com/">
                      <i class="fa-brands fa-square-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="http://www.facebook.com/">
                      <i class="fa-brands fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="http://www.facebook.com/">
                      <i class="fa-brands fa-square-instagram"></i>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>

            <ul className="list-unstyled">
              <li>Cozyhomes Office</li>
              <li className="text-muted">
                910 A-B Flaffylands, Nairobi, Kenya
              </li>
              <li>Cozyhomes Houses</li>
            </ul>
          </address>
        </CardText>
        {/* <Button>Edit</Button> */}
      </CardBody>
    </Card>
  );
}

export default Profile;
