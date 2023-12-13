

import React from 'react';
import { link } from 'react-router-dom';
import 

const footer = () => {
    return(
        <footer className='footer-container'> 
          <div className='contact-details'>
            <h3>Contact Us</h3>
            <ul>
              <li>
                <i className='fas fa-map-market-alt'></i>Lagos, Nigeria
              </li>
              <li>
                <i className='fas fa-envelope'></i>farmmart@moringa.com
              </li>
              <li>
                <i className='fas fa-phone'></i> 09011111111
              </li>
            </ul>
          </div>

          <div>
          
     
  

   
          </div>

          <div className='site-map'>
              <h3>Site Map</h3>
              <ul>
               <li><Link to="/store">Store</Link></li>
               <li><Link to="/aboutus">About Us</Link></li>
               <li><Link to="/contactus">Contact Us</Link></li>      
              </ul>              
          </div>
          

        </footer>
    )
}