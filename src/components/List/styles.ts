import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    background: var(--background);
    max-width: 28rem;
    height: 90vh;
    margin: auto;
    margin-top: 2rem;
    /* border: 1px solid red; */

    h1 {
        font-size: 2.5rem;
    }
    


    /* border-color: var(--background); */

    @media(min-width: 720px) {
        max-width: 28rem;
    }

    h1 {
        font-size: 2rem;
        font-weight: 500;
        color: var(--title);
        margin: 4rem 0 2.5rem;
    }


        button {
            position: absolute;
            bottom: 2.2rem;
            height: 3.5rem;
            width: 100%;

            font-size: 1.5rem;
            font-weight: 500;
            color: var(--text-button);
            background: var(--button);
            outline: 0;
            border: 0;
            border-radius: 0.5rem;
            box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);

            transition: filter 0.2s;

            &:hover {
                filter: brightness(0.7)
            }
        }
    
`;
export const Content = styled.div`
    /* max-width: 100%; */
    /* display: flex; */
    /* align-items: center;  */

    table {
        /* width: 100%; */
        /* height: 100%; */
        /* margin-bottom: 1rem; */
        /* padding-left: 0.8rem; */
        /* padding-top: 2rem; */
        display: flex;
        flex-direction: column;
        justify-content: center;
        /* border: 1px solid red; */

        color: var(--title);
        font-size: 1.12rem;
        border-radius: 8px;
        filter: brightness(1.4);

        tbody {
            display: flex;
            flex-direction: column;
            gap: 10px;
            /* border: 1px solid green; */

            
            tr {
                position: relative;
                width: 100%;
                padding: 15px 0 ;
                background-color: var(--background);
                /* border: solid 1px red; */
                max-height: 71px;
                border-radius: 8px;
                

                /* .hide{
                    display: none;
                } */

                td {
                    display: flex;
                    font-weight: 300;
                    /* border: 1px solid green ; */
                    width: 100%;
                    margin-left: 15px;


                    &:first-child{
                        /* margin-top: 17px; */

                        font-weight: 700;
                    }
                }
            }
        }        
    }
`;


export const Box = styled.div`
    position: absolute;
    left: 25.5rem;
    bottom: 1.3rem;

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
`;

export const StyleModal = styled.div`
    background: var(--background);
    width: 100%;
    height: 100%;
    padding: 5rem;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
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

    button {
        position: absolute;
        bottom: 2.2rem;
    }
`;
