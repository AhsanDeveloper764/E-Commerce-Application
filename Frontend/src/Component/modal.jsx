import React from 'react';
import Otp from './Otp';
import gee from '../assets/logo_boxed.svg';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const Modalac = () => {
  const recover = JSON.parse(localStorage.getItem("Credential") || []);
  const { email_address } = useParams();
  const abc = () =>{
    const dataXyz = recover.find((a)=> a.EmailAddress == email_address);
    // console.log(dataXyz);
  }
  useEffect(()=>{
    abc()
  },[])
  return <>
    <div style={{ backgroundColor: "black", fontSize: "30px", color: "black", 
    textAlign: "center" }}>--</div>
    <div className='sign-img'>
        <img src={gee} className="img-boxed" alt="abcn" />
    </div>
    <div className='abc-modal-main'>
        <h1 className='abc-modal-head'>Your Account Has Been Created</h1>
        <p className='abc-modal-para' >Thank you for creating your account at Combat 
        Corner. Your account details have been emailed to</p>
    </div>
    <Otp />
    <div style={{textAlign:"center",paddingTop:"30px"}} >
      <a href="/sign-in" className='abc-modal-anc' >Sign-In</a>
    </div>
  </>
}
export default Modalac;