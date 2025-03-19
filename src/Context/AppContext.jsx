import { createContext, useState, useEffect } from "react";
import { logo } from "../assets/images";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');
    const [token, setToken] = useState(localStorage.getItem('token') || '');
    const [Auth, setAuth] = useState(true);
    const [page, setPage] = useState(1);
    const [sidemenu, setMenu] = useState(false);

    //change sidebar display
    const openMenu = () => {
        sidemenu === false ? setMenu(true) : setMenu(false);
    }


    //userdata
    const userData = {
        name: 'Ranjit',
        img: logo,
        email: 'mohamedadbiaziz515@gmail.com',
        gender: 'Male',
        Experience: 1,
        category: 'Student',
        badges: 2,
        points: 10
    };

    // Sync token with localStorage
    useEffect(() => {
        if (token) {
            localStorage.setItem('token', token);
        } else {
            localStorage.removeItem('token');
        }
    }, [token]);

    const value = {
        theme,
        setTheme,
        token,
        setToken,
        setAuth,
        Auth,
        userData,
        page,
        setPage,
        sidemenu,
        setMenu,
        openMenu
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppProvider };
