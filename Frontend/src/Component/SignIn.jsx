import React, { useState } from 'react'
import Navbar1 from './Navbar1';
import MegaMenu from './mega';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const SignIn =  () => {
    
    const navigate = useNavigate();
    const [inputValues,setInputValues] = useState({
        EmailAddress: "",
        Password: "",
    })

    const updateSign = JSON.parse(localStorage.getItem("Credential")) || [];
    const handleChange = (e) => {
        const {name,value} = e.target;
        setInputValues({...inputValues,[name]:value})
    }
    
    const handleLogin = (e) => {
        e.preventDefault();
    }

    const btnSub = () => {
        const userSign = updateSign.find((user)=>inputValues.EmailAddress === user.EmailAddress && 
        inputValues.Password === user.Password)
        if(userSign){
            localStorage.setItem("LoggedIn",JSON.stringify(true));  
            navigate("/")
        }else{
            alert("Email or Password is wrong");
        }
    }

    const xyz = () => {
        navigate("/lost")
    }

    return <>
    <Navbar1 />
    <MegaMenu />
    <section className='containerabc' >
    <div>
        <h1 className='inter-uniquifier sign-text'>SIGN IN</h1>
    </div>
    <div className='row' >
    <div className='inter-uniquifier col-xl-6 col-lg-6 col-md-6  col-sm-12' >
    <form action="" 
    onSubmit={handleLogin} >
        <label htmlFor="" >Email address*</label>
        <input type="email" name="EmailAddress" value={inputValues.EmailAddress} 
        onChange={handleChange} />
        <br />
        <label htmlFor="">Password*</label>
        <input type="password" name="Password" value={inputValues.Password} 
        onChange={handleChange} />
    </form>
    <div className='form-btn' >
        <button className='sign-btn' onClick={()=>btnSub()} >SIGN IN</button>
        <button className='sign-btn' onClick={()=>xyz()} >LOST YOUR PASSWORD</button>
    </div>
    </div>
    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 cl-pad' >
    <div className='half-cen'>
        <h1 className='new-head12'>NEW CUSTOMER?</h1>
        <p>Create an account with us and you'll be able to:</p>
        <ul>
            <li>Check out faster</li>
            <li>Save multiple shipping addresses</li>
            <li>Access your order history</li>
            <li>Track new orders</li>
        </ul>
        <br />
        <a href='/sign-up' className='sign-btn' style={{textDecoration:"none"}}>CREATE ACCOUNT</a>
    </div>
    </div>
    </div>
    </section>
    <Footer />
    </>
}
export default SignIn;