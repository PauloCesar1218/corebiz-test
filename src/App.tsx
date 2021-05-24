import React, { useEffect, useState } from "react";
import Header from "./components/header/index";
import Product from "./components/product/index";
// import Banner from "./assets/images/banner.png";
import styled from "styled-components";
import { IProduct } from "./Models/product.interface";
import ProductService from "./service/product.service";
import NewsLetterService from './service/newsletter.service';
import { Colors } from "./assets/style/colors";
import Swal from "sweetalert2";
import Footer from './components/footer/index'
import Banner from './components/banner/index'

const Container = styled.section`
    width: 1240px;
    margin: 0 auto;
`;

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

const NewsLetter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 70px;
    background-color: ${Colors.lightGrey};
    .newsContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 24px;
        padding-bottom: 36px;
        h2 {
            font-size: 22px;
            font-weight: 700;
            color: ${Colors.darkerGrey};
        }
        &__form {
            display: flex;
            input {
                width: 280px;
                height: 48px;
                border: none;
                background: ${Colors.white};
                color: ${Colors.darkGrey};
                font-size: 12px;
                font-weight: 700;
                padding-left: 16px;
                border-radius: 5px;
                margin-right: 8px;
            }
            &--button {
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: ${Colors.black};
                border-radius: 5px;
                color: ${Colors.white};
                font-size: 14px;
                font-weight: 700;
                height: 48px;
                width: 140px;
                letter-spacing: 1px;
                border: none;
            }
        }
    }
`;

function App() {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')

    const getProducts = async () => {
        const products = await ProductService.GetProducts();
        setProducts(products.data);
    };

    const sendContact = async (e: any) => {
        e.preventDefault()
        console.log({email, name});
        
        const newsReturn = await NewsLetterService.SendContact({email, name})
        Swal.fire({
            title: 'Obrigado!',
            text: 'Informações enviadas com sucesso.',
            icon: 'success',
            confirmButtonText: 'OK'
        })
        console.log(newsReturn.data);
    }

    const handleNameChange = (e: any) => {
        setName(e.target.value)
    } 
    const handleEmailChange = (e: any) => {
        setEmail(e.target.value)
    } 

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
            <NewsLetter>
                <div className="newsContainer">
                    <h2>Participe de nossas news com promoções e novidades!</h2>
                    <form className="newsContainer__form" onSubmit={sendContact}>
                        <input type="text" placeholder="Digite seu nome" onChange={handleNameChange}/>
                        <input type="email" placeholder="Digite seu email" onChange={handleEmailChange} />
                        <button className="newsContainer__form--button">
                            Eu quero!
                        </button>
                    </form>
                </div>
            </NewsLetter>
            <Footer />
        </div>
    );
}

export default App;
