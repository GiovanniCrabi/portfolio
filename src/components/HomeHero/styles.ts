import { endianness } from 'os';
import styled from 'styled-components';

export const Container = styled.section`
  width: 90%;
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;

  > img {
    height: 32rem;
    width: 40rem;
    flex: 1;
    opacity: calc(0.8);
  }

  > div {
    flex: 4;
  }

  @media (max-width: 1450px) {
    > img {
      width: 22rem;
    }

    >div {
      width: 1rem;
    }
  }


  @media (max-width: 1000px) {
    > img {
      width: 22rem;
    }
  }

  @media (max-width: 700px) {
    flex-direction: column-reverse;
    > div {
      width: 100%;
    }
  }
`;

export const TextContainer = styled.section`
  margin-bottom: 2rem;
  width: 90%;

  h1 {
    font-size: 5rem;
    color: ${({theme}) => theme.primary };
  }

  h2 {
    font-size: 2rem;
    font-weight: 400;
    color: ${({theme}) => theme.secondary };
  }

  @media (max-width: 1450px) {
    > h1 {
      font-size: 5rem;
    }

    h2 {
      font-size: 2rem;
    }
  }

  @media (max-width: 1000px) {
    > h1 {
      font-size: 3rem;
    }

    h2 {
      font-size: 1.5rem;
    }
  }
`
export const InfosContainer = styled.section `
  max-width: 90%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  `;

export const CodeItem = styled.pre`
  background: ${({theme}) => theme.gradient};
  padding: 1rem;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 300;
  color: #fff;
  width: 24rem;
  align-self: flex-start;
  transition: 1s;

  @media (max-width: 1450) {
    width: 18rem;
    padding: 0.8rem;
    font-size: 0.8rem;
  }

  @media (max-width: 1000) {
    width: 100%;
    padding: 1.5rem;
    font-size: 0.8rem;
  }

  &:hover {
    filter: brightness(1.2);
  }

  .left {
    align-self: left;
  }

  > div {
    margin: 0.2rem 0;
    margin-left: 1rem;
  }

  span.purple {
    color: #c38cdd;
  }

  span.blue {
    color: #7ac7e3;
    flex-direction: column;
  }

  span.comment {
    color: ${({theme}) => theme.text };
    margin-bottom: 1rem;
    display: block;
  }

`;