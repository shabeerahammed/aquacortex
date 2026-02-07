import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext(null);

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

export const ThemeProvider = ({ children }) => {

    const getInitialTheme = () => {
        if (typeof window === 'undefined') return 'dark';

        const savedTheme = localStorage.getItem('aquacortex-theme');
        if (savedTheme) return savedTheme;

        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        return prefersDark ? 'dark' : 'light';
    };

    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        localStorage.setItem('aquacortex-theme', theme);

        const root = document.documentElement;

        root.classList.remove('light-mode', 'dark-mode');

        if (theme === 'light') {
            root.classList.add('light-mode');
        } else {
            root.classList.add('dark-mode');
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    };

    return (
        <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
