import styled from "styled-components";
import bgInput from "../../../Assets/Input/bgInput.svg"

export const InputCss = styled.div`
    width: 100vw;
    height: 120px;
    transform: translateY(-50%);
    .input{
        max-width: 1100px;
        width: 100%;
        height: 100%;
        margin: auto;
        border-radius: 10px;
        background-image: url(${bgInput});
        background-color: var(--Very-Dark-Blue);

        display: flex;
        justify-content: center;
        align-items: center;
    }
    .input form input{
        width: 800px;
        padding: 10px;
        border-radius: 5px;
        font-size: 16px;
        color: var(--Gray);
    }
    .input form button{
        padding: 12px 20px;
        border-radius: 5px;
        background-color: var(--Cyan);
        color: var(--white);
        margin-left: 15px;
    }
`;