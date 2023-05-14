import React, { useState ,createContext, useEffect} from 'react';
import Style from '../style/style.css'
import logo from '../assets/logoquiz.jpg'
import CountdownTimer from '../component/CountdownTimer';
import { QuizData } from '../QuizData';
import { useNavigate,useLocation} from 'react-router-dom';
import ResultPage from './ResultPage';
import { useScore } from '../context/ScoreContext';

export const Score =createContext();

function QuizPage(){
  const { score,setScore} = useScore();
  const [question,setQuestion]=useState(0)
  const [show ,setShow]=useState(false);
  const [selected,setSelected]=useState();
  const [click,setClick]=useState(false)
  
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate =useNavigate()
  const location = useLocation();  
  const data = location.state?.data;

  useEffect((props)=>{
    console.log(data);
  },[])
 
 

  function clickedAns(index){
    setSelectedOption(index)
    setClick(true)
    if(index===QuizData[question].ans)
      { 
        setScore(score+1) 
        
      }
      
  }

  function handleNext(){
    setQuestion(question+1)
    setSelectedOption(null)
    setClick(false)
  }
  const handleSubmitQuiz = ()=>{
    const currentTime = new Date().getTime();
    navigate('/result', { state: { data: data } })
      
    

  }
    
  
    return (
      
     <>
      
      <div className='container'>
        <div className='detail'>
         <div className='num'><h3><span>Question Number </span><br/>{question+1}/5</h3></div>
         <div className='timer'><h3><span>Timer </span><span><CountdownTimer/></span></h3></div>
        </div>
        <div className='quizquestion'>
        <h2>{QuizData[question].question}</h2>
        </div>
        <div className='quizanswer'>
        {QuizData[question].option.map((options,i)=>{

          return(<button key={i} className= 'option' disabled={click} onClick={()=>clickedAns(i)} style={{ background: selectedOption === i ? 'blue' : 'initial' }}>{options}</button>)
        })
      }
        </div>
        
        <div className='navigate'>
        
        <button className="quit" onClick={handleSubmitQuiz}>Quit</button>
      
        {question !==4 &&(
        <button  onClick={handleNext}>Next</button>)}
        {question ===4 &&(
        <button  className="submit" onClick={handleSubmitQuiz} >Submit</button>)}
        
        </div>
        
       </div>
     </>


    )

}
export default QuizPage