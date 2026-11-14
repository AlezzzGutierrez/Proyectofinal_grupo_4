import { createContext, useState } from "react";

// 1. Creamos el contexto
export const AuthorizationContext = createContext();

// 2. Creamos y exportamos el Provider
export const AuthorizationProvider = ({ children }) => {
    // Inicializamos leyendo de localStorage
    const [sessionUser, setSessionUser] = useState(() => {
        const storedUser = localStorage.getItem("currentUser");
        return storedUser ? JSON.parse(storedUser) : null;
    });

    const saveSession = (user) => {
        localStorage.setItem("currentUser", JSON.stringify(user));
        setSessionUser(user);
    };

    const clearSession = () => {
        localStorage.removeItem("currentUser");
        setSessionUser(null);
    };

    return (
        <AuthorizationContext.Provider value={{ sessionUser, saveSession, clearSession }}>
            {children}
        </AuthorizationContext.Provider>
    );
};