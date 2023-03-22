import { useState, useEffect, useContext } from "react";
import styles from "./Signup.module.css";
import userfemale from "../assets/userfemale.jpg";
import usermale from "../assets/usermale.jpg";
import { TextField } from '@mui/material';
import { AppContext } from "../App";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {isModalOpen,setIsModalOpen,isSignedUp,setIsSignedUp,isLoggedin,setIsLoggedin,user,setUser} = useContext(AppContext);

  
    const handleLogin = () => {
      const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
      const user = existingUsers.find((user) => user.username === username && user.password === password);
  
      if (user) {
        // alert('Login successful!');
        setUser(user.username);
        setIsModalOpen(false);
        setIsLoggedin(true);
        // Perform any additional actions needed for successful login
      } else {
        alert('Incorrect username or password!');
        setIsModalOpen(true);
        setIsLoggedin(false);
        // Perform any additional actions needed for unsuccessful login
      }
  
      // Reset the form inputs
      setUsername('');
      setPassword('');
    };
  
    return (
      <div>
        <div className={styles.signUp}>
        <h2 className={styles.signupHeading}>Login</h2>
        <div className={styles.signupbody}>
          <div className={styles.imgContainer}>
            <img src={usermale} alt="usericon" className={styles.userImg} />
            <img src={userfemale} alt="usericon" className={styles.userImg} />
          </div>
          <TextField id="outlined-basic" label="Enter Username" variant="outlined" type="text" value={username} onChange={(e) => setUsername(e.target.value)} className={styles.input} />
          <TextField id="outlined-basic1" label="Enter Password" variant="outlined" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className={styles.input} />

          <button onClick={handleLogin} className={styles.loginbtn}>Login</button>

          <p>Login to Visit our Website</p>
          <button className={styles.loginText1}>Enjoy the Food</button>
        </div>
        </div>

      </div>
    );
  };

  export default Login;