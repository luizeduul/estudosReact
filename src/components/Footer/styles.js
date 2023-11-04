import styled, { css } from 'styled-components';

export const Container = styled.footer`
  ${({ theme }) => css`
    background: ${theme.footerBackgroundColor};
    height: 70px;
    display: flex;
    align-items: center;
    padding: 0 24px;
    border-radius: ${theme.borderRadius};
    justify-content: space-between;
    margin-top: 24px;
    position: fixed;
    bottom: 0;
    width: 95.2vw;
  `}

  button {
    cursor: pointer;
    background: transparent;
    border: none;
  }
`;
