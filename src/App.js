import "./App.css";
import ListingContainer from "./components/properties/ListingContainer";
import Search from "./components/search/Search";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewListingForm from "./components/NewListing/NewListingForm";
import ListingDetails from "./components/properties/ListingDetails";
import Update from "./components/properties/Update";
import NewListing from "./components/NewListing/NewListing";
import Navigation from "./components/navigation/Navigation";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Home from "./components/home/Home";
import BlogEditor from "./components/editor/BlogEditor";


function App() {
  return (
    <div className="">
      <Router>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listings" element={<ListingContainer />} />
          <Route path="/update" element={<Update />} />
          <Route path="/details" element={<ListingDetails />} />
          <Route path="/new" element={<NewListing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/new-blog" element={<BlogEditor />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
