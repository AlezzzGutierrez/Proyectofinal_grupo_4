import { useState } from "react";

export const useAuthorization = () => {
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

    return {
        sessionUser,
        saveSession,
        clearSession
    };
};