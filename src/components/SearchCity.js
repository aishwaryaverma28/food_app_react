import { RESTO_LIST_URL } from '../utils/constants';
import React, { useState } from 'react';
import styles from "./SearchCity.module.css";
import location from "../assets/location.webp";

function SearchCity({ setCoordinates,setRestoListUrl,setRestaurantList,offset,setOffset }) {
  const [placeName, setPlaceName] = useState('');

  const handleInputChange = (event) => {
    setPlaceName(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const url = `https://nominatim.openstreetmap.org/search?q=${placeName}&format=json&limit=1`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (data.length === 0) {
        alert('Invalid city name!');
      } else {
        const newCoordinates = { lat: data[0].lat, lng: data[0].lon };
        setCoordinates(newCoordinates);
        setRestaurantList([]);
        setOffset(15)
        setRestoListUrl(`${RESTO_LIST_URL}?lat=${newCoordinates.lat}&lng=${newCoordinates.lng}&offset=${offset}&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING`);
      }
    } catch (error) {
      console.log(error);
    }
  };
  

  return (

    <form onSubmit={handleFormSubmit} className={styles.citySearchContainer}>
      <img src={location} alt="location" />
      <input type="text" value={placeName} onChange={handleInputChange} placeholder="Search for your Location"/>
      <button type="submit">Search Your Location</button>
    </form>
  );
}

export default SearchCity;





