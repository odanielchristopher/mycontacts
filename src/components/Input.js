import styled, { css } from 'styled-components';

export default styled.input`
  background: #FFF;
  border: .2rem solid #FFF;
  border-radius: .4rem;
  box-shadow: 0rem .4rem 1.0rem 0rem #0000000A;
  font-size: 1.6rem;
  outline: none;
  padding: 0 1.6rem;
  height: 5.2rem;
  width: 100%;
  transition: border-color .2s ease-in;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
  }

  ${({ theme, error }) => error && css`
    color: ${theme.colors.danger.main};
    border-color: ${theme.colors.danger.main} !important;
  `}
`;
