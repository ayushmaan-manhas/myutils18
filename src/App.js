import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alertwala from './components/Alertwala';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  } from "react-router-dom";
  

function App() {
  const [mode,setMode] = useState('light');  // dark mode enable or not
  const [alert,setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1800);
  }

  const toggleMode = ()=> {
    if (mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode Enabled","success");
      document.title = 'MyUtils18 - Dark Mode';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled","success");
      document.title = 'MyUtils18 - Light Mode';
    }
  }
  return (
    <> 
      <Router>
      <Navbar title="MyUtils18" aboutUs="About MU18" mode={mode} toggleMode={toggleMode} />
      <Alertwala alert = {alert}/>
          <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About />}>
            </Route>
            <Route path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes>
         </div> 
      </Router> 
       
    </>
  );
}

export default App;
