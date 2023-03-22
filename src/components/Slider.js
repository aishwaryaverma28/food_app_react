import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import fishImg from "../assets/fish-fry.jpg"
import pizzaImg from "../assets/pizza.jpg"
import platterImg from "../assets/platter.jpg"
import "./Slider.css";
function Slider() {
    return (
        <div className='main_body'>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100 carousal_img"
                        src={fishImg}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Dont Starve Just Order!!</h3>
                        <p>Cuisine Compass - your passport to global cuisine!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousal_img"
                        src={pizzaImg}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Treat Yourself to a Good Meal!!</h3>
                        <p>Cuisine Compass: navigating your hunger, one meal at a time</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousal_img"
                        src={platterImg}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>50% off On First Order🎁</h3>
                        <p>
                        Let Cuisine Compass be your guide to delicious meals!
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Slider