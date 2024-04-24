import styled from 'styled-components';

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
