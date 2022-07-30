import "./App.css";
import ListingContainer from "./components/properties/ListingContainer";
import Search from "./components/search/Search";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewListingForm from "./components/NewListing/NewListingForm";
import ListingDetails from "./components/properties/ListingDetails";
import Update from "./components/properties/Update";


function App() {
  return (
    <div className="container-fluid">
      <Router>
        <Routes>
          <Route path="/" element={<ListingContainer />} />
          <Route path="/listings" element={<ListingContainer />} />
          <Route path="/update" element={<Update />} />
          <Route path="/details/:id" element={<ListingDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
