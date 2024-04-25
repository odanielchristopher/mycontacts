import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const scaleIn = keyframes`
  from { transform: scale(0); }
  to { transform: scale(1); }
`;

const scaleOut = keyframes`
  from { transform: scale(1); }
  to { transform: scale(0); }
`;

export const Overlay = styled.div`
  align-items: center;
  animation: ${fadeIn} 0.3s;
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

  ${({ isLeaving }) => isLeaving && css`animation: ${fadeOut} 0.2s;`}
`;

export const Container = styled.div`
  animation: ${scaleIn} 0.3s;
  background: #FFF;
  border-radius: .4rem;
  max-width: 45.0rem;
  padding: 2.4rem;
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

  ${({ isLeaving }) => isLeaving && css`animation: ${scaleOut} 0.2s;`}
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

    &[disabled] {
      cursor: not-allowed;
    }
  }
`;
