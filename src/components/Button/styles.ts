import styled from "styled-components";

export const ButtonComponents = styled.button`
  position: absolute;
  bottom: 24px;
  height: 3.5rem;
  max-width: 360px;
  width: 24rem;

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

  @media(max-width: 1080px) {
      width: 24rem;
  }
  @media(max-width: 720px) {
      width: 23.71rem;
  }
  @media(max-width: 375px) {
      width: 22.5rem;
  }
  @media(max-width: 360px) {
    width: 18.57rem
  }
`;