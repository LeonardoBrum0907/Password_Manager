import styled from "styled-components";

export const Content = styled.form`
    display: flex;
    flex-direction: column;

    h1 {
        font-size: 2rem;
        font-weight: 500;
        color: var(--title);
        margin-bottom: 2.5rem;
    }

    p {
        font-size: 1.1rem;
        color: var(--title);
        margin-bottom: 0.31rem;
    }

    input {
        /* max-width: 360px; */
        width: 100%;
        height: 3rem;
        padding: 0 0.8rem;
        /* margin: auto; */
        margin-bottom: 1.5rem;
        font-size: 1rem;
        font-weight: 300;

        background: var(--input);
        color: var(--title);
        border: 0;
        outline: 0;
        border-radius: 0.5rem;
    }

    /* input:first-child{
        margin-bottom: 1.5rem;
    } */
/* 
    button {
        position: absolute;
        width: 100%;
        bottom: 2.2rem;

        font-size: 1.5rem;
        font-weight: 500;
        color: var(--text-button);
        background: var(--button);
        border: 0;
        border-radius: 0.5rem;
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
        padding: 0.9rem 2rem;
        height: 3.5rem;
        max-width: 360px;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.7)
        }
    } */
`;