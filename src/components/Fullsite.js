import React from 'react';

import './Fullsite.css'

import { Route } from 'react-router-dom';



import Navbar from './Navbar';
import About from './About';
import Portfolio from './Portfolio';
import Designs from './Designs';
import Footer from './Footer';
import Skills from './Skills';









const Fullsite = props => {
    return (
        <div className='fullsite'>
        
      
          <Navbar/>
          <Route path='/' exact component={Portfolio} />
      <Route path='/about' exact component={About} />
      <Route path='/designs' exact component={Designs} />
      <Route path='/skills' exact component={Skills} />
          <Footer/>  
      
      
      
    
        
      

     
      
      
        </div>
    );
}

export default Fullsite;