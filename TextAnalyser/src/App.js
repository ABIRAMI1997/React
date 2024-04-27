import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import About from './components/About';
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#222A5A';
      showAlert('Dark mode', 'success');
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode', 'success');

    }
  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);


  }

  return (
    <>
    <Router>

      <Navbar title="TextAnalyse" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        {/*<Textform showAlert={showAlert} mode={mode}/>*/}
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/">
            <Textform showAlert={showAlert} mode={mode}/>
          </Route>
        </Switch>
      </div>
      </Router>
    </>
  );
}

export default App;
