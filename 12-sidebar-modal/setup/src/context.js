import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)

    function openSidebar () {
        setIsSidebarOpen(true)
    }
    function closeSidebar () {
        setIsSidebarOpen(false)
    }
    function openModal () {
        setIsModalOpen(true)
    }
    function closeModal () {
        setIsModalOpen(false)
    }
    return <AppContext.Provider 
        value={{
        isSidebarOpen,
        isModalOpen,
        openSidebar,
        closeSidebar,
        openModal,
        closeModal
    }}> {children} </AppContext.Provider>
}

// custom hook


export {AppContext, AppProvider}