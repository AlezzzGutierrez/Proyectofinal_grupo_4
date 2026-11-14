import { useContext } from "react";
import { AuthorizationContext } from "../contexts/AuthorizationContext";

export const useAuthorization = () => {
    const context = useContext(AuthorizationContext);
    if (!context) {
        throw new Error("useAuthorization debe usarse dentro de un AuthorizationProvider");
    }
    return context;
};