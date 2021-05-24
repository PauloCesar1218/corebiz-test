import styled from 'styled-components';
import { Colors } from '../../assets/style/colors';

export const NewsLetter = styled.div`
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
                cursor: pointer;

                &:disabled {
                    opacity: .50;
                }
            }
        }
    }
`;
