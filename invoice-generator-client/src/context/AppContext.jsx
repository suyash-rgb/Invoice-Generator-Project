import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) =>{

    const [invoiceTitle, setInvoiceTitle] = useState("New Invoice");
    

    const contextValue = {
        invoiceTitle, setInvoiceTitle
    }



    return(
        <AppContext.Provider value={{invoiceTitle, setInvoiceTitle}}>
            {children}
        </AppContext.Provider>
    )
}