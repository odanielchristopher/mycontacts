import styled, { css } from 'styled-components';

const ContainerVariants = {
  default: css`background: ${({ theme }) => theme.colors.primary.main};`,
  success: css`background: ${({ theme }) => theme.colors.success.main};`,
  danger: css`background: ${({ theme }) => theme.colors.danger.main};`,
};

export const Container = styled.div`
  align-items: center;
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
`;
