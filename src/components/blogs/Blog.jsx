import React from "react";
import { Link } from "react-router-dom";
import { Button, Card , CardBody, CardHeader, CardText, CardTitle, Col} from "reactstrap";

function Blog() {
  return (
    <Col md={12}>   
      <Card
        className="my-2"
        color="light"
        //   inverse
        style={{
          width: "100%",
        }}
      >
        <CardHeader>Conmen secrets</CardHeader>
        <CardBody>
          <CardTitle tag="h5">How to spot real estate cons</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CardText>
          <Button>View</Button>
        </CardBody>
      </Card>
    </Col>
  );
}

export default Blog;
