import styled from 'styled-components';

export const Container = styled.section`
    width: 1240px;
    margin: 0 auto;
`;

export const Title = styled.h2`
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

export const ProductContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;
