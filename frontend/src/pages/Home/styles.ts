import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 30px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  main {
    flex: 1;

    display: flex;
    flex-direction: row;
    align-items: center;    
  }

  main div h1 {
    font-size: 54px;
    color: ${ props => props.theme.colors.primary };
  }

  main div p {
    font-size: 24px;
    margin-top: 24px;
    line-height: 38px;
  }

  main div a {
    width: 100%;
    max-width: 360px;
    height: 72px;
    background: ${ props => props.theme.colors.secondary };
    border-radius: 8px;
    text-decoration: none;

    display: flex;
    align-items: center;
    overflow: hidden;

    margin-top: 40px;

    transition: 200ms linear 0s;
  }

  main div a span {
    display: block;
    background: rgba(0, 0, 0, 0.08);
    width: 72px;
    height: 72px;

    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s;
  }

  main div a span svg {
    color: #FFF;
    width: 20px;
    height: 20px;
  }

  main div a strong {
    flex: 1;
    text-align: center;
    color: #fff;
  }

  main div a:hover {
    background: ${ props => props.theme.colors.secondaryHover };
  }

  @media(max-width: 900px) {
    main {
      align-items: center;
    }

    main img {
      display: none;
    }

    main div h1 {
      font-size: 42px;
    }

    main div p {
      font-size: 24px;
    }
  }
`;