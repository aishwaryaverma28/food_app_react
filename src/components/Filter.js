

import React from 'react';
import { RESTO_LIST_URL } from '../utils/constants';
import './Filter.css';

function Filter({ setRestoListUrl, setRestaurantList, coordinates, setSortBy,offset,setOffset }) {
  const handleFilterClick = (sortBy) => {
    setRestaurantList([]);
    setSortBy(sortBy);
    setOffset(15)
    setRestoListUrl(
      `${RESTO_LIST_URL}?lat=${coordinates.lat}&lng=${coordinates.lng}&offset=${offset}&sortBy=${sortBy}&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING`
    );
  };

  return (
    <div className='filterContainer'>
      <h5 style={{ cursor: 'pointer' }} onClick={() => handleFilterClick('DELIVERY_TIME')}>
        Delivery Time
      </h5>
      <h5 style={{ cursor: 'pointer' }} onClick={() => handleFilterClick('COST_FOR_TWO')}>
        Cost:Low To High
      </h5>
      <h5 style={{ cursor: 'pointer' }} onClick={() => handleFilterClick('COST_FOR_TWO_H2L')}>
        Cost:High To Low
      </h5>
       <h5 style={{ cursor: 'pointer' }} onClick={() => handleFilterClick('RATING')}>
        Rating
      </h5>
      <h5 style={{ cursor: 'pointer' }} onClick={() => handleFilterClick('RELEVANCE')}>
        Relavence
      </h5>
    
    </div>
  );
}

export default Filter;



