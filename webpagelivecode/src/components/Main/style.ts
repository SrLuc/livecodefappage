import styled from "styled-components";

export const StyledContainer = styled.main`
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 92vh;

    @media (max-width: 768px){
        flex-direction: column;
    }

    section{

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        width: 100%;

        @media (max-width: 768px){
        width: 100%;
        height: 100%;
        } 
    }
`

export const StyledRightSide = styled.section`
    img{
       width: 100%;
       height: 100%;
    }
`

export const StyledLeftSide = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-items: center;
    align-items: center;
    align-content: center;
    h1{
        font-size: 30px;
        text-align: center;
    }

    p{
        font-size: 15px;
        text-align: center;}

    div{
        padding: 10px;
        margin-top: 15px;
        display: flex;
        gap: 25px;

        button{
            color: #090909;
            padding: 0.7em 1.7em;
            font-size: 18px;
            border-radius: 0.5em;
            background: #e8e8e8;
            cursor: pointer;
            border: 1px solid #e8e8e8;
            transition: all 0.3s;
            box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;
                    }

        button:active {
        color: #666;
        box-shadow: inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff;
}

    }
`;