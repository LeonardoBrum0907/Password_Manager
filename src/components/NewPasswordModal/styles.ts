import styled from 'styled-components'

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
`
