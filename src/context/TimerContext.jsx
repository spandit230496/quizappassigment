import { createContext, useContext, useEffect, useState } from "react";

const TimeContext=createContext();

export const TimeContextProvider= ({children})=>{ 
 const [inittime,setTime]=useState(0);

 const times= {
    inittime,
    setTime,
}



return (<TimeContext.Provider value={times}>{children}</TimeContext.Provider>);

}

export const useTime=()=>useContext(TimeContext)
