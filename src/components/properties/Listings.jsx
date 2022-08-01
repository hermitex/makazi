import axios from "axios";
import React, {  useMemo, useState } from "react";
import { Card, Row } from "reactstrap";
import useFetch from "../hooks/useFetch";
import Search from "../search/Search";
import Loader from "../spinner/Loader";
import Listing from "./Listing";

function Listings() {
  const [listings] = useFetch(
    "https://makazi-api.herokuapp.com/api/v1/listings"
  );
  const [listingsToShow, setListingsToShow] = useState(null);
  const [criteria, setCriteria] = useState("price");
  async function onDelete(id) {
    try {
      await axios.delete(
        `https://makazi-api.herokuapp.com/api/v1/listings/${id}`,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      let newListings = listings.filter((listing) => listing.id !== id);
      setListingsToShow(newListings);
    } catch (error) {
      console.error(error);
    }
  }

  function onSearch(query) {
    if (query.trim().length === 1) {
      setListingsToShow(listings);
    } else if (query.trim().length > 1) {
      let newListings = listings.filter((listing) =>
        listing.county.toLowerCase().includes(query.toLowerCase())
      );
      setListingsToShow(newListings);
    }
  }

  const sortedListings =useMemo(() =>   function sortBy(){
    console.log(criteria)
    let newListings;
      if (criteria.toLowerCase() === "price") {
        newListings = [...listings].sort((a, b) => a.price - b.price);
        setListingsToShow(newListings);
      } else if (criteria.toLowerCase() === "size") {
        newListings = [...listings].sort((a, b) => a.size - b.size);
        setListingsToShow(newListings);
      } else if (criteria.toLowerCase() === "category") {
        newListings = [...listings].sort((a, b) =>
          a["category"].localeCompare(b["category"])
        );
        setListingsToShow(newListings);
      }
  }, [listings, criteria])

function onSort(criteria){
  setCriteria(criteria);
  console.log(sortedListings())
}

  return (
    <>
      <Card>
        <Search
          onSort={onSort}
          onSearch={onSearch}
          searchResults={
            listingsToShow
              ? listingsToShow && listingsToShow.length
              : listings && listings.length
          }
        />
      </Card>
      <Row>
        {listingsToShow ? (
          listingsToShow.map((listing) => (
            <Listing key={listing.id} listing={listing} onDelete={onDelete} />
          ))
        ) : listings === null ? (
          <Loader />
        ) : (
          listings &&
          listings.map((listing) => (
            <Listing key={listing.id} listing={listing} onDelete={onDelete} />
          ))
        )}
      </Row>
    </>
  );
}

export default Listings;
