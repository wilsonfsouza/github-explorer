import styled from 'styled-components';
import { mediaQueries } from '../../styles/mediaQueries';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  figure {
    width: 36px;
    overflow: hidden;
    margin: 0;

    ${mediaQueries('md')`
      width: 215px;
    `}
  }

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;

    &:hover {
      color: ${props => props.theme.colors.returnhover};
    }

    svg {
      margin: 4px;
    }
  }
`;
