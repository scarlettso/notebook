import './App.css';
import React, {useState} from 'react';
import Clock from './components/clock';
import ToDoList from './components/todolist';
import {CalendarComponent} from '@syncfusion/ej2-react-calendars';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  const current = new Date();
  const date = `${current.getDate()}`;
  const monthAndYear = `${current.getMonth()+1}/${current.getFullYear()}`;
  const dateValue: Date =new Date(new Date().getFullYear(), new Date().getMonth(), 20);

  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  let day = weekday[current.getDay()];

  const [showClock, setShowClock] = useState(true);

  return(
    <div className='container'>
      <Router>
        <div className='nav'>
          <Link to="/">Notebook</Link>
          <Link to ="/deadline">Deadline</Link>
          <Link to ="/checklist">Checklist</Link>
          <Link to ="/timer">Pomodoro</Link>
          <Link to ="/report">Report</Link>
        </div>
        <Routes>
          <Route path="/" element={
          <div className='main'>
            <div className='date'>
              <p className='title'>{date}</p>
              <p>{day}</p>
              <p>{monthAndYear}</p>
            </div>
          </div>}>

          </Route>
          <Route path="/checklist" element=
            {
              <div className='main'><div>
                <CalendarComponent value={dateValue}></CalendarComponent>
              </div>
               
                <ToDoList />
              </div>
            }>
            
          </Route>
          <Route path="/timer" element={<div className='main'>
            <button onClick={() => setShowClock(!showClock)}>click me</button>{ showClock ? <Clock/> : null }</div>}>
            
          </Route>
        </Routes>
      </Router>
        
      
    </div>
  )
}

export default App;
