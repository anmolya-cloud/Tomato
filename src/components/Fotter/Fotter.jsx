import React from 'react'
import './Fotter.css'
import { assets } from '../../assets/assets'

function Fotter() {
  return (
    <div className='fotter' id='fotter'>
        <div className="fotter-content">
        <div className="fotter-content-left">
            <img src={assets.logo } alt="" />
            <p> Loren ipsum is simple dummy text of the printing and typesetting industry.</p>
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
        </div>
        <div className="fotter-content-right">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="fotter-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91-9545456670</li>
                    <li>Contact@tomato.com</li>
                </ul>
        </div>
        </div>
        <hr/>
        <p className='fotter-copyright'>Copyright 2024 tomato.com -All Right Reserved</p>
      
    </div>
  )
}

export default Fotter
