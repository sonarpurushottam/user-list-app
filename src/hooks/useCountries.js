import { useState, useEffect } from "react";
import { fetchCountries } from "../api/api";

// Custom hook to fetch and manage the list of countries
export const useCountries = () => {
  // State to store the list of countries
  const [countries, setCountries] = useState([]);

  // Effect to fetch countries when the component mounts
  useEffect(() => {
    // Function to load countries from the API
    const loadCountries = async () => {
      const uniqueCountries = await fetchCountries();
      setCountries(uniqueCountries);
    };

    // Call the function to load countries
    loadCountries();
  }, []); // Empty dependency array ensures this runs only once

  // Return the list of countries
  return countries;
};
