import styled from 'styled-components';

export const Overlay = styled.div`
align-items: center;
  background: #22222299;
  backdrop-filter: blur(.5rem);
  box-shadow: 0rem .4rem 1.0rem 0rem #0000000A;
  display: flex;
  justify-content: center;
  position: fixed;
  height: 100%;
  left: 0;
  top: 0;
  width: 100%;

`;

export const Container = styled.div`
  background: #FFF;
  border-radius: .4rem;
  padding: 2.4rem;
  max-width: 45.0rem;
  width: 100%;

  > h1 {
    font-size: 2.2rem;
    color: ${({ theme, danger }) => (
    danger ? theme.colors.danger.main : theme.colors.gray[900]
  )};
  }

  .modal-body {
    margin-top: 3.2rem;
  }
`;

export const Footer = styled.footer`
  align-items: center;
  margin-top: 3.2rem;
  display: flex;
  justify-content: flex-end;

  .cancel-button {
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.gray[200]};
    font-size: 1.6rem;
    margin-right: 2.4rem;
  }
`;
