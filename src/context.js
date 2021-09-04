import React, {createContext, useState} from "react";

export const mycontext = createContext();

export default function DataProvider({ children }) {
    const [userData, setUserData] = useState([
        {
            username:"Senthil",
            email:"senthil@gmail.com",
        }
    ])

    return(
        <>
            <mycontext.Provider value={{ userData, setUserData }} >
            {children}
            </mycontext.Provider>
        </>
    )
}