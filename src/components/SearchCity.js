import { RESTO_LIST_URL } from '../utils/constants';
import React, { useState } from 'react';
import styles from "./SearchCity.module.css";
import location from "../assets/location.webp";
import Modal from './Modal';
function SearchCity({ setCoordinates,setRestoListUrl,setRestaurantList,offset,setOffset }) {
  const [placeName, setPlaceName] = useState('');
  const [showModal, setShowModal] = useState(false);
  const handleInputChange = (event) => {
    setPlaceName(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const url = `https://nominatim.openstreetmap.org/search?q=${placeName}&format=json&limit=1`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data)
  
      if (data.length === 0 || data[0].addresstype !== "local_authority" && data[0].addresstype !== "city") {
        // alert('Please Enter a Valid City Name For Orders');
        console.log( data[0].addresstype)
        setShowModal(true)
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
    <>
       
 {showModal && <Modal message="Please enter a valid city name for orders" onClose={() => setShowModal(false)} />}
    <form onSubmit={handleFormSubmit} className={styles.citySearchContainer}>
      <img src={location} alt="location" />
      <input type="search" value={placeName} onChange={handleInputChange} placeholder="Search for your Location"/>
      <button type="submit">Search Your Location</button>
    </form>
    </>
  );
}

export default SearchCity;





