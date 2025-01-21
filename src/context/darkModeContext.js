import {createContext, useEffect, useReducer } from "react"
import { DarkModeReducer } from "./darkModeReducer"

const INITIAL_STATE = {
    darkMode: localStorage.getItem("theme")
    ? JSON.parse(localStorage.getItem("theme"))
    : false
}

export const DarkModeContext = createContext(INITIAL_STATE)

export const DarkModeContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE)

    useEffect(() => {
        localStorage.setItem("theme", JSON.stringify(state.darkMode))
    }, [state])

    return (
        <DarkModeContext.Provider value={{darkMode: state.darkMode, dispatch}}>
            {children}
        </DarkModeContext.Provider>
    )
}