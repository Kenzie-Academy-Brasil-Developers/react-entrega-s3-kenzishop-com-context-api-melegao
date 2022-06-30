import { createContext } from "react";
import { dataBase } from "../components/database";

export const CatalogueContext = createContext([]);

export const CatalogueProvider = ({children}) => {

    const catalogue = dataBase

    return (
        <CatalogueContext.Provider value={{catalogue}}>
            {children}
        </CatalogueContext.Provider>
    )

}