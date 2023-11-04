import styled, { css } from 'styled-components';

export const Container = styled.header` 
  ${({ theme }) => css`
    background: ${theme.headerBackgroundColor};
    height: 100px;
    display: flex;
    align-items: center;
    padding: 0 24px;
    border-radius: ${theme.borderRadius};
    justify-content: space-between;
  `}

  button {
    font-size: 16px;
    cursor: pointer;
    cursor: pointer;
    background: transparent;
    border: none;
  }
`;
