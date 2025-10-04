import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

function ThemeToggleButton(){

    const { theme, toggleTheme } = useContext(ThemeContext);

    return(
        <button onClick={toggleTheme} style={{ margin: '1rem' }}>Current Theme: {theme}</button>
    );
}

export default ThemeToggleButton;