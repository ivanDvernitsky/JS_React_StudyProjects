import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext()

export const AppProvider = ({children}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
    const [shownSubm, setShownSubm] = useState(0)

    function openSidebar() {
        setIsSidebarOpen(true)
    }
    function closeSidebar() {
        setIsSidebarOpen(false)
    }
    function openSubmenu() {
        setIsSubmenuOpen(true)
    }
    function closeSubmenu() {
        setIsSubmenuOpen(false)
    }

    return <AppContext.Provider
        value={{
            isSidebarOpen,
            isSubmenuOpen,
            openSidebar,
            closeSidebar,
            openSubmenu,
            closeSubmenu,
            shownSubm,
            setShownSubm
        }}
    >
        {children}
    </AppContext.Provider>
}

export function useGlobalContext() {
    return useContext(AppContext)
}
