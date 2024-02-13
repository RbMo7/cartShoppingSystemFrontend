import React from 'react';
import logo from './logo.svg';
import './App.css';
import Accordian_file from './components/accordian_file';
import { render } from 'react-dom';
import { time } from 'console';
import { title } from 'process';
import { accordionData } from './assets/accordianData';

function App() {
  return (
    <>
    <div className="App">
    {accordionData.map(({title, content}) => (<Accordian_file  title={title} content={content}/>))}
      
    </div>
    
    </>
  );
}

export default App;
