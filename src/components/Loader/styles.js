import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

export const Overlay = styled.div`
  align-items: center;
  animation: ${fadeIn} 0.3s;
  background: rgb(246, 245, 252, 0.7);
  display: flex;
  justify-content: center;
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;

  ${({ isLeaving }) => isLeaving && css`animation: ${fadeOut} 0.2s`}
`;
