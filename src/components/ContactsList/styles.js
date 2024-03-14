import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 3.2rem;
`;

export const Header = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;

  strong {
    color: #222;
    font-size: 2.4rem;
  }

  a {
    border: .2rem solid ${({ theme }) => theme.colors.primary.main};
    border-radius: .4rem;
    color: ${({ theme }) => theme.colors.primary.main};
    font-weight: bold;
    padding: .8rem 1.6rem;
    transition: all .2s ease-in;
    text-decoration: none;

    &:hover {
      background: ${({ theme }) => theme.colors.primary.main};
      color: #FFF;
    }
  }
`;
