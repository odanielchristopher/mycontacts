import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
align-items: center;
  background: ${({ theme }) => theme.colors.primary.main};
  border: none;
  border-radius: .4rem;
  box-shadow: 0rem .4rem 1.0rem 0rem #0000000A;
  color: #FFF;
  display: flex;
  font-size: 1.6rem;
  font-weight: bold;
  justify-content: center;
  height: 5.2rem;
  padding: 0 1.6rem;
  transition: background .2s ease-in;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.light};
  }

  &:active {
    background: ${({ theme }) => theme.colors.primary.dark};
  }

  &[disabled] {
    background: ${({ theme }) => theme.colors.gray[400]};
    cursor: default;
  }

  ${({ theme, danger }) => danger && css`
    background: ${theme.colors.danger.main};

    &:hover {
      background: ${theme.colors.danger.light};
    }

    &:active {
      background: ${theme.colors.danger.dark};
    }
  `};
`;
