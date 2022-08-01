import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Col, Row, Button } from "reactstrap";
function Search({ onSearch, onSort, searchResults, onFilterByCategory }) {
  const [searchData, setSearchData] = useState("");
  function handleChange(event) {
    let searchValue = event.target.value;
    setSearchData(searchValue);
    onSearch(searchData);
  }
  function handleSort(event) {
    let criteria = event.target.value;
    onSort(criteria);
  }

  function handleFilterCategory(event) {
    let category = event.target.value;
    onFilterByCategory(category);
  }

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
            <Label for="search">Showing {searchResults} results</Label>
            <Input
              id="search"
              name="select"
              type="search"
              placeholder="Enter location to search"
              style={{
                width: "100%",
              }}
              onChange={handleChange}
            ></Input>
          </FormGroup>
        </Col>

        <Col md={6}>
          <FormGroup>
            <Label for="search">Sort By</Label>
            <Input
              id="price"
              name="select"
              type="select"
              style={{
                width: "100%",
              }}
              onChange={handleSort}
            >
              <option defaultValue="Select Sort Criteria" disabled>
                Click to sort
              </option>
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
            <Input
              id="exampleSelect"
              name="select"
              type="select"
              onChange={handleFilterCategory}
            >
              <option disabled>Select Category</option>
              <option>Rent</option>
              <option>Sale</option>
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
