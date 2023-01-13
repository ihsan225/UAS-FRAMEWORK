import "../styles/HeroImg.css";

import React from 'react';
import IntroImg from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";
import Product from "./Product";
import { Button, Card } from "react-bootstrap";
import img1 from "../assets/product/1.jpg";
const handleClick = () => handleClick();
const HeroImgs = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img className="into-img" src={IntroImg} alt="IntroImg" />
                <Product />
            </div>
            <div className="hrcontent">
                <div className="container bg-transparent">
                <h1>HI, WELCOME TO SKYLIGHT BOOK</h1>
                <h1>Pilih Genre Favoritmu, dan Pinjam di Kami</h1>
               </div>
               </div>
            </div>
    

    )
}

export default HeroImgs;