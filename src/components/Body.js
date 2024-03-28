import React, { useState, useEffect } from 'react';
import { useFetch } from '../utils/hooks/useFetch';
import { RESTO_LIST_URL } from '../utils/constants';
import RestaurantCard from './RestaurantCard';
import styles from './RestaurantCard.module.css';
import Shimmer from './Shimmer';
import Slider from './Slider';
import { Link } from 'react-router-dom';
import Error from './Error';
import Filter from './Filter';
import SearchCity from './SearchCity';

function Body() {
  const [coordinates, setCoordinates] = useState({ lat: 19.159014, lng: 72.9985686 });
  // const [restoListUrl, setRestoListUrl] = useState(`${RESTO_LIST_URL}?lat=${coordinates.lat}&lng=${coordinates.lng}&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING`);
  const [restoListUrl, setRestoListUrl] = useState(`http://localhost:3001/api/restaurants?lat=${coordinates.lat}&lng=${coordinates.lng}&page_type=DESKTOP_WEB_LISTING`);
  const { data, isPending, error } = useFetch(restoListUrl);
  const [showShimmer, setShowShimmer] = useState(true);
  const [restaurantList, setRestaurantList] = useState([]);
  // const [offset, setOffset] = useState(15);
  const [sortBy, setSortBy] = useState('RELEVANCE');

  // useEffect(() => {
  //   if (data?.data?.cards) {
  //     setRestaurantList(prevList => [...prevList, ...data?.data?.cards]);
      
  //   }
  // }, [data]);


  useEffect(() => {
    setRestaurantList([]);
    // setOffset(15); 
    //setRestoListUrl(`${RESTO_LIST_URL}?lat=${coordinates.lat}&lng=${coordinates.lng}&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING`);
   
  }, [coordinates]);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollHeight = document.documentElement.scrollHeight;
  //     const scrollTop = document.documentElement.scrollTop;
  //     const clientHeight = document.documentElement.clientHeight;

  //     if (scrollTop + clientHeight >= scrollHeight) {
  //       if (restaurantList) {
  //         console.log("offset block")
  //         setOffset(prevOffset => prevOffset + 15);
  //         setRestoListUrl(
  //           `${RESTO_LIST_URL}?lat=${coordinates.lat}&lng=${coordinates.lng}&offset=${offset}&sortBy=${sortBy}&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING`
  //         );
         
  //       }
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, [restaurantList, coordinates.lat, coordinates.lng, offset,sortBy]);

  useEffect(() => {
    if (data) {
      setShowShimmer(false);
      setRestaurantList(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    console.log("6444",data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }, [data]);

  console.log(restaurantList);
  return (
    <>
      <Slider />
      {/* <SearchCity setCoordinates={setCoordinates} setRestoListUrl={setRestoListUrl} setRestaurantList={setRestaurantList} offset={offset} setOffset={setOffset}  /> */}
      {/* <Filter setRestoListUrl={setRestoListUrl} setRestaurantList={setRestaurantList} coordinates={coordinates} setSortBy={setSortBy} offset={offset} setOffset={setOffset}/> */}
      <div className={styles.cards}>
        {error && <Error error={error} />}
        {restaurantList.map((restaurant, index) => (
          <Link
            to={'/restaurant/' + restaurant?.data?.data?.id}
            key={restaurant?.info?.id}
            className={styles.card}
          >
            <RestaurantCard restaurant={restaurant?.info} />
          </Link>
        ))}
        {showShimmer && <Shimmer />}
        {isPending && !showShimmer  && <Shimmer />}
       </div>
     </>
   );
 }
 export default Body;