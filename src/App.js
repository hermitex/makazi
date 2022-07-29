import './App.css';
import ListingContainer from './components/properties/ListingContainer';
import Search from './components/search/Search';

function App() {
  return (
    <div className="container-fluid">
      <Search/>
      <ListingContainer/>
    </div>
  );
}

export default App;
