import React from "react";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";

function Description({ description }) {
  return (
    <Card>
      <CardTitle className="h2 text-muted">Description</CardTitle>
      <CardBody>
        <CardText style={{minHeight: '10rem'}}>{description}</CardText>
      </CardBody>
    </Card>
  );
}

export default Description;
