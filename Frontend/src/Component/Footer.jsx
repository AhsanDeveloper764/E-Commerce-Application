import React from 'react';
import Logo from '../assets/logo_boxed.svg';
import inst from '../assets/instagram.svg';
import fcb from '../assets/facebook.svg';
import yt from '../assets/youtube.svg';
import linkdin from '../assets/linkedIn.svg';


function Footer() {
  return <>
    <div className='main-footer container' >
      <div>
        <img src={Logo} className="img-footer" alt="" />
      </div>
      <div className='sub-footer' >
        <div className='pro-footer'>
          <h1 className='head-footer' >PRODUCTS</h1>
          <a href="" className='anc-foot'>Gi's</a>
          <a href="" className='anc-foot'>Gloves</a>
          <a href="" className='anc-foot'>Equipment</a>
          <a href="" className='anc-foot'>Protection</a>
          <a href="" className='anc-foot'>Apparel</a>
          <a href="" className='anc-foot'>Trainers</a>
          <a href="" className='anc-foot'>Bags</a>
        </div>
        <div className='pro-footer'>
          <h1  className='head-footer' >EXPLORE</h1>
          <a href="" className='anc-foot'>Wholesale</a>
          <a href="" className='anc-foot'>About CC</a>
          <a href="" className='anc-foot'>Pro Team</a>
          <a href="" className='anc-foot'>Ambassadors</a>
          <a href="" className='anc-foot'>CRNR Gyms</a>
          <a href="" className='anc-foot'>Free Offers</a>
          <a href="" className='anc-foot'>Careers</a>
        </div>
        <div className='pro-footer'>
          <h1  className='head-footer' >Support</h1>
          <a href="" className='anc-foot'>Gi's</a>
          <a href="" className='anc-foot'>Gloves</a>
          <a href="" className='anc-foot'>Equipment</a>
          <a href="" className='anc-foot'>Protection</a>
          <a href="" className='anc-foot'>Apparel</a>
          <a href="" className='anc-foot'>Trainers</a>
          <a href="" className='anc-foot'>Bags</a>
        </div>
        <div className='pro-footer'>
          <h1  className='head-footer' >CONNECT</h1>
          <div style={{display:"flex",justifyContent:"start",gap:"5px"}} >
            <img src={inst} className='icon-footer' alt="" />
            <img src={fcb} className='icon-footer' alt="" />
            <img src={yt} className='icon-footer' alt="" />
            <img src={linkdin} className='icon-footer' alt="" />
          </div>
          <a href="" className='anc-foot'>Call Us</a>
          <a href="" className='anc-foot'>Email</a>
        </div>
      </div>
    </div>
    <div style={{textAlign:"center"}} >
      <p className='para-copy' >Copyright 2025 Combat Corner. All rights reserved.</p>
    </div>
  </>
}
export default Footer;



