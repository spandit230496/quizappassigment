import { createContext, useContext, useState } from "react";

const ScoreContext=createContext();

export const ScoreContextProvider= ({children})=>{ 
 const [score,setScore]=useState(0);

 const scores= {
    score,
    setScore,
}
return (<ScoreContext.Provider value={scores}>{children}</ScoreContext.Provider>);

}

export const useScore=()=>useContext(ScoreContext)
