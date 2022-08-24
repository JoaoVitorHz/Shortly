import styled from "styled-components";

export const FooterCss = styled.div`
    width: 100vw;
    height: 50vh;
    background-color: var(--Very-Dark-Violet);
    display: flex;
    justify-content: center;
    align-items: center;

    .footer-bg{
        max-width: 1100px;
        width: 100%;
        height: 80%;
        display: flex;
        align-items: center;
    }
    .footerLeftSide{
        width: 40%;
        height: 100%;
        display: flex;
        justify-content: center;
    }
    .footerLeftSide h1{
        color: var(--white);
    }
    .footerRightSide{
        width: 60%;
        height: 100%;
        display: flex;
    }
    .footerItemMenu h2{
        color: var(--white);
        font-size: 20px;
        margin-bottom: 20px;
    }
    .footerItemMenu a{
        display: inline-block;
        text-decoration: none;
        color: var(--Gray);
        margin-bottom: 20px !important;
    }
`;