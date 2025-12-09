import React from 'react';
import Profile from '../assets/profile.svg';
import { Outlet , Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const ProtectedRoutes = () => {
  return <>
    <div>
        <Link to={"/sign-in"}>
        <img src={Profile} className='svg'  />
        </Link>
    </div>
  </>
}
export default ProtectedRoutes;