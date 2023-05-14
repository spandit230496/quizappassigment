import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import { useScore } from './context/ScoreContext';
import {ScoreContextProvider} from './context/ScoreContext'
import { TimeContextProvider } from './context/TimerContext';
import { Global } from './component/CountdownTimer';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
  <BrowserRouter>

  <React.StrictMode>
    <TimeContextProvider>
  <ScoreContextProvider>
    <App />
  </ScoreContextProvider>
  </TimeContextProvider>
  </React.StrictMode>
  
  </BrowserRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
