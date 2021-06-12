import styled from 'styled-components';
import { mediaQueries } from '../../styles/mediaQueries';

export const Container = styled.a`
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
    margin-top: 16px;
  }

  &:hover {
    transform: translateX(10px);
  }

  div {
    margin: 0 0.25rem;
    flex: 1;

    ${mediaQueries('md')`
        margin: 0 1rem;
      `}

    strong {
      color: ${props => props.theme.colors.title};
      font-size: 1rem;

      ${mediaQueries('md')`
          font-size: 1.25rem;
        `}
    }

    p {
      font-size: 0.75rem;
      color: ${props => props.theme.colors.paragraph};
      margin-top: 0.25rem;

      ${mediaQueries('md')`
          font-size: 1.125rem;
        `}
    }
  }
  svg {
    margin-left: auto;
    color: #cbcbd6;
  }
`;
