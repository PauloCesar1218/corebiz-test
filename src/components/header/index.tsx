import React, { useContext } from "react";
import Logo from "./../../assets/images/logo.png";
import Users from "./../../assets/images/user.png";
import Cart from "./../../assets/images/cart.png";
import SearchIcon from "./../../assets/images/search.png";
import { HeaderContainer } from "./style";
import ProductContext from "./../../context/product";

const Header: React.FC = () => {
    const { cart } = useContext(ProductContext)
    return (
        <HeaderContainer>
            <img src={Logo} alt="logo" className="logo" />
            <div className="search-bar">
                <input placeholder="O que está procurando?" />
                <img src={SearchIcon} alt="logo" className="logo" />
            </div>
            <div className="options">
                <div>
                    <img src={Users} alt="logo" className="logo" />
                    <span>Minha Conta</span>
                </div>
                <div className="options__cart">
                    <img src={Cart} alt="logo" className="logo" />
                    <span className="options__cart--counter">{cart}</span>
                </div>
            </div>
        </HeaderContainer>
    );
};

export default Header;
