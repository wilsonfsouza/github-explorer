import styled, { css } from 'styled-components';
import { shade } from 'polished';
import { mediaQueries } from '../../styles/mediaQueries';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 2rem;
  color: ${props => props.theme.colors.h1};
  max-width: 510px;
  line-height: 46px;

  margin-top: 5rem;

  ${mediaQueries('md')`
      font-size: 3rem;
      line-height: 56px;
    `}
`;

export const Form = styled.form<FormProps>`
  margin-top: 2.5rem;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 60px;
    padding: 0 0.75rem;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: ${props => props.theme.colors.inputText};
    border: 2px solid #fff;
    border-right: 0;

    ${mediaQueries('md')`
      padding: 0 1.5rem;
      height: 70px;
    `}

    ${props =>
    props.hasError &&
    css`
        border-color: ${props.theme.colors.borderError};
      `}
    &::placeholder {
      color: ${props => props.theme.colors.placeholderError};
    }
  }

  button {
    width: 210px;
    height: 60px;
    background: ${props => props.theme.colors.primary};
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    ${mediaQueries('md')`
      height: 70px;
    `}

    &:hover {
      background: ${props => shade(0.2, props.theme.colors.primary)};
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: ${props => props.theme.colors.messageError};
  margin-top: 0.5rem;
`;

export const Repositories = styled.div`
  margin-top: 5rem;
  max-width: 700px;
  /* a {
    background: ${props => props.theme.colors.secondary};
    border-radius: 5px;
    width: 100%;
    padding: 1.5rem;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    position: relative;
    flex-direction: column;

    ${mediaQueries('md')`
      flex-direction: row;
    `}

    & + a {
      margin-top: 1rem;
    }

    &:hover {
      transform: translateX(10px);
    }

    img {
      height: 54px;
      width: 54px;
      border-radius: 50%;
    }

    div {
      margin: 1rem 1rem 0 1rem;
      flex: 1;
      ${mediaQueries('md')`
      margin: 0 1rem;
    `}

      strong {
        color: ${props => props.theme.colors.title};
        font-size: 1.25rem;
      }

      p {
        font-size: 1rem;
        color: ${props => props.theme.colors.paragraph};
        margin-top: 0.25rem;

        ${mediaQueries('md')`
          font-size: 1.125rem;
        `}
      }
    }
    svg {
      margin-left: auto;
      color: ${props => props.theme.colors.arrowIcon};
      position: absolute;
      right: 15px;
      top: 50%;
      transform: translateY(-50%);

      ${mediaQueries('md')`
      position: relative;
    `}
    }
  } */
`;
