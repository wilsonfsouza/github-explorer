import styled from 'styled-components';
import { mediaQueries } from '../../styles/mediaQueries';

export const RepositoryInfo = styled.section`
  margin-top: 5rem;

  header {
    display: flex;
    flex-direction: column;
    align-items: center;

    ${mediaQueries('lg')`
      flex-direction: row;
    `}

    img {
      width: 7.5rem;
      height: 7.5rem;
      border-radius: 50%;
      margin-bottom: 2rem;

      ${mediaQueries('lg')`
      margin-bottom: 0;
    `}
    }

    div {
      margin-left: 0;
      flex: 1;

      ${mediaQueries('lg')`
      margin-left: 1.5rem;
      `}

      strong {
        font-size: 2.25rem;
        color: ${props => props.theme.colors.title};
      }

      p {
        font-size: 1.125rem;
        color: #737380;
        margin-top: 0.25rem;
      }
    }
  }

  ul {
    margin-top: 0.5rem;
    display: flex;
    list-style: none;
    flex-wrap: wrap;
    flex-direction: column;

    ${mediaQueries('md')`
      margin-top: 0.2rem;
      flex-direction: row;
    `}

    ${mediaQueries('lg')`
      flex-wrap: nowrap;
      `}

    li {
      margin-right: 2rem;

      ${mediaQueries('md')`
        margin-right: 0;
        `}

      & + li {
        margin-left: 0rem;

        ${mediaQueries('md')`
        margin-left: 2rem;
        `}

        ${mediaQueries('lg')`
        margin-left: 5rem;
        `}
      }

      strong {
        display: block;
        font-size: 2rem;
        color: ${props => props.theme.colors.title};

        ${mediaQueries('md')`
          font-size: 2.25rem;
        `}
      }

      span {
        display: block;
        margin-top: 0.25rem;
        color: #6c6c80;
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 2rem;

  ${mediaQueries('md')`
    margin-top: 5rem;
    `}

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
  } */
`;
