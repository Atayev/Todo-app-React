import React from 'react'
import Container from 'react-bootstrap/Container';
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
function Footer() {
    
    const year = new Date().getFullYear();
  return (
    <>
    
        <div className='footer bg-dark shadow-lg'>
        <Container>
            <div className="text-white py-1">
                <a href="https://github.com/Atayev" target="_blank" rel='noreferrer'><FaGithub style={{margin:"5px"}}/></a>
                <a href="https://www.linkedin.com/in/atayevibrahim/" target="_blank" rel='noreferrer' ><FaLinkedinIn style={{margin:"5px"}}/></a>
            </div>  
            <div className='text-white py-1'>
                <p>Copyrights &copy; {year} All rigths reserved</p>
            </div> 
            </Container>    
        </div>
        
      
    
    </>
  )
}

export default Footer