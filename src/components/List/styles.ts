import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    background: var(--background);
    max-width: 28rem;
    height: 100vh;
    margin: auto;
    padding: 49px 0 35px 30px;

    h1 {
        font-size: 36px;
        font-weight: 500;
        color: var(--title);
        margin-bottom: 40px;
    }    
`;


export const Content = styled.div`
    max-width: 390px;
    width: 100%;
    max-height: 75%;
    align-items: center; 
    overflow-y: scroll;
    overflow-x: hidden;
    padding-right: 22px;

    @media(max-height: 570px) {
        max-height: 70%;
    }

    &::-webkit-scrollbar {
        width: 8px; 

        background-color: transparent;
    }

    &:hover {
        &::-webkit-scrollbar {
            width: 8px;
        }

        &::-webkit-scrollbar-thumb {
            background-color: var(--input);    
            border-radius: 20px;       
        }
    }

    table {
        display: flex;
        flex-direction: column;
        justify-content: center;

        color: var(--title);
        font-size: 1.12rem;
        border-radius: 8px;

        tbody {
            display: flex;
            flex-direction: column;
            gap: 10px;
            
            tr {
                position: relative;
                display: flex;
                flex-direction: column;
                justify-content: center ;
                height: 66px;
                width: 100%;
                padding: 15px ;
                background-color: var(--input);
                border-radius: 8px;                

                td {
                    display: flex;
                    font-weight: 300;
                    width: 100%;


                    &:first-child{
                        font-weight: 700;
                    }

                }
            }
        }        
    }
`;


export const Box = styled.div`
    position: absolute;
    left: 88%;
    bottom: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    cursor: pointer;

    background: var(--button);
    border: 0;
    border-radius: 8px;

    img {
        height: 15px;
        width: 22px;
    }

    @media(max-width: 720px) {
        position: absolute;
        left: 85%;
    }
`;

export const StyleModal = styled.div`
    background: var(--background);
    width: 100%;
    height: 100%;
    padding: 5rem;
    display: flex;
    flex-direction: column;
    position: relative;

    outline: 0;

    
    h1{
        text-align: left;
        color: var(--title);
        text-align: center;
        font-size: 2rem;
        font-weight: 500;
    }

    p {
        font-size: 1.1rem;
        color: var(--title);
        margin-top: 1.5rem;
        margin-bottom: 0.31rem;
    }
    
    input {
        width: 100%;
        height: 3rem;
        padding: 0 0.8rem;
        font-size: 1rem;
        font-weight: 300;

        background: var(--background);
        color: var(--title);
        border: 0;
        outline: 0;
        border-radius: 0.5rem;
        filter: brightness(1.4);
    }
`;
