import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 3.2rem;
  margin-bottom: 3.2rem;
  position: relative;
`;

export const InputSearchContainer = styled.div`
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

export const Header = styled.header`
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

export const ListHeader = styled.header`
  margin-top: 2.4rem;
  margin-bottom: .8rem;

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

    img {
      transition: transform .2s ease-in;
      transform: ${({ orderBy }) => (orderBy === 'asc' ? 'rotate(180deg)' : 'rotate(0deg)')};
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

export const ErrorContainer = styled.div`
  align-items: center;
  display: flex;
  margin-top: 1.6rem;

  .details {
    margin-left: 2.4rem;

    strong {
      display: block;
      color: ${({ theme }) => theme.colors.danger.main};
      font-size: 2.2rem;
      margin-bottom: .8rem;
    }
  }
`;

export const EmptyListContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 1.6rem;

  p {
    color: ${({ theme }) => theme.colors.gray[200]};
    margin-top: .8rem;
    text-align: center;

    strong {
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }
`;

export const SearchNotFoundContainer = styled.div`
  margin-top: 1.6rem;
  align-items: flex-start;
  display: flex;

  span {
    color: ${({ theme }) => theme.colors.gray[200]};
    margin-left: 2.4rem;
    word-break: break-word;
  }
`;
