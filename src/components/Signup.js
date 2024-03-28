import { useState, useEffect, useContext } from "react";
import Login from "./Login";
import styles from "./Signup.module.css";
import userfemale from "../assets/userfemale.jpg";
import usermale from "../assets/usermale.jpg";
import { TextField } from '@mui/material';
import { AppContext } from "../App";

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {isModalOpen,setIsModalOpen,isSignedUp,setIsSignedUp,isLoggedin,setIsLoggedin,user,setUser} = useContext(AppContext);


  useEffect(() => {
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = existingUsers.some(user => user.username === username);

    if (userExists) {
      alert('Username already exists!');
    }
  }, [username]);

  const handleSignup = () => {
    const userData = {
      username,
      password,
    };

    // Retrieve the existing user data from local storage
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Add the new user data to the end of the existing array
    const updatedUsers = [...existingUsers, userData];

    // Store the updated user data back in local storage
    if(userData.username !== "" && userData.password !== ""){
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    }

    // Reset the form inputs
    setUsername('');
    setPassword('');
    setIsSignedUp(true);

  };

  function handleLogin() {
    setIsSignedUp(true);
  }

  return (
    <div className={styles.signupPage}>
      <div className={styles.signupContainer}>
        <div onClick={() => setIsModalOpen(false)} className={styles.close}><i class="fa-solid fa-xmark"></i></div>

        <div className={styles.signAndLogin}>
          <div className={styles.signUp}>
        <h2 className={styles.signupHeading}>Create an Account</h2>
        <div className={styles.signupbody}>
          <div className={styles.imgContainer}>
            <img src={usermale} alt="usericon" className={styles.userImg} />
            <img src={userfemale} alt="usericon" className={styles.userImg} />
          </div>
          <TextField id="outlined-basic" label="Enter Username" variant="outlined"  value={username} onChange={(e) => setUsername(e.target.value)} className={styles.input} />
          <TextField id="outlined-basic1" label="Enter Password" variant="outlined"  value={password} onChange={(e) => setPassword(e.target.value)} className={styles.input} />

          <button onClick={handleSignup} className={styles.btn}>Signup</button>
           
          <p>Already a member?</p>
          <button onClick={handleLogin} className={styles.loginText}>Login</button>
        </div>
        </div>
        <div className={styles.signUp}>
        {isSignedUp ? <Login/> : <img src="https://img.traveltriangle.com/blog/wp-content/uploads/2018/12/cover-for-street-food-in-sydney.jpg" className={styles.foodImg}/>}
        </div>
        </div>
      </div>
    </div>
  );
};
export default Signup; 