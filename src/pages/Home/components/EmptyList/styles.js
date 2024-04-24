import styled from 'styled-components';

export const Container = styled.div`
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
