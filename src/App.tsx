import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Header from "./components/header/index";
import Banner from "./components/banner/index";
import Product from "./components/product/index";
import NewsLetter from "./components/newsletter/index";
import Footer from "./components/footer/index";

import { IProduct } from "./Models/product.interface";
import ProductService from "./service/product.service";

const Container = styled.section`
    width: 1240px;
    margin: 0 auto;
`;

// const ProductSlide = styled(Slider)`
//     position: relative;
//     width: 100%;
// `

const Title = styled.h2`
    font-size: 20px;
    font-weight: 900;
    color: #000;
    margin: 20px 0;

    &::after {
        content: "";
        display: block;
        height: 5px;
        width: 65px;
        background-color: #c0c0c0;
    }
`;

const ProductContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

function App() {
    const [products, setProducts] = useState<IProduct[]>([]);

    const getProducts = async () => {
        const products = await ProductService.GetProducts();
        setProducts(products.data);
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div>
            <Header />
            <Banner />
            <div>
                <Container>
                    <Title>Mais Vendidos</Title>
                    <ProductContainer>
                        {products.length ? (
                            products.map((product) => {
                                return (
                                    <Product
                                        {...product}
                                        key={product.productId}
                                    />
                                );
                            })
                        ) : (
                            <></>
                        )}
                    </ProductContainer>
                </Container>
            </div>
            <NewsLetter />
            <Footer />
        </div>
    );
}

export default App;
