import React, { useEffect, useState } from 'react';
import {useNavigate } from 'react-router-dom';
import { useTime } from '../context/TimerContext';
//import { useContext } from 'react';
import { createContext } from 'react';
import ResultPage from '../pages/ResultPage';


 export const Global =createContext()
function CountdownTimer() {
  
  const [timeLeft, setTimeLeft] = useState(10*60
    ); // 10 minutes in seconds
    const [time,setTime]=useState(0)
  const [show,setShow]=useState(false)
  const navigate=useNavigate()
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(timeLeft - 1);
      setTime(time+1)
    }, 1000);
   
    // Clear the interval when the component is unmounted
    return () => clearInterval(timer);
  }, [timeLeft]);
  
   //const time=timeLeft;
   const timeTaken= Date.now()
  useEffect(()=>{
    setShow(true)
    if(timeLeft==0)
    navigate('/result' ,{state:{data:timeTaken}})
    
    
  },[timeLeft])

  function formatTimeLeft() {
    const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
    const seconds = (timeLeft % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  }
  
  return (
    <div>
      
      <Global.Provider value={timeLeft}>
      <div>

        <p>{formatTimeLeft()}</p>
      </div>
    </Global.Provider>
     
    </div>
  );
}

export default CountdownTimer;
