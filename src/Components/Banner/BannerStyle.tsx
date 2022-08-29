import styled from "styled-components";

export const BannerCss = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: flex-end;
    
    .section-bg{
        width: 85%;
        height: 90%;
        display: flex;
    }
    .sectionLeftSide{
        width: 45%;
        height: 100%;
        display: flex;
        align-items: center;
        margin-left: 15px;
    }
    .sectionLeftSide h1{
        font-size: 60px;
        line-height: 80px;
    }
    .descricaoTituloBanner{
        width: 450px;
        margin-bottom: 30px;
    }
    .sectionLeftSide span{
        color: var(--Grayish-Violet);
    }
    .sectionLeftSide #buttonBanner{
        background-color: var(--Cyan);
        text-decoration: none;
        color: var(--white);
        padding: 10px 20px;
        border-radius: 20px;
    }
    .sectionRightSide{
        width: 55%;
        height: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    .sectionRightSide img{
        height: 400px;
    }

    @media(max-width: 1310px){
        .sectionRightSide img{
            height: 350px;
        }
        .descricaoTituloBanner {
            width: 400px;
        }
    }
    @media(max-width: 1145px){
        .sectionRightSide img{
            height: 320px;
        }
        .sectionLeftSide h1 {
            font-size: 54px;
        }
        .section-bg{
            width: 98%;
        }
        .sectionLeftSide{
          justify-content: flex-end;
        }
    }
    @media(max-width: 890px){
        .section-bg{
            width: 85%;
            flex-direction: column;
            gap: 20px;
        }
        .sectionLeftSide{
            width: 100%;
            order: 2;
            justify-content: center;
        }
        .sectionRightSide{
            width: 100%;
            order: 1;
        }
        .sectionRightSide img{
           width: 100%;
           height: 400px;
        }
    }
    @media(max-width: 890px){
        height: 130vh;
    }
    @media (max-width: 540px) {
        .sectionLeftSide {
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
        }
        .sectionLeftSide h1 {
            font-size: 45px;
            line-height: 65px;
        }
        .sectionLeftSide span{
            width: 10px;
        }
        .descricaoTituloBanner {
            width: 350px;
        }
    }
    @media (max-width: 418px) {
        .sectionLeftSide h1 {
            font-size: 35px;
            line-height: 55px;
        }
        .descricaoTituloBanner {
            width: 250px;
        }
    }
`;