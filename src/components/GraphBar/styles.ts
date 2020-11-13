import styled, { css } from 'styled-components';

interface GraphBarProps {
  size: number;
}

export const Container = styled.div<GraphBarProps>`
  background: gray;
  width: 170px;
  margin: 16px;

  @media (max-width: 766px) {
    width: 54px;
    margin: 0px;
  }

  .top {
    background: #005499;
    color: #fff;
    display: flex;
    flex-direction: column;
    padding: 12px 8px;
    margin: auto 0;

    strong {
      margin-left: 8px;
      height: 40px;
      font-size: 28px;
      font-weight: 600;
      padding: 0;

      @media (max-width: 766px) {
        font-size: 12px;
        margin-left: 2px;
        height: 24px;
      }
    }

    span {
      margin-left: 8px;
      font-weight: 600;
      font-size: 16px;

      @media (max-width: 766px) {
        font-size: 10px;
        margin-left: 2px;
      }
    }
  }

  .bottom {
    background: #0088ed;
    height: ${props =>
      css`
        ${props.size}px
      `};
    display: flex;

    p {
      color: #fff;
      padding: 8px 8px 16px 16px;
      font-size: 11px;
      margin-top: auto;
      max-width: 140px;

      @media (max-width: 766px) {
        font-size: 8px;
        padding: 4px;
        max-width: 40px;
      }
    }
  }
`;
