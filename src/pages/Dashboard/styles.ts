import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const TitleH1 = styled.h1`
  font-size: 3rem;
  color: ${props => props.theme.colors.h1};
  max-width: 510px;
  line-height: 56px;

  margin-top: 5rem;
`;

export const Form = styled.form<FormProps>`
  margin-top: 2.5rem;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 1.5rem;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: ${props => props.theme.colors.inputText};
    border: 2px solid #fff;
    border-right: 0;

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
    height: 70px;
    background: ${props => props.theme.colors.primary};
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

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

  a {
    background: ${props => props.theme.colors.secondary};
    border-radius: 5px;
    width: 100%;
    padding: 1.5rem;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

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
      margin: 0 1rem;
      flex: 1;

      strong {
        color: ${props => props.theme.colors.title};
        font-size: 1.25rem;
      }

      p {
        font-size: 1.125rem;
        color: ${props => props.theme.colors.paragraph};
        margin-top: 0.25rem;
      }
    }
    svg {
      margin-left: auto;
      color: ${props => props.theme.colors.arrowIcon};
    }
  }
`;
