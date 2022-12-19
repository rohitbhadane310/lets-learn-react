import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';

function App() {
  const [mode, setMode] = useState('dark');

  const toggleMode = () =>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode ={toggleMode}/>
      {/* <Navbar title = "textUtils" aboutText = "About textUtils"/> */}
      <div className="container my-3">
        {/* <TextForm heading = "Enter the text to analyze below"/> */}
        {/* <About /> */}
        <TextForm mode={mode}/>
      </div>
    </>
  );
}

export default App;
