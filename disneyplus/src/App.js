import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Detail from './components/Detail';
import Registration from './components/Registration';


function App() {
  return (
    <div className="App">

      <Router>
        <Header/>
        <Routes>
          <Route path="registration" element={<Registration/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="detail/:id" element={<Detail/>}/>
        </Routes>
      </Router>

      {/* <Footer/> */}
    </div>
  );
}

export default App;
