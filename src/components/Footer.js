import React from 'react'
// import logo from "../assets/logo.png"
import "./Footer.css"
const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="icons">
                    <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="#"><i className="fa-brandsfa-instagram"></i></a>
                    <a href="#"><i className="fa-brands fa-twitter"></i></a>
                    <p className="company-name">
                        Mumbai Munch &copy; 2023, ALL Rights Reserved
                    </p>
                </div>
            </footer>
        </>
    )
}

export default Footer