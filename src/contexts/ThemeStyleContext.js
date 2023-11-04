import React, { createContext, useEffect, useState } from 'react'
import { getItemFromLocalStorage, saveItemToLocalStorage } from '../helpers/storagehelper';

export const ThemeLayoutContext = createContext({});

export class ThemeLayoutProvider extends React.Component {

    constructor(props){
        super(props);

        let theme = 'dark';
        try {
            theme = getItemFromLocalStorage('THEME');
        } catch (error) {
            console.error('Erro ao recuperar tema da local storage');
        }

        this.state = {
            theme
        }
    }

    handleToogleTheme = () => {
        this.setState(prevState => ({
            theme: prevState.theme === 'DARK' ? 'LIGHT' : 'DARK'
        }), () => {
            const newTheme = this.state.theme === 'DARK' ? 'DARK' : 'LIGHT';

            saveItemToLocalStorage('THEME', newTheme);
        });
    }

    render() {
        return (
            <ThemeLayoutContext.Provider
                value={{
                    selectedTheme: this.state.theme,
                    onToogleTheme: this.handleToogleTheme
                }}>
                {this.props.children}
            </ThemeLayoutContext.Provider>
        )
    }
}

// export const ThemeLayoutProvider = ({ children }) => {

//     const [theme, setTheme] = useState('DARK');

//     useEffect(() => {
//         const item = getItemFromLocalStorage('THEME');

//         setTheme(item);
//     }, []);

//     function handleToogleTheme() {
//         setTheme(prevState => prevState === 'DARK' ? 'LIGHT' : 'DARK');

//         const newTheme = theme === 'DARK' ? 'LIGHT' : 'DARK';

//         saveItemToLocalStorage('THEME', newTheme);
//     }

//     return (
//         <ThemeLayoutContext.Provider
//             value={{
//                 selectedTheme: theme,
//                 onToogleTheme: handleToogleTheme
//             }}>
//             {children}
//         </ThemeLayoutContext.Provider>
//     )
// }

