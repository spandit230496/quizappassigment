import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import StartingPage from './pages/StartingPage';
import QuizPage from './pages/QuizPage';
import ResultPage from './pages/ResultPage';
import { Score } from './pages/QuizPage';
function App() {

     
  return (
    <>
       
        <Routes>
        <Route strict path='/' element={<StartingPage/>}/>
        <Route strict path='/quiz' element={<QuizPage/>} />
        <Route strict path='/result' element={<ResultPage/>} />
        </Routes>

    </>
  );
}

export default App;
