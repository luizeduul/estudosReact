import React from 'react';
import ButtonToogleTheme from '../ButtonToogleTheme';

import { Container } from './styles';

export default function Footer() {
  return (
    <Container>
      <span>JStack's Blog. Todos os direitos reservados.</span>
      <ButtonToogleTheme />
    </Container>
  );
}

