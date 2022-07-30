import React from "react";
import { Form, FormGroup, Label, Input, Col, Row, Button } from "reactstrap";
function Search() {
  return (
    <Form
      className="p-1 "
      style={{
        border: "none",
        backgroundColor: "#fff",
        width: "100%",
      }}
    >
      <Row className="d-flex">
        <Col md={6}>
          <FormGroup>
            <Label for="search">Showing 300 results</Label>

            <Input
              id="search"
              name="select"
              type="search"
              placeholder="Search"
              style={{
            
                width: "100%",
              }}
            ></Input>
          </FormGroup>
        </Col>

        <Col md={6}>
          <FormGroup>
            <Label for="search">Sort By</Label>
            <Input id="price" name="select" type="select"
             style={{
            
              width: "100%",
            }}
            >
              <option>Price</option>
              <option>Size</option>
              <option>Category</option>
            </Input>
          </FormGroup>
        </Col>
      </Row>
      <Row className="d-flex">
        <Col md={3}>
          <FormGroup>
            <Input id="price" name="select" type="select">
              <option>Any price</option>
              <option>Below 500k</option>
              <option>500k and above</option>
              <option>1M and above</option>
            </Input>
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Input id="exampleSelect" name="select" type="select">
              <option>Any type</option>
              <option>For Rent</option>
              <option>For Sale</option>
            </Input>
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Input id="exampleSelect" name="select" type="select">
              <option>Bedrooms</option>
              <option>0</option>
              <option>1</option>
              <option>3 to 4</option>
              <option>Above 4</option>
            </Input>
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Input id="exampleSelect" name="select" type="select">
              <option>Bathrooms</option>
              <option>0</option>
              <option>1</option>
              <option>3 to 4</option>
              <option>Above 4</option>
            </Input>
          </FormGroup>
        </Col>
      </Row>
    </Form>
  );
}

export default Search;
