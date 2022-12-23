import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled", "success");
    }
  }

  return (
    <>
      <Router>
        {/* <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} /> */}
        <Routes>
          {/* <div className="container my-3"> */}
            <Route  path='/about' element={<About />} />
            <Route  path='/' element={<TextForm />} />
          {/* </div> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;




// aboutText="About"
// showAlert={showAlert} mode={mode}