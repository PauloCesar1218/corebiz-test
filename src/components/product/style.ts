import styled from "styled-components";
import { Colors } from "../../assets/style/colors";

export const Product = styled.div`
    display: flex;
    flex-direction: column;
    height: 353px;
    width: 216px;
    &:hover {
        .productInfo {
            background-color: ${Colors.grey};
            &__buyButton {
                display: block;
            }
        }
    }

    .productImage {
        width: 100%;
        height: 200px;
    }

    .productInfo {
        display: flex;
        flex: 1;
        flex-direction: column;
        align-items: center;

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
        }

        &__listPrice {
            font-size: 12px;
            font-weight: 400;
            color: ${Colors.silenced_text};
        }

        &__stars {
            display: inherit;
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
            display: none;
        }
    }
`;
