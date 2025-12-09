import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();
  const logoutbtn = () => {
        localStorage.setItem("LoggedIn",JSON.stringify(false));
        navigate("/sign-in")
  }
  return <>
    <Link to={"/sign-in"}>
    <div>
    <button onClick={()=>logoutbtn()} style={{backgroundColor:"black",border:"none"}}>
    <i style={{color:"white"}} class="fa fa-sign-out" aria-hidden="true"></i></button>
    </div>
    </Link>
  </>
}
export default Logout;