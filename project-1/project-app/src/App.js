import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [Mode , setMode] = useState('dark');

  

  return (
    <>
    <Navbar title="TextUtils" aboutText = "About" mode = {Mode} />
      {/* <Navbar title = "textUtils" aboutText = "About textUtils"/> */}
      <div className="container my-3">
      <div class="form-check form-switch text-dark">
          <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label class="form-check-label" for="flexSwitchCheckDefault">Enable Dark Mode</label>
       </div>
        {/* <TextForm heading = "Enter the text to analyze below"/> */}
        <About/>
        <TextForm/>
      </div>
    </>
  );
}

export default App;
