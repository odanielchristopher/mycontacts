import styled, { css, keyframes } from 'styled-components';

const MessageIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10.0rem);
  }
  to {
    opacity: 1;
    transform: translateY(0rem);
  }
`;

const MessageOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0rem);
  }
  to {
    opacity: 0;
    transform: translateY(10.0rem);
  }
`;

const ContainerVariants = {
  default: css`background: ${({ theme }) => theme.colors.primary.main};`,
  success: css`background: ${({ theme }) => theme.colors.success.main};`,
  danger: css`background: ${({ theme }) => theme.colors.danger.main};`,
};

export const Container = styled.div`
  align-items: center;
  animation: ${MessageIn} 0.3s;
  border-radius: .4rem;
  box-shadow: 0rem 2.0rem 2.0rem -1.6rem #00000040;
  color: #FFF;
  cursor: pointer;
  display: flex;
  justify-content: center;
  gap: .8rem;
  padding: 1.6rem 3.2rem;

  ${({ type }) => ContainerVariants[type] || ContainerVariants.default}

  & + & {
    margin-top: 1.2rem;
  }

  ${({ isLeaving }) => isLeaving && css`animation: ${MessageOut} 0.2s`};
`;
