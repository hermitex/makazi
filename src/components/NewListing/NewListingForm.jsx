import axios from "axios";
import React, { useState } from "react";
import {
  Form,
  FormGroup,
  Input,
  FormText,
  Label,
  Row,
  Col,
  Button,
} from "reactstrap";

function NewListingForm() {
  const [listingData, setlistingData] = useState({
    name: "",
    address: "",
    summary: "",
    city: "",
    county: "",
    category: "",
    type: "",
    description: "",
    img_url: "",
    bedrooms: "",
    bathrooms: "",
    size: "",
    price: "",
  });

  const [urlData, setUrlData] = useState("");

  function getImageUrl(file) {
    console.log(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setUrlData(reader.result);
      // let img_url = axios.post('/uploadImage', data);
      // value = img_url   
      console.log(urlData);  
    };
 
  }

  function handleChange(event) {
    let key = event.target.name;
    let value;
    if (event.target.type === "select") {
      value = event.target.selected;
    } else {
      value = event.target.value;
    }

    if (event.target.type === "file") {
      const file = event.target.files[0];
      getImageUrl(file);
    }

    setlistingData({ ...listingData, [key]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(listingData),
    };
    fetch("http://localhost:8002/properties", options)
      .then((response) => response.json())
      .then((listing) => setlistingData(listing));
    window.location = "/listings";
  }

  return (
    <Form className="mb-5" onSubmit={handleSubmit}>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="listingName">Listing Name</Label>

            <Input
              onChange={handleChange}
              value={listingData.name}
              id="listingName"
              name="listingName"
              placeholder="Listing Name"
              type="text"
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="listingSize">Listing Size</Label>

            <Input
              onChange={handleChange}
              value={listingData.size}
              id="listingSize"
              name="listingSize"
              placeholder="Listing Size in Square Feet"
              type="number"
              min={0}
            />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="summary">Listing Summary</Label>

        <Input
          onChange={handleChange}
          value={listingData.summary}
          id="text"
          name="summary"
          type="text"
          placeholder="3 BR 1 BA House w/ Garage"
        />
      </FormGroup>
      <FormGroup>
        <Label for="price">Listing Price</Label>

        <Input
          onChange={handleChange}
          value={listingData.price}
          id="price"
          name="price"
          placeholder="Listing Price"
        />
      </FormGroup>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="city">Listing City</Label>

            <Input
              onChange={handleChange}
              value={listingData.city}
              id="city"
              name="city"
              type="text"
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="county">County</Label>

            <Input
              onChange={handleChange}
              value={listingData.county}
              id="county"
              name="county"
              type="text"
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <FormGroup>
            <Label for="bedrooms">Number of Bedrooms</Label>

            <Input
              onChange={handleChange}
              value={listingData.bedrooms}
              id="bedrooms"
              name="bedrooms"
              type="number"
              min={0}
            />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="bathrooms">Number Of Bathrooms</Label>

            <Input
              onChange={handleChange}
              value={listingData.bathrooms}
              id="bathrooms"
              name="bathrooms"
              type="number"
              min={0}
            />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="category">Listing for:</Label>

            <Input
              onChange={handleChange}
              selected={listingData.category}
              id="category"
              name="category"
              type="select"
            >
              <option defaultValue="Sale">Sale</option>
              <option>Rent</option>
              <option>Lease</option>
            </Input>
          </FormGroup>
        </Col>
      </Row>
      <FormGroup row>
        <Label for="type" sm={2}>
          Listing Type
        </Label>
        <Col sm={10}>
          <Input
            onChange={handleChange}
            selected={listingData.type}
            id="type"
            name="type"
            type="select"
          >
            <option defaultValue>Single Family Home</option>
            <option>Attached House, Town House</option>
            <option>Apartment, Condo</option>
            <option>Commercial Property</option>
            <option>Estate</option>
            <option>Land Plot</option>
          </Input>
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label for="description" sm={2}>
          Listing Description
        </Label>
        <Col sm={10}>
          <Input
            onChange={handleChange}
            value={listingData.description}
            id="description"
            name="description"
            type="textarea"
          />
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label for="img_url" sm={2}>
          File
        </Label>
        <Col sm={10}>
          <Input
            accept="images/*"
            onChange={handleChange}
            value={listingData.img_url}
            id="img_url"
            name="img_url"
            type="file"
          />      
           <FormText>Add multiple images for your listing.</FormText>    
          <img src={urlData} style={{width: '300px', height: '250px'}} alt="" />
         
        </Col>
      </FormGroup>
      <Button>Add Listing</Button>
    </Form>
  );
}

export default NewListingForm;
