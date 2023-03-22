import React, { useState, useEffect } from "react";
import 'react-credit-cards/es/styles-compiled.css';
import Cards from 'react-credit-cards';
import styles from './PaymentCard.module.css';
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

export default function PaymentCard() {
  const dispatch = useDispatch();
  const [number, setNumber] = useState('4545');

  const [name, setName] = useState('');

  const [expiry, setExpiry] = useState('');

  const [cvc, setCvc] = useState('');

  const [focus, setFocus] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const navigate = useNavigate();
  const totalAmount = useSelector((store) => store.cart.totalAmount);

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  useEffect(() => {
    let timerId;
    if (showSuccess) {
      timerId = setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    }
    return () => {
      clearTimeout(timerId);
    };
  }, [showSuccess]);
  function handlePayment() {
    if (number && cvc && name && expiry)
      setShowSuccess(true);
    setTimeout(() => {
      navigate("/success");
    }, 2000);
    dispatch(clearCart());
  }

  return (
    <div className={styles.payment}>
      <div className={styles.container}>
        <h3 className={styles.paymentHeading}>Please Fill your card Details</h3>
        <div className={styles.flexContainer}>

          <div className={styles.leftPaymntContainer}>
            <Cards
              cvc={cvc}
              expiry={expiry}
              focused={focus}
              name={name}
              number={number}
            />
            <p className={styles.totalAmountPay}>Total Amount to be Paid: <b style={{ color: "rgb(17,128,189)" }}>  ₹{totalAmount / 100} </b></p>
          </div>

          <div className={styles.rightPaymntContainer}>
            <form className={styles.paymentForm} onSubmit={handleSubmit}>

              <input
                type="tel"
                name="number"
                val={number}
                placeholder={"xxxx-xxxx-xxxx-xxxx"}
                onChange={e => setNumber(e.target.value)}
                onFocus={e => setFocus(e.target.name)}
                required maxLength="16"
                autoComplete="off"
              />

              <input
                type="text"
                name="name"
                val={name}
                placeholder={"Name of card holder"}
                onChange={e => setName(e.target.value)}
                onFocus={e => setFocus(e.target.name)}
                required 
              />
              <div className={styles.cvvNum}>

                <input
                  type="tel"
                  name="expiry"
                  val={expiry}
                  placeholder={"MM/YY"}
                  onChange={e => setExpiry(e.target.value)}
                  onFocus={e => setFocus(e.target.name)}
                  required maxLength="4"
                />

                <input
                  type="password"
                  name="cvc"
                  val={cvc}
                  placeholder={"cvv"}
                  onChange={e => setCvc(e.target.value)}
                  onFocus={e => setFocus(e.target.name)}
                  required maxLength="3"
                />
              </div>
              {/* <input type="submit" value="Proceed to checkout" className={styles.paymentBtn} onClick={handlePayment}/> */}
             </form>
             <div className={styles.diffBtn}>
             <Link to="/cart"> <button className={styles.cancelBtn}>Cancel Payment</button></Link>
            <button className={styles.paymentBtn} onClick={handlePayment}>Proceed to Payment</button>
            {showSuccess && 
            <div className={styles.paymentPopup}>
              Payment SuccessFul!! &#9989;
            </div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

