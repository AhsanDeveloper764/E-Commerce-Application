import React, { useState } from 'react';
import gee from '../assets/logo_boxed.svg';
import { useNavigate } from 'react-router-dom';
import Password from 'antd/es/input/Password';

const Reset = () => {
  const Amazfound = JSON.parse(localStorage.getItem("Credential") || []);
  const [recoverA,setRecoverA] = useState("");
  const [recoverB,setRecoverB] = useState("");
  const navigate = useNavigate();
  const handleSend = (e) => {
    e.preventDefault();
    const zyx = Amazfound.findIndex((item) => { 
        console.log("bbb",item.Recovery_code);
        return item.Recovery_code === Number(recoverA)
    })
    if(zyx !==-1 ){
        console.log("aaa",zyx);
        Amazfound[zyx] = {...Amazfound[zyx],Password:recoverB}
        localStorage.setItem(("Credential"),JSON.stringify(Amazfound));
        navigate("/sign-in");
    }else{
        alert("Email or Recovery code is incorrect")
    }
    // const newPassword = recoverB;
    // const update = {...newPassword,Password:recoverB};
    // localStorage.setItem(("Credential"),JSON.stringify(update));
  }
  return <>
    <div style={{ backgroundColor: "black", fontSize: "30px", color: "black", 
        textAlign: "center" }}>--</div>
    <div className='sign-img'>
        <img src={gee} className="img-boxed" alt="abcn" />
    </div>
    <form action="" onSubmit={handleSend}>
    <div className='main-email-xyz' >
        <label htmlFor="" >
        Enter Your Recovery Code</label>
        <input type="number" placeholder='enter your recovery code*' name='code' 
        className='email-xyz' required value={recoverA}
        onChange={(e)=>setRecoverA(e.target.value)} />
        <label htmlFor="" >
        Enter Your New Password</label>
        <input type="password" placeholder='enter your new password*' name='password' 
        className='email-xyz' required value={recoverB}
        onChange={(e)=>setRecoverB(e.target.value)} />
        <button className='sub-btn' >Send</button>
    </div>
    </form>
  </>
}
export default Reset;


