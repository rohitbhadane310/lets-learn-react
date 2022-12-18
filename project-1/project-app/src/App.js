import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [Mode, setMode] = useState('dark');



  return (
    <>
      <Navbar title="TextUtils" aboutText="About" mode={Mode} />
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
