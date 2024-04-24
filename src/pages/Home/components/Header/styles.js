import styled from 'styled-components';

export const Container = styled.header`
  align-items: center;
  border-bottom: .2rem solid ${({ theme }) => theme.colors.gray[100]};
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  margin-top: 3.2rem;
  padding-bottom: 1.6rem;

  strong {
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
