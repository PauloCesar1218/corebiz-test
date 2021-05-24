import styled from "styled-components";
import { Colors } from "../../assets/style/colors";
import Off from "./../../assets/images/off.png";

export const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    min-height: 364px;
    width: 216px;
    &:hover {
        .productInfo {
            background-color: ${Colors.grey};
            &__buyButton {
                visibility: visible;
            }
        }
    }

    .productImage {
        width: 100%;
        height: 200px;
    }

    .productOnSale {
        position: absolute;
        width: 80px;
        height: 72px;
        background-image: url(${Off});
        background-size: cover;
        top: 0;
        right: 0;
        color: ${Colors.white};
        font-size: 16px;
        font-weight: 900;

        span {
            position: absolute;
            top: 12px;
            right: 8px;
        }
    }

    .productInfo {
        display: flex;
        flex: 1;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 14px;

        div {
            display: inherit;
            flex-direction: column;
            align-items: center;
        }

        &__name {
            font-size: 12px;
            font-weight: 600;
            color: ${Colors.silenced_text};
            margin-top: 7px;
            margin-bottom: 5px;
        }

        &__price {
            font-size: 18px;
            font-weight: 700;
            color: ${Colors.black};
            margin-top: 2px;
        }

        &__listPrice {
            font-size: 12px;
            font-weight: 400;
            color: ${Colors.silenced_text};
            margin-top: 7px;
        }

        &__stars {
            display: inherit;
        }

        &__installments {
            font-size: 11px;
            font-weight: 400;
            color: ${Colors.silenced_text};
        }

        &__installmentsHidden {
            font-size: 11px;
            visibility: hidden;
        }

        &__buyButton {
            background-color: ${Colors.black};
            border-radius: 5px;
            color: ${Colors.white};
            font-size: 12px;
            font-weight: 700;
            padding: 8px 28px;
            letter-spacing: 1px;
            border: none;
            visibility: hidden;
            margin-top: 8px;
            cursor: pointer;
        }
    }
`;
