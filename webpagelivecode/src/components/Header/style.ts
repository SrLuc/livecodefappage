import styled from "styled-components";

export const StyledHeader = styled.section`
    display: flex;
    justify-content: space-between;

    div{
        display: flex;
        align-items: center;

        i{
            display: flex;
             align-items: center;
            img{
                padding: 5px;
                width: 120px;
            }
        }
    }

    nav{
        display: flex;
        align-items: center;
        ul{
            display: flex;
            align-items: center;
            list-style: none;
            gap:10px;
            padding:8px;
            font-size: 13px;
        }

        button{
            color: #090909;
            padding: 8px;
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
`