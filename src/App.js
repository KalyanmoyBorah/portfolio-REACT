import React from 'react';
import './App.css';

import { BrowserRouter } from 'react-router-dom'
import Fullsite from './components/Fullsite';


import {Ripple} from 'react-preloaders';




function App() {
  return (
    
      <BrowserRouter>
      <div>
      <Fullsite/>
      <Ripple background="#1A1E23" color='white' time={2000} />;
      
      </div>
      </BrowserRouter>
      
      
    
  );
}

export default App;
