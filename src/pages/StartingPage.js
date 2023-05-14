import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Style from '../style/style.css'
import logo from '../assets/logoquiz.jpg'
import ChatIcon from '@mui/icons-material/Chat';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import QueryBuilderOutlinedIcon from '@mui/icons-material/QueryBuilderOutlined';
import LooksOneOutlinedIcon from '@mui/icons-material/LooksOneOutlined';
import Looks5Icon from '@mui/icons-material/Looks5';
import SportsScoreIcon from '@mui/icons-material/SportsScore';

function StartingPage(){
    const time= Date.now()
    const [show, setShow]=useState(false)
    const navigate=useNavigate()
    const navigateQuiz=()=>{
       
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      
        navigate("/quiz",{state:{data:time}})
    }
    return (
   
     <>
      <div className='container'>
       <div className='top'>
       <h1>Quiz Time</h1>  
       <img src={logo} alt='image'></img>
       </div>
       <div className='midcontent'>
        <h2 >Computer Quiz Time</h2>
         <div className='extra'>
            <h5><ChatIcon/>Leave a Comment</h5>
            <h5><BookmarkAddIcon/> Save Question</h5>
            <h5><EmojiEventsIcon/>Challenge a friend</h5>
         </div>
         <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
         sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
         <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
         sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
       </div>
         <div className='bottom'>
          <ul>
           <li><h3>This Quiz Includes</h3></li>
           <li><h5><DescriptionOutlinedIcon/>50% passsing</h5></li>
           <li><h5><QueryBuilderOutlinedIcon/>10 min</h5></li>
           <li><h5><LooksOneOutlinedIcon/>1 attempt daily</h5></li>
           <button onClick={()=>{setShow(true)}} >Take a Quiz</button>
          </ul>
         
         </div>
         
        <div className={show?"promptshow":"prompt"}  >
       <h2>Quiz Rules</h2>
       <h5><QueryBuilderOutlinedIcon/> 10 min Quiz</h5>
       <h6> keepin mind it's a time-bound quiz</h6>

       <h5> <Looks5Icon/>5 Question</h5>
       <h6> We Believe that you will ace it</h6>

       <h5><SportsScoreIcon/>50% passing criteria</h5>
       <h6> All the best ! see you on the otherside.</h6>
       <button onClick={navigateQuiz}>Start</button>
     </div>
     
       </div>
     </>


    )
}
export default StartingPage