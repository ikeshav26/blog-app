import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";


const AppContext=createContext()

const AppProvider=({children})=>{
    const [user, setuser] = useState(true)
    const [loading, setLoading] = useState(false)
    const navigate=useNavigate()
    return (
        <AppContext.Provider value={{user, setuser, loading, setLoading, navigate}}>
            {children}
        </AppContext.Provider>
    )
}


export {AppContext, AppProvider}