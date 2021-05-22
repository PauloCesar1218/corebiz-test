import React from "react";
import { Product } from "./style";
import Star from "./../../assets/images/star.png";
import EmptyStar from "./../../assets/images/empty_star.png";
import { IProduct } from "../../Models/product.interface";

interface IProductStars {
    numberOfStars: number;
}
const ProductStars = ({ numberOfStars }: IProductStars) => {
    const amountOfStars = 5;

    return (
        <div className="productInfo__stars">
            {Array.from(Array(amountOfStars), (e, i) => {
                return numberOfStars > i ? <img src={Star} alt="Full star" key={i}/> : <img src={EmptyStar} alt="Empty star" key={i}/>
            })}
        </div>
    );
};

const product: React.FC<IProduct> = ({
    productId,
    productName,
    imageUrl,
    stars,
    listPrice,
    price,
    installments,
}) => {
    return (
        <Product>
            <img src={imageUrl} alt={productName} className="productImage" />
            <div className="productInfo">
                <span className="productInfo__name">{productName}</span>
                <ProductStars numberOfStars={stars} />
                {listPrice ? <span className="productInfo__listPrice">de R$ {listPrice}</span> : <></>}
                <span className="productInfo__price">por R$ {price}</span>
                {installments.length ? (
                    <span>
                        ou em {installments[0].quantity}x de R${installments[0].value}
                    </span>
                ) : (
                    <></>
                )}
                <button className="productInfo__buyButton">COMPRAR</button>
            </div>
        </Product>
    );
};

export default product;
