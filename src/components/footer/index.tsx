import React from "react";
import { FooterContainer, FlexContainer } from "./style";
import VtexLogo from "./../../assets/images/logo-vtex.png";
import CoreBizLogo from './../../assets/images/logo-branca.png'
const footer: React.FC = () => {
    return (
        <FooterContainer>
            <FlexContainer>
                <div className="footerLocation">
                    <h3 className="footerLocation__title">Localizaçao</h3>
                    <ul className="footerLocation__addressInfo">
                        <li>Avenida Andrômeda, 2000. Bloco 6 e 8</li>
                        <li>Alphavile SP</li>
                        <li>brasil@corebiz.ag</li>
                        <li>+55 11 3090 1039</li>
                    </ul>
                </div>
                <div>
                    <div>
                        <img src="" alt="" />
                        <span>ENTRE EM CONTATO</span>
                    </div>
                    <div>
                        <img src="" alt="" />
                        <span>
                            FALE COM O NOSSO <br /> CONSULTOR ONLINE
                        </span>
                    </div>
                </div>
                <div className="footerLogos">
                    <div className="footerLogos__item">
                        <span>Created by</span>
                        <img src={CoreBizLogo} alt="Logo da Corebiz" className="footerLogos__item--corebiz" />
                    </div>
                    <div className="footerLogos__item">
                        <span>Powered by</span>
                        <img src={VtexLogo} alt="Logo da Vtex" className="footerLogos__item--vtex" />
                    </div>
                </div>
            </FlexContainer>
        </FooterContainer>
    );
};

export default footer;
