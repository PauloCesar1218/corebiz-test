import React, {useContext} from "react";
import { ProductContainer } from "./style";
import Star from "./../../assets/images/star.png";
import EmptyStar from "./../../assets/images/empty_star.png";
import { IProduct } from "../../Models/product.interface";
import { normalizePrice } from '../../utils/normalizePrice';
import ProductContext from "./../../context/product";

interface IProductStars {
    numberOfStars: number;
}
const ProductStars = ({ numberOfStars }: IProductStars) => {
    const amountOfStars = 5;

    return (
        <section className="productInfo__stars">
            {Array.from(Array(amountOfStars), (e, i) => {
                return numberOfStars > i ? <img src={Star} alt="Full star" key={i}/> : <img src={EmptyStar} alt="Empty star" key={i}/>
            })}
        </section>
    );
};

const Product: React.FC<IProduct> = ({
    productId,
    productName,
    imageUrl,
    stars,
    listPrice,
    price,
    installments,
}) => {
    const { sendProductToCart } = useContext(ProductContext)
    return (
        <ProductContainer>
            <img src={imageUrl} alt={productName} className="productImage" />
            {listPrice ? <div className="productOnSale">
                <span>OFF</span>
            </div> : <></>}
            <div className="productInfo">
                <div>
                    <span className="productInfo__name">{productName}</span>
                    <ProductStars numberOfStars={stars} />
                    {listPrice ? <span className="productInfo__listPrice">de R$ {normalizePrice(listPrice)}</span> : <></>}
                </div>
                <div>
                    <span className="productInfo__price">por R$ {normalizePrice(price)}</span>
                    {installments.length ? (
                        <span className="productInfo__installments">
                            ou em {installments[0].quantity}x de R${normalizePrice(installments[0].value)}
                        </span>
                    ) : (
                        <span className="productInfo__installmentsHidden">Parcelas</span>
                    )}
                    <button className="productInfo__buyButton" onClick={() => sendProductToCart()}>COMPRAR</button>
                </div>
            </div>
        </ProductContainer>
    );
};

export default Product;
