import styled from 'styled-components';

export const RepositoryInfo = styled.section`
  margin-top: 5rem;

  header {
    display: flex;
    align-items: center;

    img {
      width: 7.5rem;
      height: 7.5rem;
      border-radius: 50%;
    }

    div {
      margin-left: 1.5rem;
      flex: 1;

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
    margin-top: 0.2rem;
    display: flex;
    list-style: none;

    li {
      & + li {
        margin-left: 5rem;
      }
      strong {
        display: block;
        font-size: 2.25rem;
        color: ${props => props.theme.colors.title};
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
  margin-top: 5rem;
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
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        color: ${props => props.theme.colors.title};
        font-size: 20px;
      }

      p {
        font-size: 1.125rem;
        color: ${props => props.theme.colors.paragraph};
        margin-top: 0.25rem;
      }
    }
    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
