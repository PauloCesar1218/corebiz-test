import styled from 'styled-components';
import Slider from 'infinite-react-carousel'
import { Colors } from '../../assets/style/colors';
import { Container } from './../../assets/style/container'

export const SliderContainer = styled(Slider)`
    position: relative;
    width: 100%;

    img {
        width: 100%;
        height: 430px;
        z-index: 1;
    }

    .banner-text {
        height: 100%;
        display: flex !important;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .carousel-dots {
        position: absolute;
        bottom: 0;
        z-index: 9;

        li.carousel-dots-active button::before {
            color: #F8475F;
        }
        li button::before {
            color: #BDBDBD;
        }
    }

    .carousel-next, .carousel-prev {
        display: none;
    }
`

export const BannerTextContainer = styled(Container)`
    z-index: 9;
    position: absolute;
    color: ${Colors.white};
    
    p {
        font-size: 30px;
        font-weight: 700;
        margin: 0;
    }
    h2 {
        font-size: 45px;
        font-weight: 900;
        line-height: 45px;
        margin: 0;
    }
`
