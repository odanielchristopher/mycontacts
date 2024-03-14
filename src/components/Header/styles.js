import styled from 'styled-components';

export const Container = styled.header`
  margin-top: 7.4rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const InputSearchContainer = styled.div`
  margin-top: 4.8rem;
  width: 100%;

  input {
    width: 100%;
    background: #fff;
    border: none;
    border-radius: 2.5rem;
    height: 5.0rem;
    box-shadow: 0rem .4rem 1.0rem 0rem #0000000A;
    outline: 0;
    padding: 0 1.6rem;

    &::placeholder {
      color: #BCBCBC;
    }
  }
`;
