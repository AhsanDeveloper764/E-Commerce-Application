import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import gee from '../assets/logo_boxed.svg';
import { useNavigate } from 'react-router-dom';

function Lost() {
  const  navigate = useNavigate();
  const { email_address } = useParams();
  const [inputEmail,setinputEmail] = useState(""); 
  const data = JSON.parse(localStorage.getItem("Credential") || []);
  const handlelost = (e) => {
    e.preventDefault();
    const signlost = data.find((x)=> {
        // console.log("Checking:", x.EmailAddress);
        return inputEmail === x.EmailAddress
    });
    if(signlost){
        navigate("/reset/" + inputEmail);
    }else{
        alert("Email does not match");
    }
  }
  return <>
    <div style={{ backgroundColor: "black", fontSize: "30px", color: "black", 
    textAlign: "center" }}>--</div>
    <div className='sign-img'>
        <img src={gee} className="img-boxed" alt="abcn" />
    </div>
    <form action="" onSubmit={handlelost}>
    <div className='main-email-xyz' >
        <label htmlFor="" >
        Enter Your Registered Email</label>
        <input type="email" placeholder='enter your registered email*' name='email' 
        className='email-xyz' required value={inputEmail} 
        onChange={(e)=> setinputEmail(e.target.value)}  />
        <button className='sub-btn' >Submit</button>
    </div>
</form>
  </>
}

export default Lost;