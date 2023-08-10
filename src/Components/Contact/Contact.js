import React from 'react';
import "./Contact.css"
// Importing MUI components
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import PinterestIcon from '@mui/icons-material/Pinterest';

function Contact() {
  return (
    <div className='contact'>
        <div className="wrapper">
            <span>BE IN TOUCH WITH US:</span>
            <div className="mail">
                <input type="text" className="text" placeholder='Enter Your E-Mail...' />
                <button>JOIN US</button>
            </div>
        </div>
        <div className="icons">
            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon />
            <GoogleIcon />
            <PinterestIcon />
        </div>
    </div>
  )
}

export default Contact