import { createContext, useContext } from "react";

const XRContext = createContext();

export const StateProvider = ({ children }) => {
    return <XRContext.Provider value={{ a: 1 }}>{children}</XRContext.Provider>;
};

export const useXRContext = () => useContext(XRContext);
