import React, { Component } from 'react';

import { Container } from './styles';
import ButtonToogleTheme from '../ButtonToogleTheme';

export default class Header extends Component {

  render() {
    return (
      <Container>
        <h1>JStack's Blog</h1>
        <ButtonToogleTheme />
      </Container>
    );
  }
}

// export default function Header() {

//   return (
//     <Container>
//       <h1>JStack's Blog</h1>
//       <ButtonToogleTheme />
//     </Container>
//   );
// }
