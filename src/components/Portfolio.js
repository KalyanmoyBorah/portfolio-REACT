import React,{ useState } from 'react';
import './Portfolio.css';

import Projects from '../Data/Projects'










function Portfolio(props){

  

  return (
    
    <div>
      {Projects.map(project => {
       return <div className='project'>
        <img src={require(`../images/projects/${project.image}`)} className='logo'></img>
        <div className='details'>
        <h4 className='projectname' style={{fontFamily:'BebasNeue'}}>{project.name}</h4>
        <p className='projectabout' style={{fontFamily:'InriaSerif'}}> {project.about}</p>
       
        

        <h6  className='projectview'><a style={{fontFamily:'InriaSerif'}} className='view' rel='noopener noreferrer' target='_blank' href={project.link}>VIEW</a></h6>

        </div>
     </div>

      })}
    </div>
    
        
     

     

     

      
   
       
       
      
    
  );

}

export default Portfolio;