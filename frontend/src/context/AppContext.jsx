import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const AppContext=createContext()

const AppProvider=({children})=>{
    const [user, setuser] = useState(false)
    const [loading, setLoading] = useState(false)
    const [theme, setTheme] = useState("light")
    const navigate=useNavigate()

    
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        setTheme(savedTheme);
        document.documentElement.setAttribute("data-theme", savedTheme);
    }, []);

    return (
        <AppContext.Provider value={{user, setuser, loading, setLoading, navigate,theme, setTheme}}>
            {children}
        </AppContext.Provider>
    )
}


export {AppContext, AppProvider}