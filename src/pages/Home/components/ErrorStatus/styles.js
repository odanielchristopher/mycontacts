import styled from 'styled-components';

export const Container = styled.div`
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
