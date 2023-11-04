import { createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  body {
    font-family: sans-serif;
    background:${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.textColor};
  }
`;
