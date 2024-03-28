import { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { clearCart, addItem, removeItem } from "../utils/cartSlice";
import styles from "./Cart.module.css";
import { AppContext } from "../App";
import cartEmpty1 from "../assets/cartEmpty1.png";
import empty1 from "../assets/empty1.png";
import {useNavigate,Link} from "react-router-dom";

export default function Cart() {
    const dispatch = useDispatch();
    const {isModalOpen,setIsModalOpen,isSignedUp,setIsSignedUp,isLoggedin,setIsLoggedin,user,setUser} = useContext(AppContext);
    const cartItems = useSelector((store) => store.cart.items);
    const totalQuantity = useSelector((store) => store.cart.totalQuantity);
    const totalAmount = useSelector((store) => store.cart.totalAmount);
    const [loginAlert, setLoginAlert] = useState(false);
    const [cartEmptyAlert,setCartEmptyAlert] = useState(false);

    const navigate = useNavigate()

    const handleClearCart = () => {
        dispatch(clearCart());
    };
    const handleAddItem = (item) => {
        dispatch(addItem(item));
    };
    const handleRemoveItem = (itemId) => {
        dispatch(removeItem(itemId));
    };
    const handleModal = ()=>{
      setIsModalOpen(true);
      setLoginAlert(false);
    }

    function handleCheck(){
        if(user === "Guest"){
        //    console.log(user);
           setLoginAlert(true);
        }else{
            if(cartItems.length===0){
                setCartEmptyAlert(true);
            }else{
                //alert("welcome to payment page");
                navigate("/payment");
            }
           
        }
    }

    return (
        <div className={styles.cartPage}>
            <div className={styles.cartItemContainer}>
                <h1>Cart Items</h1>
                <div className={styles.clearCart}>
                    <button onClick={() => handleClearCart()} className={styles.clearCartBtn}>Clear Cart</button>
                </div>
                <div className={styles.cartDetailContainer}>

                    {cartItems.length? cartItems.map((item) => (
                        console.log({...item}),
                        <CartItem
                            key={item?.card?.info?.id}
                            {...item}
                            onAdd={() => handleAddItem(item)}
                            onRemove={() => handleRemoveItem(item?.card?.info?.id)}
                        />
                    )) :
                    <div className={styles.emptycart}>
                        <img src={empty1} className={styles.emptyImg}/>
                        <Link to="/"><button className={styles.restaurantNearBtn}>SEE RESTAURANTS NEAR YOU</button></Link>
                    </div>
                     }
                </div>
                <div className={styles.cartSummary}>
                    <p>Total Items: <b> {totalQuantity} </b></p>
                    <p>Total Amount :<b> ₹{totalAmount/100}</b></p>
                </div>
                <div className={styles.paymentBtnContainer}>
                <p>Total Bill:<b> ₹{totalAmount/100}</b></p>
                <button onClick={handleCheck}>PROCEED TO PAYMENT</button>
                </div>
            </div>

            {loginAlert && <div className={styles.loginAlert}>
                <div className={styles.closeIcon}><i class="fa-solid fa-xmark" onClick={()=>setLoginAlert(false)}></i></div>
                 <h1> Please <button onClick={handleModal}>Login</button> To Continue </h1>
               </div>}
            {cartEmptyAlert && <div className={styles.loginAlert}>
                <div className={styles.closeIcon}><i class="fa-solid fa-xmark" onClick={()=>setCartEmptyAlert(false)}></i></div>
                 <h1 style={{fontSize:"1.5rem"}}>Ooppssss!!! Your Cart is Empty </h1>
                 <img src={cartEmpty1} alt="cartEmpty" />
               </div>}
        </div>
    );
}



//--------------------------------------------------------------------------------------------------
