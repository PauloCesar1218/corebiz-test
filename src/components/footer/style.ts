import styled from "styled-components";
import { Colors } from "../../assets/style/colors";
import { Container } from "./../../assets/style/container";

export const FooterContainer = styled.div`
    width: 100%;
    background-color: ${Colors.black};
`;

export const FlexContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${Colors.black};
    margin: 0 auto;
    padding: 26px 0;

    .footerLocation {
        display: inherit;
        flex-direction: column;

        &__title {
            color: ${Colors.white};
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 20px;
            &::after {
                content: "";
                display: block;
                width: 45px;
                height: 5px;
                background-color: ${Colors.white};
                margin-top: 10px;
            }
        }
        &__addressInfo {
            list-style: none;
            display: flex;
            flex-direction: column;
            color: ${Colors.white};
            font-size: 14px;
            font-weight: 400;
            padding: 0;
            margin: 0;

            li {
                margin-bottom: 8px;
            }
        }
    }

    .footerContacts {
        display: flex;
        flex-direction: column;

        &__item {
            background-color: ${Colors.white};
            display: inherit;
            align-items: center;
            justify-content: center;
            width: 195px;
            height: 38px;
            border-radius: 5px;
            line-height: 100%;

            &:nth-child(1) {
                margin-bottom: 25px;
            }
            img { 
                width: 15px;
                height: 18px;
                margin-right: 18px;
            }

            span {
                font-size: 12px;
                font-weight: 600;
            }
        }
    }

    .footerLogos {
        display: flex;
        align-items: center;
        &__item {
            display: inherit;
            flex-direction: column;
            margin-left: 25px;

            span {
                color: ${Colors.white};
                font-size: 10px;
                font-weight: 400;
                margin-bottom: 2px;
            }

            img {
                height: 18px;
            }

            &--vtex {
                width: 52px;
            }

            &--corebiz {
                width: 76px;
            }
        }
    }
`;
