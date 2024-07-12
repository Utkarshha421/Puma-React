import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Footer from './components/Footer';
import Login from './components/Login';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>

      </Routes>
      <Footer/>

    </div>
  );
}

export default App;
