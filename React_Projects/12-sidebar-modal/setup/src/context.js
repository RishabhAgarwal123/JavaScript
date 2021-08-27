import React, { useState, useContext } from 'react'

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [showModal, setShowModal] = useState(false);
    const [sidebar, setSidebar] = useState(false);

    const openSidebar = () => {
        setSidebar(true);
    }

    const closeSidebar = () => {
        setSidebar(false);
    }

    const openModal = () => {
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    }

    return <AppContext.Provider value={{ showModal, sidebar, openModal, closeModal, openSidebar, closeSidebar }}>{children}</AppContext.Provider>
}

// Custom Hook
export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppProvider, AppContext }