import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light') // wether dark mode is enbaled or not
  const [btnText, setBtnText] = useState("Enable DarkMode");
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      Type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      setBtnText('Enable LightMode');
      document.body.style.backgroundColor = '#082743'
      showAlert("DarkMode has been Activated", "success");
    } else {
      setmode('light');
      document.body.style.backgroundColor = 'white'
      setBtnText('Enable DarkMode');
      showAlert("LightMode has been Activated", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutUs="AboutTextUtlis" mode={mode} toggleMode={toggleMode} btnText={btnText} />
        <Alert alert={alert} />
        <div className="container my-3">
        <Routes>
          <Route path="/" element={<TextForm heading="Enter Your Text In The TextBox Below..." mode={mode} showAlert={showAlert} />} />
          <Route path="/Abt" element={<About  mode={mode}/>} /> 
            
        </Routes>
        </div>

      </Router>

    </>
  );
}

export default App;

