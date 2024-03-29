import styled from 'styled-components'

export const Content = styled.form`
  max-width: 23.37rem;
  margin: auto;
  margin-top: 15vh;
  padding: 2.5rem 2rem;

  h1 {
    color: var(--title);
    text-align: center;
    font-size: 2rem;
    font-weight: 500;
  }

  label {
    font-size: 1.1rem;
    color: var(--title);
  }

  input {
    width: 100%;
    height: 3rem;
    padding: 0 0.8rem;
    font-size: 1rem;
    font-weight: 300;
    margin-bottom: 1.5rem;
    margin-top: 0.5rem;

    background: var(--input);
    color: var(--title);
    border: 0;
    outline: 0;
    border-radius: 0.5rem;
  }

  .error {
    color: red;
  }

  .success {
    color: green;
  }

  button {
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--text-button);
    background: var(--button);
    border: 0;
    border-radius: 0.5rem;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
    margin-top: 1rem;
    padding: 0.9rem 2rem;
    height: 3.5rem;
    width: 100%;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.7);
    }
  }

  @media (min-width: 720px) {
    max-width: 450px;
  }
`
export const Routes = styled.div`
  max-width: 100%;

  a {
    text-decoration: none;
    color: var(--title);
    display: block;
    text-align: center;
    font-weight: 300;
    font-size: 1.5rem;
    margin-top: 1.18rem;
  }
`
