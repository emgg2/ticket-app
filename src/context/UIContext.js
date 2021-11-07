import React, { createContext, useState} from 'react'; 

export const UIContext = createContext();

export default function UiProvider ({ children }) {
    const [ ocultarMenu, setOcultarMenu ] = useState(false);

    const showMenu = () => {
        setOcultarMenu( false );        
    }

    const hideMenu = () => {
        setOcultarMenu( true );
    }
    return (
        <UIContext.Provider value={{
            ocultarMenu, 
            showMenu,
            hideMenu
        }}>
            { children }
        </UIContext.Provider>
    )
}
