import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mediaQueries } from '../../styles/mediaQueries';

export const Container = styled(Link)`
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
`;
