import { createContext } from "react";
import { useState } from "react";

export const ClickedContext = createContext();


export const ClickedContextProvider = ({children})=>{
    const [clickedId, setClickedId] = useState("");
    const detail = {clickedId, setClickedId}
    return <ClickedContext.Provider value={detail}>{children}</ClickedContext.Provider>
}