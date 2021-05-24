import React from "react";
import BannerImg from "./../../assets/images/banner.png";
import { SliderContainer, BannerTextContainer } from "./style";

const Banner = () => {
    return (
        <div>
            <SliderContainer dots>
                <div className="banner-text">
                    <BannerTextContainer>
                        <p>Olá, o que você está buscando?</p>
                        <h2>Criar ou migrar seu<br/> e-commerce?</h2>
                    </BannerTextContainer>
                    <img src={BannerImg} alt="" />
                </div>
                <div className="banner-text">
                    <BannerTextContainer>
                        <p>Olá, o que você está buscando?</p>
                        <h2>Criar ou migrar seu<br/> e-commerce?</h2>
                    </BannerTextContainer>
                    <img src={BannerImg} alt="" />
                </div>
                <div className="banner-text">
                    <BannerTextContainer>
                        <p>Olá, o que você está buscando?</p>
                        <h2>Criar ou migrar seu<br/> e-commerce?</h2>
                    </BannerTextContainer>
                    <img src={BannerImg} alt="" />
                </div>
                <div className="banner-text">
                    <BannerTextContainer>
                        <p>Olá, o que você está buscando?</p>
                        <h2>Criar ou migrar seu<br/> e-commerce?</h2>
                    </BannerTextContainer>
                    <img src={BannerImg} alt="" />
                </div>
            </SliderContainer>
        </div>
    );
};

export default Banner;
