import styled from "styled-components";

export const HeaderCss = styled.div`
    width: 100vw;
    height: 100px;

.header{
    width: 70%;
    height: 100%;
    margin: auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
}
.menuLeftSide{
    display: flex;
}
.menuLeftSide .logo img{
    width: 100px;
}
.menuLeftSide li {
    list-style: none;
    margin: 0 15px;
}
.menuLeftSide li a{
    text-decoration: none;
    color: var(--Grayish-Violet);
    font-size: 14px;
}
.menuRightSide a{
    text-decoration: none;
    color: var(--Grayish-Violet);
    font-size: 14px;
    margin: 0 15px;
}
.menuRightSide #ButtonSingUp{
    color: var(--white);
    background-color: hsl(180, 66%, 49%);
    padding: 5px 10px;
    border-radius: 20px;
}

@media(max-width: 890px){
    .menuLeftSide li {
       display: none;
    }
    .menuRightSide{
        display: none;
    }
}
`;

export const Dropdown = styled.div`
    display: none;

    @media(max-width: 890px){
        display: block;
    }
    .trigger{
        background-color: transparent;
    }
    .trigger button{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: var(--Cyan);
        cursor: pointer;
        color: var(--white);
        font-size: 18px;
    }
    .group{
        display: flex;
        flex-direction: column;
        background-color: var(--Cyan);
        border-radius: 5px;
        padding: 10px 0;
    }
    .group a{
        text-decoration: none;
        color: var(--white);
        font-size: 16px;
        padding: 5px 40px 5px 20px;

    }
    .group a:hover {
        background-color: hsl(180, 53.75%, 68.62745098039215%);
    }



`;