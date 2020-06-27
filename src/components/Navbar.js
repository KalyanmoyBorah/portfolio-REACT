import React from 'react';
import './Navbar.css'


import {NavLink} from 'react-router-dom';











const navbar = props => {
  return (
    <div className='nav'>
      
        <NavLink className='head'
          to="/">
            <img src={require(`../images/Myimages/mylogo.png`)} className='mylogo'></img>
            
          </NavLink>
      <p style={{fontFamily:'InriaSerif'}} className='aboutp'>Kalyanmoy Borah is a UI/UX Designer & Full-Stack Developer based in Ahmedabad.</p>

      <div className='links '>
 
<NavLink className='link '
  exact={true}
  to="/"
  activeStyle={{
    borderBottom: '2px solid black'
  }}
>
<h5 className='linkheading'>PORTFOLIO</h5>
</NavLink>

<NavLink className='link '
  to="/designs"
  activeStyle={{
    borderBottom: '2px solid black'
  }}
>
<h5 className='linkheading'>UI/UX DESIGNS</h5>
</NavLink>

<NavLink className='link '
  to="/skills"
  activeStyle={{
    borderBottom: '2px solid black'
  }}
>
<h5 className='linkheading'>SKILLS</h5>
</NavLink>

<NavLink className='link '
  to="/about"
  activeStyle={{
    borderBottom: '2px solid black'
  }}
>
<h5 className='linkheading'>ABOUT</h5>
</NavLink>


<a className='link blog' rel='noopener noreferrer' target='_blank' href='http://www.insaneninetysix.blogspot.com'><h5 className='linkheading'>BLOG</h5></a>






</div>


     
    
  
    </div>
    
  );
}

export default navbar;