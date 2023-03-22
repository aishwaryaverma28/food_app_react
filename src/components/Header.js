import { useState, useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
// import logo1 from "../assets/logo1.png";
import cuisineCompass from "../assets/cuisineCompass.png";
import { useSelector, useDispatch } from "react-redux";
import { AppContext } from "../App";
import { clearCart } from "../utils/cartSlice";
import Signup from "./Signup";
import useOnline from "../utils/hooks/useOnline";

export default function Header() {
    const [isOpenSidebar, setIsOpenSidebar] = useState(false);
    const dispatch = useDispatch();
    const {isModalOpen,setIsModalOpen,isSignedUp,setIsSignedUp,isLoggedin,setIsLoggedin,user,setUser} = useContext(AppContext);
    const isOnline = useOnline(); // used custom hook
    const totalQuantity = useSelector((store) => store.cart.totalQuantity);
    const cartItems = useSelector((store) => store.cart.items);
   const totalAmount = useSelector((store) => store.cart.totalAmount);

    function handleClickSidebar() {
        setIsOpenSidebar(!isOpenSidebar);
    }
    function handleModal(){
        setIsModalOpen(true);
       }
   
      function handleToggle(){
       setIsLoggedin(!isLoggedin);
       setUser("Guest");
       dispatch(clearCart());
      }
      function handleSideModal(){
        setIsModalOpen(true);
        setIsOpenSidebar(false);
      }
   
     

    return (
        <div className="header">
            <a href="/" className="logo_container">
                <img src={cuisineCompass} alt="logo" className="logo" />
            </a>
            {user && <p className="user_name">Welcome <b> {user} </b>!!!</p> } 
            <div className="nav_items_container">
                <ul>
                    <Link to="/" className="nav_items"> <li>   Home  </li> </Link>
                    <Link to="/about" className="nav_items"><li>  About  </li></Link>
                    <Link to="/contact" className="nav_items"> <li>Contact </li></Link>
                    <Link to="/cart" className="nav_items cart"> <li>Cart <span className="cart_digit">{totalQuantity}</span></li></Link>
                    {isLoggedin? <button className="nav_items nav_btn" onClick={handleToggle}>Logout <span className="online">{isOnline? "🟢" : "🔴"}</span> </button> : <button className="nav_items nav_btn" onClick={handleModal}>Login <span className="online">{isOnline? "🟢" : "🔴"}</span></button> }
                    
                </ul>
            </div>
            <i class="fa-solid fa-bars" onClick={handleClickSidebar}></i>

            <nav className={isOpenSidebar ? 'sidebar_nav_menu active' : 'sidebar_nav_menu'}>
                <ul className='sidebar_nav_menu_items'>
                    <li className='sidebar_close_toggle' onClick={handleClickSidebar}>
                        <i class="fa-solid fa-xmark"></i>
                    </li>

                    
                    <ul className="sidebar_item_container">
                        <Link to="/" className="sidebar_nav_items"> <li> <i class="fa-solid fa-house"></i> Home  </li> </Link>
                        <Link to="/about" className="sidebar_nav_items"><li><i class="fa-solid fa-circle-info"></i> About  </li></Link>
                        <Link to="/contact" className="sidebar_nav_items"> <li><i class="fa-solid fa-phone"></i> Contact </li></Link>
                        <Link to="/cart" className="sidebar_nav_items cart"> <li><i class="fa-solid fa-cart-shopping"></i> Cart <span className="cart_digit"> {totalQuantity}</span></li></Link>
                        {isLoggedin? <button className="sidebar_nav_items nav_btn" onClick={handleToggle}>Logout <span style={{fontSize:".7rem",background:"transparent",border:"none"}}>{isOnline? "🟢" : "🔴"}</span> </button> : <button className="sidebar_nav_items nav_btn" onClick={handleSideModal}>Login <span style={{fontSize:".7rem",background:"transparent",border:"none"}}>{isOnline? "🟢" : "🔴"}</span></button> }
                    
                    </ul>
                   

                </ul>
            </nav>

{/*------------------------------------------SIGNUP MODAL DETAILS-------------------------- */}
            {isModalOpen && <Signup/>} 
               
        </div>
    )
}