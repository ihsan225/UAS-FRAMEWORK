import "../styles/HeroImg.css";
import React from 'react';
import IntroImg from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img className="into-img" src={IntroImg} alt="IntroImg" />
            </div>
            <div className="hrcontent">
                <p>HI, Welcome to RENTAL BUKU <br/> Tempat Pinjam Buku Terlengkap se-umbul cabe </p>
                <h1>Silahkan Login Untuk Meminjam Buku</h1>
                <div className="button">
                    <Link to="/Login" className='btn'> Login </Link>
                </div>
            </div>
        </div>

    )
}

export default HeroImg;