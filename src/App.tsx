import React from "react";
import Header from "./components/header/index";
import Banner from "./assets/images/banner.png";
import styled from "styled-components";

const BannerImage = styled.img`
    width: 100%;
    height: 430px;
`;

const Container = styled.section`
    width: 1240px;
    margin: 0 auto;
`;

const Title = styled.h2`
    font-size: 20px;
    font-weight: 900;
    color: #000;

    &::after {
      content: "";
      display: block;
      height: 5px;
      width: 65px;
      background-color: #C0C0C0;
    }
`

function App() {
    return (
        <div>
            <Header />
            <BannerImage src={Banner} alt="Banner" />
            <div>
                <Container>
                  <Title>Mais Vendidos</Title>
                </Container>
            </div>
            <h1>Hello World!!</h1>
        </div>
    );
}

export default App;
