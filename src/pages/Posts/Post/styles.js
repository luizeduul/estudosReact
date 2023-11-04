import styled, {css} from 'styled-components';

export const Container = styled.article`
  ${({ theme }) => css`
    background: ${theme.postBackgroundColor};
    display: flex;
    flex-direction: column;
    padding: 16px;
    border-radius: ${theme.borderRadius};
  `}

  h2 {
    margin: 0 0 8px;
  }

  small {
    opacity: 0.7;
  }

  & + article {
    margin-top: 8px;
  }
`;
