import styled from 'styled-components';
import headerBackground from '../../assets/header-background.jpg';

export const Container = styled.div`
  .titles {
    h2 {
      margin: 16px 0 0 16px;
      font-size: 42px;
      font-weight: 600;
      color: #383838;
    }

    p {
      margin-left: 16px;
      color: #383838;
      font-size: 16px;
      font-weight: 500;
    }
  }
`;

export const Header = styled.div`
  height: 520px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${headerBackground});
  background-size: cover;

  img {
    margin-top: 64px;
  }

  h1 {
    color: #ffffff;
    font-size: 48px;
    max-width: 550px;
    font-weight: 600;
    text-align: center;
    margin-top: 48px;

    @media (max-width: 766px) {
      font-size: 32px;
    }
  }

  button {
    background: #ffffff;
    width: 200px;
    height: 42px;
    font-size: 16px;
    font-weight: 500;
    border: none;
    margin-top: 48px;
    -webkit-box-shadow: 0px 10px 53px -16px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 10px 53px -16px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 10px 53px -16px rgba(0, 0, 0, 0.75);
    transition: 0.2s;

    &:hover {
      background: #b0e2fc;
    }
  }
`;

export const Categories = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;

  .cards {
    margin-top: 16px;
    flex-direction: column;
  }

  .row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Plans = styled.section`
  background-color: #f4f4f4;
  margin-top: 32px;

  .graph-area {
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    @media (max-width: 766px) {
      max-width: 350px;
    }
  }

  .graphs {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
`;
