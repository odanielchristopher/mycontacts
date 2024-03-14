import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 3.2rem;
  position: relative;
`;

export const InputSearchContainer = styled.div`
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

export const Header = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 3.2rem;

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

export const ListContainer = styled.div`
  margin-top: 2.4rem;

  header {
    button {
    align-items: center;
    background: transparent;
    border: none;
    display: flex;
    margin-bottom: .8rem;

    span {
      color: ${({ theme }) => theme.colors.primary.main};
      font-size: 1.6rem;
      font-weight: bold;
      margin-right: .8rem;
    }
  }
  }
`;

export const Card = styled.div`
  align-items: center;
  background: #FFF;
  border-radius: .4rem;
  box-shadow: .0rem .4rem 1.0rem .0rem #0000000A;
  display: flex;
  justify-content: space-between;
  padding: 1.6rem;

  & + & {
    margin-top: 1.6rem;
  }

  .info {
    .contact-name {
      align-items: center;
      display: flex;

      small {
        background: ${({ theme }) => theme.colors.primary.lighter};
        border-radius: .4rem;
        color: ${({ theme }) => theme.colors.primary.main};
        font-weight: bold;
        margin-left: .8rem;
        padding: .4rem;
        text-transform: uppercase;
      }
    }

    span {
      color: ${({ theme }) => theme.colors.gray[200]};
      display: block;
      font-size: 1.4rem;
    }
  }

  .actions {
    align-items: center;
    display: flex;

    button {
      background: transparent;
      border: none;
      margin-left: .8rem;
    }
  }
`;
