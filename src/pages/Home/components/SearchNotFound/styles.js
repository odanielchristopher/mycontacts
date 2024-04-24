import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 1.6rem;
  align-items: flex-start;
  display: flex;

  span {
    color: ${({ theme }) => theme.colors.gray[200]};
    margin-left: 2.4rem;
    word-break: break-word;
  }
`;
