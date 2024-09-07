import React from 'react';
import '../Components/Homepage.css';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div>
      <header>
        <nav className='navbar'>
          <div className='logo'>
            <img src='/download (1).png' alt='Medium' />
          </div>
          <div className='options'>
            <ul>
                <li>Our story</li>
                <li>Membership</li>
                <li>Write</li>
                <li className='sign'><Link to="/login">Sign in</Link></li>
                <li className='get-started'>Get started</li>
            </ul>
          </div>
        </nav>
      </header>
      <div className='line'></div>

      <div className='left'>
        <h1>Human <br />stories & ideas</h1>
        <p>A place to read, write, and deepen your understanding</p>
        <button className='buttons'>Start reading</button>
      </div>

        <div className='right'>
            <img src='/4_SdjkdS98aKH76I8eD0_qjw.webp' alt='picture' />
        </div>

      <div className='line'></div>

      <footer>
        <div className='footer'>
            <ul>
                <li>Help</li>
                <li>Status</li>
                <li>About</li>
                <li>Careers</li>
                <li>Press</li>
                <li>Blog</li>
                <li>Privacy</li>   
                <li>Terms</li> 
                <li>Text to speech</li> 
                <li>Teams</li> 
            </ul>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
