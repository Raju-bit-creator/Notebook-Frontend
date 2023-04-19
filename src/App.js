
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';
import { useEffect, useState, useContext } from 'react';
import userContext from "./context/user/userContext"
import Notedetail from './components/Notedetail';
import Footer from './components/Footer';
import Banner from './components/Banner';



function App() {

  const context = useContext(userContext);
  const { getUser } = context;


  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }


  useEffect(() => {
    getUser()
  }, [])

  return (
    <><NoteState>
      <Router>
        <Navbar />
        <Banner />
        <Alert alert={alert} />
        <div className='container'>
          <Routes>
            <Route exact path="/profile" element={<About />} />
            <Route exact path="/" element={<Home showAlert={showAlert} />} />
            <Route exact path="/login" element={<Login showAlert={showAlert} />} />
            <Route exact path="/signup" element={<Signup showAlert={showAlert} />} />
            <Route exact path=":noteId" element={<Notedetail showAlert={showAlert} />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </NoteState>
    </>
  );
}

export default App;
