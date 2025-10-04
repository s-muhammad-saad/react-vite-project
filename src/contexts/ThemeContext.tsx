import { useState, type ReactNode, createContext } from 'react';

// defining the shape of our context, information to broadcast 
type ThemeContextType = {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
};

// creating the context with a default value
export const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

// creating the provider context
export function ThemeProvider({ children }: { children: ReactNode }){
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    const toggleTheme = () => {
        setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
    };

    // value prop is where we pass the data we want to broadcast
    return(
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}