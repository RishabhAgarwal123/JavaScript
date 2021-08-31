import React, { useState, useContext } from 'react'
import App from './App';
import sublinks from './data'

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
    const [subMenu, setSubMenu] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [location, setLocation] = useState({});
    const [page, setPage] = useState({ page: '', links: [] });

    const openSidebar = () => {
        setSidebarOpen(true);
    }

    const closeSidebar = () => {
        setSidebarOpen(false);
    }

    const openSubMenu = (text, coordinates) => {
        // console.log(text);
        const page = sublinks.find((link) => link.page === text);
        // console.log(page);
        setPage(page);
        setLocation(coordinates);
        setSubMenu(true);
    }

    const closeSubMenu = () => {
        setSubMenu(false);
    }

    return <AppContext.Provider value={{ subMenu, openSubMenu, closeSubMenu, sidebarOpen, openSidebar, closeSidebar, location, page }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}