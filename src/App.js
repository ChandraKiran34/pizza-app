import './App.css';
import Navbar from './Components/Navbar'; 
import Footer from './Components/Footer'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import About from './Pages/About';
import Contact from './Pages/Contact';
function App() {
  return (
    <div className="App">
        <Router>
        <Navbar />
          <Routes>
              <Route path="/" exact element={<Home/>} />
              <Route path="/menu" exact element={<Menu/>} />
              <Route path="/about" exact element={<About/>} />
              <Route path="/contact" exact element={<Contact/>} />
          </Routes>
        <Footer />
        </Router>

    </div>
  );
}

export default App;
