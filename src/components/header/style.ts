import styled from "styled-components";
import { Colors } from "./../../assets/style/colors";
export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 80px;

    .logo {
        height: 40px;
        width: 170px;
    }

    .search-bar {
        position: relative;
        margin-left: 120px;
        margin-right: 44px;
        input {
            width: 718px;
            height: 13px;
            border: 0;
            border-bottom: 1px solid ${Colors.black};
            padding-bottom: 10px;
            color: ${Colors.silenced_text};
        }
        img {
            width: 18px;
            height: 18px;
            position: absolute;
            right: 0;
            bottom: 5px;
        }
    }

    .options {
        display: inherit;
        div {
            display: inherit;
            align-items: center;
            img {
                width: 18px;
                height: 18px;
                margin-right: 5px;
            }
            span {
                color: ${Colors.silenced_text};
                font-size: 13px;
                font-weight: 400;
            }
        }
        &__cart {
            margin-left: 20px;
            &--counter {
                display: inherit;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                background-color: ${Colors.red};
                color: ${Colors.white} !important;
                font-size: 10px !important;
                height: 14px;
                width: 14px;
            }
        }
    }
`;