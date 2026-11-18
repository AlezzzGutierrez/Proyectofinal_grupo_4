import { createContext, useState } from "react";
export const AuthorizationContext = createContext();

export const AuthorizationProvider = ({ children }) => {
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