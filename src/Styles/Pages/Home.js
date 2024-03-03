import styled from "styled-components";
import landing from '../../assets/image/Landing.webp'


// LANDING
export const LandingContainer = styled.div`


    height: 49.7222222222vw;
    background-image: url(${landing});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    padding-right: 4.02777777778vw;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

    & div {
        width: 50%;
    }


`

//Wrapper

export const Wrapper = styled.div`

    padding: 3.88888888889vw 7.08333333333vw;
    padding-bottom: 0;

`

//Range

export const RangeContainer = styled.div`

    padding-left: 2.01388888889vw;
    padding-right: 2.01388888889vw;
    display: flex;
    flex-direction: column;
    justify-content: center;    
    text-align: center;

    & h2 + span {
        margin-bottom: 4.30555555556vw;
    }

`

export const RangeContent = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: space-between;

`

//Products

export const ProductsContainer = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 3.88888888889vw;

`

export const ProductsContent = styled.div`

    display: flex;
    flex-wrap: wrap;
    gap: 2.22222222222vw;
    margin-top: 2.22222222222vw;

    & + a {
        margin-top: 6.52777777778vw;
    }

`

//Rooms

export const RoomContainer = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2.91666666667vw;
    padding: 3.05555555556vw 0;
    padding-left: 6.94444444444vw;
    background-color: ${p => p.theme.lightPeach};
    height: 46.5277777778vw;
    margin-top: 4.86111111111vw;
    padding-right: 0;
    justify-content: space-between;

`

export const RoomLeft = styled.div`

    display: flex;
    flex-direction: column;
    width: 29.3055555556vw;
    
    & h2 {
        font-size: 2.77777777778vw;
        margin-bottom: 7px;
    }

    & p {
        color: ${p => p.theme.lightGray};
        font-size: 1.11111111111vw;
        margin-bottom: 1.73611111111vw;
    }

    & a {
        padding: 0.83333333333vw 2.5vw;
        font-size: 1.11111111111vw;
        text-transform: lowercase;
        font-weight: 600;
        line-height: 150%;
        &:first-letter {
            text-transform: uppercase;
        }
    }

`

export const RoomRight = styled.div`

    display: flex;
    flex-direction: row;
    gap: 1.66666666667vw;
    width: 60vw;


    .swiper-pagination {
        left: 7.5vw!important;
        bottom: 2.5vw!important;

        & .swiper-pagination-bullet {
            background-color: ${p => p.theme.lightGray};
            margin-right: 1.3888888888888888vw!important;
            height: 11px!important;
            width: 11px!important;

            &.swiper-pagination-bullet-active {
                background-color: ${p => p.theme.gold};
                position: relative;
                &::after {
                    content: '';
                    display: inline-block;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    height: 1.875vw;
                    width: 1.875vw;
                    border: 1px solid ${p => p.theme.gold};
                    border-radius: 50%;
                }
            }
        }

    }

`