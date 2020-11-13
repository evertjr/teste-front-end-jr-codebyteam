import styled, { css } from 'styled-components';

interface CategoryCardProps {
  size: string;
}

export const Container = styled.button<CategoryCardProps>`
  display: inline-flex;
  flex-direction: column;
  border: 0;

  ${props => {
    if (props.size === 'small') {
      return css`
        width: 30%;
      `;
    }
    if (props.size === 'medium') {
      return css`
        flex-grow: 1;
      `;
    }
    if (props.size === 'medium-right') {
      return css`
        flex-grow: 1;
      `;
    }
    if (props.size === 'big') {
      return css`
        flex-grow: 1;
      `;
    }
    return css`
      width: 30%;
    `;
  }};

  height: 300px;
  margin: 16px;

  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    -webkit-box-shadow: 0px 20px 46px -26px rgba(0, 0, 0, 1);
    -moz-box-shadow: 0px 20px 46px -26px rgba(0, 0, 0, 1);
    box-shadow: 0px 20px 46px -26px rgba(0, 0, 0, 1);
  }

  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 16px 20px;
    text-align: ${props =>
      props.size === 'medium-right' ? css`right` : css`left`};

    ${props =>
      props.size === 'big' &&
      css`
        margin: auto 0;
      `};

    strong {
      color: #fff;
      font-size: 40px;
      font-weight: 600;

      @media (max-width: 766px) {
        font-size: 20px;
      }
    }

    span {
      color: #fff;
      font-size: 16px;
      font-weight: 600;

      @media (max-width: 766px) {
        font-size: 12px;
      }
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
