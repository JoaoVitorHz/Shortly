import styled from "styled-components";
import bg from "../../Assets/Boost/BoostBg.svg"

export const BoostCss = styled.div`
    width: 100vw;
    height: 220px;
    background-image: url(${bg});
    background-color: var(--Dark-Violet);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1{
        color: #FFF;
        margin-bottom: 20px;
    }
    button{
        background-color: var(--Cyan);
        padding: 10px 20px;
        border-radius: 20px;
        color: #FFF;
        cursor: pointer;
    }
`;