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
`;