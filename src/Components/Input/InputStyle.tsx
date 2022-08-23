import styled from "styled-components";
import bgInput from "../../Assets/Input/bgInput.svg"

export const InputCss = styled.div`
    width: 100vw;
    height: 100px;

    .input{
        width: 70%;
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
        width: 700px;
        padding: 10px;
        border-radius: 5px;
    }
    .input form button{
        padding: 10px 15px;
        border-radius: 5px;
        background-color: var(--Cyan);
        color: var(--white);
        margin-left: 20px;
    }
`;