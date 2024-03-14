import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 2.4rem;
  a {
    align-items: center;
    display: flex;
    text-decoration: none;

    span {
      color: ${({ theme }) => theme.colors.primary.main};
      font-weight: bold;
    }

    img {
      margin-right: .8rem;
      transform: rotate(-90deg);
    }
  }

  h1 {
    font-size: 2.4rem;
    margin-top: .8rem;
  }
`;
