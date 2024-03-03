import styled from "styled-components";

export const Footers = styled.div`

    padding: 3.3333333333333335vw 6.944444444444445vw;
    padding-bottom: 2.638888888888889vw;

`

export const FooterContainer = styled.div`

    ${'' /* padding: 3.3333333333333335vw 6.944444444444445vw; */}
    display: flex;
    gap: 9.444444444444445vw;
    padding-bottom: 3.3333333333333335vw;

`

export const FooterInfo = styled.div`

    display: flex;
    flex-direction: column;
    gap: 3.4722222222222223vw;

`

export const FooterLogo = styled.img`

    width: 5.902777777777778vw;
    object-fit: contain;

`

export const Text = styled.p`

    display: flex;
    flex-direction: column;
    width: 19.791666666666668vw;

    & span {
        font-size: 1.1111111111111112vw;
        color: ${p => p.theme.blackGray};
        font-weight: 400;
    }

`

export const FooterLinkContainer = styled.div`

    display: flex;
    flex-direction: row;
    gap: 10vw;

`

export const FooterLinkContent = styled.div`

    display: flex;
    flex-direction: column;
    gap: 3.1944444444444446vw;

    & span {
        font-weight: 500;
        font-size: 16px;
    }

    & a {
        font-size: 16px;
        text-transform: capitalize;
        color: ${p => p.theme.black};
        font-weight: 600;
    }

`

export const FooterCopyright = styled.div`
    padding-top: 2.4305555555555554vw;
    border-top: 2px solid ${p => p.theme.blackGray};
    padding-bottom: 0;
`