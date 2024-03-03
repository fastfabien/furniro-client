import styled from "styled-components";

export const ArrivalCardContainer = styled.div`


    padding: 4.30555555556vw 2.77777777778vw;
    border-radius: 10px;
    border: none;
    background-color: ${p => p.theme.lightPeach};
    display: flex;
    flex-direction: column;
    max-width: 44.6527777778vw;
    padding-bottom: 2.56944444444vw;
    

    & p:first-child {
        margin-bottom: 5px;
    }

    & h1 {
        margin-bottom: 0.88541666666vw;
        width: 30.8194444444vw;

        & + p {
            margin-bottom: 2.39583333333vw;
            line-height: 1.7vw
        }
    }


`