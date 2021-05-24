import React, { useEffect, useState } from "react";
import { Container, ProductContainer, Title } from "./style";

import Header from "./../../components/header/index";
import Banner from "./../../components/banner/index";
import Product from "./../../components/product/index";
import NewsLetter from "./../../components/newsletter/index";
import Footer from "./../../components/footer/index";

import { IProduct } from "./../../Models/product.interface";
import ProductService from "./../../service/product.service";

import { ProductProvider } from './../../context/product'

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
        <ProductProvider>
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
        </ProductProvider>
    );
}

export default App;
