import styled from "styled-components";

export const BannerCss = styled.div`
    width: 100vw;
    height: calc(100vh - 100px);

    display: flex;
    justify-content: flex-end;
    align-items: center;

    .section-bg{
        width: 85%;
        height: 80%;
        display: flex;
    }
    .sectionLeftSide{
        width: 40%;
        height: 100%;
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
        width: 60%;
        height: 100%;
        display: flex;
        justify-content: flex-end;
    }
    .sectionRightSide img{
        width: 650px;
}
`;