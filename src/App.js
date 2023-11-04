import React, { Component, useContext } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import { ThemeLayoutProvider, ThemeLayoutContext } from './contexts/ThemeStyleContext';
import themes from './styles/themes';

class App extends Component {

  constructor(props) {
    super(props);

    // this.state = {
    //   theme: 'DARK'
    // }
  }

  // componentDidMount() {
  //   const item = getItemFromLocalStorage('THEME');

  //   this.setState({
  //     theme: item
  //   });
  // }


  // _handleToogleTheme = () => {
  //   const { theme } = this.state;

  //   this.setState(prevState => ({
  //     theme: prevState.theme === 'DARK' ? 'LIGHT' : 'DARK'
  //   }))

  //   const newTheme = theme === 'DARK' ? 'LIGHT' : 'DARK';

  //   saveItemToLocalStorage('THEME', newTheme);
  // }

  render() {
    return (
      <ThemeLayoutProvider>
        <ThemeLayoutContext.Consumer>
          {({ selectedTheme }) => {
            return (
              <ThemeProvider theme={themes[selectedTheme] || themes.DARK}>
                <GlobalStyle />
                <Layout />
              </ThemeProvider>
            )
          }}
        </ThemeLayoutContext.Consumer>
      </ThemeLayoutProvider>
    );
  }
};

export default App;

// function App() {
//   return (
//     <ThemeLayoutProvider>
//       <ThemeLayoutContext.Consumer>
//         {({ selectedTheme }) => {
//           console.log('selec', selectedTheme);
//           return(
//             <ThemeProvider theme={themes[selectedTheme]}>
//               <GlobalStyle />
//               <Layout />
//             </ThemeProvider >
//           )
//         }}
//       </ThemeLayoutContext.Consumer>
//     </ThemeLayoutProvider>
//   );
// };

// export default App;