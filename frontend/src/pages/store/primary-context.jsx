import { createContext, useEffect, useState } from "react";

export const ModeContext = createContext();

export default function ModeContextProvider({ children }) {

    const [darkMode, setDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('theme');
        if (savedMode === 'dark') {
            return true;
        } else if (savedMode === 'light') {
            return false
        } else {
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? true : false;
        }
    })

    useEffect(() => {
        if(darkMode) {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }, [darkMode])

    function handleMode() {
        setDarkMode(!darkMode)
    }

    return (
        <ModeContext value={{ darkMode, handleMode }} >
            { children }
        </ModeContext>
    )
}