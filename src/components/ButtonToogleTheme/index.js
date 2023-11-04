import React, { useContext } from 'react'
import { ThemeLayoutContext } from '../../contexts/ThemeStyleContext';

function ButtonToogleTheme() {
    const { selectedTheme, onToogleTheme } = useContext(ThemeLayoutContext);

    function handleClick() {
        if (typeof onToogleTheme === 'function') {
            onToogleTheme();
        }
    }

    return (
        <button type="button" onClick={handleClick}>
            {
                selectedTheme === 'DARK' ? '🌞' : '🌙'
            }
        </button>
    )
}

export default ButtonToogleTheme;