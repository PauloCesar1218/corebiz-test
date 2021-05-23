import styled from "styled-components";
import { Colors } from "../../assets/style/colors";
import { Container } from "./../../assets/style/container";

export const FooterContainer = styled.div`
    width: 100%;
    background-color: ${Colors.black};
    display: flex;
    justify-content: center;
`;

export const FlexContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
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
                width: 76px;
            }
        }
    }
`;
