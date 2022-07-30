import { useEffect, useState } from "react";

function useFetch(url, options = {}) {
  const [listings, setListings] = useState(null);
  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((listings) => setListings(listings));
  }, []);

  // function accessor(url, options) {
    
  // }

  return [listings];
}

export default useFetch;
