import React,{useContext} from 'react'
import { useScore } from '../context/ScoreContext'
import { useTime } from '../context/TimerContext'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { Global } from '../component/CountdownTimer'
function ResultPage(props){
    const navigate=useNavigate()
    const location = useLocation();
    const {score,setScore}=useScore()
    const data = location.state?.data;
    const finalTime=Date.now()
    let timeTaken=Math.floor(finalTime-data)/1000;

    function handleClick(){
    navigate('/')
        timeTaken=0;
        setScore(0)
    }
    
 
    const minutes = Math.floor(timeTaken / 60).toString().padStart(2, '0');
    const seconds = Math.floor(timeTaken % 60).toString().padStart(2, '0');
  
  
    return(
    
   <>
  
  

   <div className='container'>
    <h1 className='headline'>Your Final Result</h1>
   <div className='result'>
    <div className='percentage'>
    <h1>You have scored  {score*100/5}%</h1>
    <h2>{score>2?"Congratulation":"try again"}</h2>
    </div>
    <div className='mid'>
     <div>
        <h3>your Score</h3>
        <h2 className='score' >{score}/5</h2>
        <h3>Avg Score 2</h3>

     </div>
     <div style={{}}>
        <h3>Time Taken</h3>
        <h2 className='score'>{minutes}:{seconds}</h2>
        <h3>Avg Score 1 min</h3>

     </div>
    </div>
    
    
   </div>
     
    <h3>{score>2?"You Have Cleared the test with flying color😙😙":"You need Practice😥😥"}</h3>
    
    <button className='btn' onClick={handleClick}>Play Again</button>
    </div>
   </>


    )
}
export default ResultPage