import styled from "styled-components";

export const StaticsCss = styled.div`
    width: 100vw;
    height: 130vh;
    background-color: var(--Gray-Bg);
    display: flex;
    flex-direction: column;
    align-items: center;

    .statics{
        max-width: 1100px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 100px 0 0 0;
    }
    .statics h1{
        color: var(--Very-Dark-Violet);
        margin-bottom: 10px;
    }
    .statics span{
        width: 480px;
        text-align: center;
        color: var(--Very-Dark-Blue);
        margin-bottom: 100px;
    }
    .staticsItems{
        width: 100%;
        height: 80%;
        display: flex;
        align-items: center;
    }
    .blueBar{
        width: 40px;
        height: 10px;
        background-color: var(--Cyan);
    }
    .staticsItem{
        flex: 1;
        height: 250px;
        border-radius: 5px;
        padding: 0 20px;
        background-color: white;
    }
    .staticsItem h1{
        font-size: 20px;
        line-height: 0px;
        margin-bottom: 25px;
    }
    .staticsItem span{
        font-size: 14px;
    }
    .staticsImg{
        width: 80px;
        height: 80px;
        border-radius: 50%;
        transform: translateY(-50%);
        margin-left: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--Dark-Violet);
    }
    .detailed{
        transform: translateY(10%);
    }
    .customizable{
        transform: translateY(20%);
    }

    @media(max-width: 819px){
        height: 220vh;
        .staticsItems{
            display: flex;
            flex-direction: column;
        }
        .staticsItem{
            flex: 0;
            width: 65%;
            height: 500px;
            padding: 0 20px 20px;
            margin-bottom: 30px;
        }
        .statics span{
            margin-bottom: 60px;
        }
        .statics{
            margin: 10px 0 0 0;
        }
        .staticsItem h1{
            font-size: 16px;
            display: inline;
        }
        .blueBar{
            display: none;
            width: 40px;
            height: 10px;
            background-color: var(--Cyan);
        }
        }
`;