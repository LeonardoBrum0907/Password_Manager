import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
      --background: #090522;
      --button: #EACC33;
      --title: #A3A3A3;
      --text-input: #DCDCDC;
      --text-button: #090522;
      --input: #C4C4C40A;
  }  

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
  }  

  html {
    //quando a largura da tela for menor que esses px, ele vai mudar o tamanho da fonte

    @media (max-width: 1080px) {
      font-size: 93.75% // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; //14px
    }
  }

  body {
      background: var(--background);
      -webkit-font-smoothing: antialiased;// deixa as fontes mais nítidas
  }

  body, input, textarea, button {
    font-family: 'Roboto Slap', sans-serif;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);

    padding: fixed;
    top: 0; 
    bottom: 0;
    right: 0;
    left: 0;
    position: absolute;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    height: 95%;
    max-width: 28rem;
    background: var(--background);
    padding: 2.75rem;
    position: relative;
    border-radius: 8px;
    outline: none;

    @media(max-width: 1080px) {
      padding: 2rem;
    }
  }
`
