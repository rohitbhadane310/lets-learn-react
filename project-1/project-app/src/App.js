import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('dark');

  const toggleMode = () =>{
    if(mode === 'light')
    {
      setMode('dark');
    }
    else
    {
      setMode('light');
    }
  }

  return (
    <>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode ={toggleMode}/>
      {/* <Navbar title = "textUtils" aboutText = "About textUtils"/> */}
      <div className="container my-3">
        {/* <TextForm heading = "Enter the text to analyze below"/> */}
        <About />
        <TextForm />
      </div>
    </>
  );
}

export default App;
