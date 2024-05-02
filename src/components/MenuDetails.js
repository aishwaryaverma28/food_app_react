import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../utils/hooks/useFetch";
import { MENU_LIST_URL } from "../utils/constants";
import { IMG_BASE_URL } from "../utils/constants";
import discountLogo from "../assets/discount.png";
import Shimmer from "./Shimmer";
import foodPlaceholder from "../assets/restaurant.png";
import styles from "./RestaurantCard.module.css";
import "./MenuDetailsBanner.css";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import "./Filter.css"

function MenuDetails() {
  const { id } = useParams();
  const { data, isPending, error } = useFetch(
    `https://food-app-be-i13l.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=19.159014&lng=72.9985686&submitAction=ENTER&restaurantId=${id}`
  );
  const restoData = data?.data;
  const [searchTerm, setSearchTerm] = useState("");
  const [addedItems, setAddedItems] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [titleObjects, setTitleObjects] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedTab, setSelectedTab] = useState(null);

  const handleTabClick = (title,itemcards) => {
    setSelectedTab(title);
    console.log(title)
    let filterItems = (itemcards || []
    ).filter((item) =>
      item?.card?.info?.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(filterItems);
  };

  useEffect(() => {
    if (data) {
      const regularCards = data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
      const filteredTitleObjects = regularCards.filter(card => card?.card?.card?.title && card?.card?.card?.itemCards && card?.card?.card?.itemCards.length > 0);
      setTitleObjects(filteredTitleObjects);
         const filterItems = (
        data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
          ?.card?.itemCards || []
      ).filter((item) =>
        item?.card?.info?.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredItems(filterItems);
    }
  }, [data,searchTerm]);

  useEffect(() => {
    if (selectedTab && data) {
      const regularCards = data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
      const selectedTabData = regularCards.find(card => card?.card?.card?.title === selectedTab);
      const filterItems = (selectedTabData?.card?.card?.itemCards || []).filter((item) =>
        item?.card?.info?.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredItems(filterItems);
    }
  }, [selectedTab, data, searchTerm]);
  
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    console.log("search", event.target.value)
  };

  const dispatch = useDispatch();
  const addFoodItem = (item) => {
    dispatch(addItem(item));
    setAddedItems([...addedItems, item?.card?.info?.id]);
    console.log(addedItems);
    setShowSuccess(true);
  };
  const isAddedToCart = (itemId) => {
    return addedItems.includes(itemId);
  };
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);
  useEffect(() => {
    let timerId;
    if (showSuccess) {
      timerId = setTimeout(() => {
        setShowSuccess(false);
      }, 1000);
    }
    return () => {
      clearTimeout(timerId);
    };
  }, [showSuccess]);
  let random = (Math.random() * (5 - 3) + 3).toFixed(1);
  return (
    <div className="menu-details-container">
      {error && <p>{error}</p>}
      {isPending && <Shimmer />}
      {data && (
        <>
          <div className="menu-details-banner">
            <img
              className="menu-details-banner-image"
              src={
                IMG_BASE_URL +
                restoData?.cards[2]?.card?.card?.info?.cloudinaryImageId
              }
              alt={restoData.name}
            />

            <div className="menu-details-banner-info">
              <h1 className="menu-details-banner-title">
                {restoData?.cards[0]?.card?.card?.text}
              </h1>
              <h2 className="menu-details-banner-cuisines">
                {restoData?.cards[2]?.card?.card?.info?.cuisines.join(", ")}
              </h2>
              <h2 className="menu-details-banner-location">
                {restoData?.cards[2]?.card?.card?.info?.city},{" "}
                {restoData?.cards[0]?.card?.card?.info?.areaName}
              </h2>

              <div className="menu-details-banner-down">
                <div className="menu-details-banner-down-content">
                  {/* <p><i class="fa-solid fa-star" style={{ color: "white", fontSize: ".8rem", marginRight: ".3rem" }}></i>{restoData?.cards[2]?.card?.card?.info?.avgRating}</p> */}
                  <p
                    className={
                      restoData?.cards[2]?.card?.card?.info?.avgRating > 4 ||
                        random > 4
                        ? styles.infoItemTop
                        : styles.infoItemPoor
                    }
                  >
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "white", fontSize: ".7rem" }}
                    ></i>{" "}
                    {restoData?.cards[2]?.card?.card?.info?.avgRating > 4
                      ? restoData?.cards[2]?.card?.card?.info?.avgRating
                      : random}
                  </p>
                </div>
                <div style={{ color: "gray" }}>|</div>
                <div className="menu-details-banner-down-content">
                  <p>
                    {restoData?.cards[2]?.card?.card?.info?.costForTwoMessage}
                  </p>
                </div>
              </div>
            </div>

            <div className="menu-details-banner-offers">
              {restoData?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers
                .slice(0, 2)
                .map((offer) => (
                  <div key={offer.id} className="menu-details-banner-offer">
                    <img
                      className="menu-details-banner-offer-image"
                      src={discountLogo}
                      alt="Offer"
                    />
                    <div className="menu-details-banner-offer-info">
                      <h1 className="menu-details-banner-offer-header heading1">
                        {offer?.info?.header}
                      </h1>
                      <h2 className="menu-details-banner-offer-code heading1">
                        COUPON CODE: {offer?.info?.couponCode}
                      </h2>
                      <h2 className="menu-details-banner-offer-description heading1">
                        APPLIES FOR: {offer?.info?.description}
                      </h2>
                    </div>
                  </div>
                ))}
            </div>
          </div>          
            <div className='filterContainer'>
              {titleObjects.map((titleObj, index) => (
                <div className="h5Container">
                <h5 key={index} onClick={() => handleTabClick(titleObj.card.card.title,titleObj?.card?.card?.itemCards)}>
                  {titleObj.card.card.title}
                </h5>
                </div>
              ))}
            </div>
          <div className="menu-details-search">
            <input
              type="search"
              placeholder="Search for your favourite dishes"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>

          <div className="menu-details-item-container">
            {filteredItems.map((item) => {
              const itemImg = item?.card?.info?.imageId
                ? IMG_BASE_URL + item?.card?.info?.imageId
                : foodPlaceholder;
              const price =
                item?.card?.info?.price ||
                item?.card?.info?.defaultPrice ||
                (Math.random() * (5 - 3) + 3).toFixed(1) * 100;
              return (
                <div key={item?.card?.info?.id} className="menu-details-item">
                  <h2 className="menu-details-item-name heading1">
                    {item?.card?.info?.name}
                  </h2>
                  <img
                    className="menu-details-item-image"
                    src={itemImg}
                    alt="menu-item"
                  />
                  <h2 className="menu-details-item-price heading1">
                    RS: {price / 100}/-
                  </h2>
                  {isAddedToCart(item?.card?.info?.id) ? (
                    <button className="menu-details-item-added-btn" disabled>
                      Added To Cart
                    </button>
                  ) : (
                    <button
                      className="menu-details-item-add-btn"
                      onClick={() => addFoodItem(item)}
                    >
                      Add
                    </button>
                  )}
                </div>
              );
            })}
            {showSuccess && (
              <div className="popup">Item added successfully!</div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default MenuDetails;
