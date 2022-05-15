import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, {Component} from "react";
import Slider from "react-slick";
import './Menu.css';
import { useNavigate } from "react-router-dom";

const Menu = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: false,
        autoplaySpeed: 1000,
        centerMode: true,
        arrows: false,
        vertical: true,
        verticalSwiping: true,

    };
    let navigate = useNavigate();
    return (
        <div className="Slide">
            <Slider {...settings}>
            <button className="BtnMenu" onClick={() => {navigate("/Fatiha")}}>Al Fatiha (The Opening)</button>
            <button className="BtnMenu">Al Fil (The Elephant)</button>
            <button className="BtnMenu">Quraish (People of Quraish)</button>
            <button className="BtnMenu">Al Maa'un (Almsgiving)</button> 
            <button className="BtnMenu">Al Kawthar (Abundance)</button>
            <button className="BtnMenu">Al Kaafiroon (The Disbelievers)</button>
            <button className="BtnMenu">An Nasr (Divine Support)</button>
            <button className="BtnMenu">Al Masad (The Palm Fibre)</button>
            <button className="BtnMenu">Al Ikhlaas (Sincerity)</button>
            <button className="BtnMenu">Al Falaq (The Dawn)</button>
            <button className="BtnMenu">An Naas (Mankind)</button>
        </Slider>


        </div>

    );
}

export default Menu;