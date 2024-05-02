import { useState, useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
// import logo1 from "../assets/logo1.png";
// import cuisineCompass from "../assets/cuisineCompass.png";
import { useSelector, useDispatch } from "react-redux";
import { AppContext } from "../App";
import { clearCart } from "../utils/cartSlice";
// import Signup from "./Signup";
import useOnline from "../utils/hooks/useOnline";

export default function BelowHeader() {
    const {isModalOpen,setIsModalOpen,isSignedUp,setIsSignedUp,isLoggedin,setIsLoggedin,user,setUser} = useContext(AppContext);
    const isOnline = useOnline(); // used custom hook
    const dispatch = useDispatch();
    function handleModal(){
        setIsModalOpen(true);
       }
       function handleToggle(){
        setIsLoggedin(!isLoggedin);
        setUser("Guest");
        dispatch(clearCart());
       }
    return (
        <div className="below_bar">
            <Link to="/"><i className="fa-solid fa-house"></i> Home</Link>
            <Link to="/about"><i className="fa-solid fa-circle-info"></i> About </Link>
            <Link to="/contact"><i className="fa-solid fa-phone"></i> Contact </Link>
            {isLoggedin? <Link style={{marginBottom:"0rem"}} onClick={handleToggle}>Logout <span className="online">{isOnline? "🟢" : "🔴"}</span> </Link> : <Link  onClick={handleModal}>Login <span className="online">{isOnline? "🟢" : "🔴"}</span></Link> }
        </div>
    )
}