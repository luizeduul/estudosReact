import styled, { css } from 'styled-components';

export const Nav = styled.nav`
     ${({ theme }) => css`
        background: ${theme.navBackgroundColor};
        display: flex;
        align-items: center;
        padding: 16px;
        margin-top: 16px;
        border-radius: ${theme.borderRadius};

        a{
            color: ${theme.textColor};
            text-decoration: none;
            display: inline-block;

            & + a{
                margin-left: 16px;
            }
        }
  `};
   
`;