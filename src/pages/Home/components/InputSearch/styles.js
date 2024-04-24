import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  input {
    width: 100%;
    background: #fff;
    border: .2rem solid #fff;
    border-radius: 2.5rem;
    height: 5.0rem;
    box-shadow: 0rem .4rem 1.0rem 0rem #0000000A;
    outline: 0;
    padding: 0 1.6rem;
    transition: border .15s ease-in;

    &::placeholder {
      color: #BCBCBC;
    }

    &:focus {
      border-color: ${({ theme }) => theme.colors.primary.main};
    }
  }
`;
