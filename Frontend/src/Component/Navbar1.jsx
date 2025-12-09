import { NavItems } from "./NavItems";
import { useState } from "react";
import ProtectedRoutes from "../Services/ProtectedRoutes";
import Logout from "../Services/Logout";

const Navbar1 = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  
  const auth = JSON.parse(localStorage.getItem("LoggedIn"));
  return <>
  <div className="main-abc" >
    <span className="abc inter-uniquifier">FREE SHIPPING ON RETAIL ORDERS OVER $150</span>
    <a href="#" className="abc-anc" >*</a>
  </div>
    <nav className="NavbarItems">
      {/* <h3 className="logo">
        <i className="fab fa-react"></i>
      </h3> */}
      <div className="Hamburger-Cross-Icons" onClick={handleClick}>
        <i className={open ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={open ? "MenuItems active" : "MenuItems"}>
        {NavItems.map((Item, index) => {
          return (
            <li key={index}>
              <a href={Item.url} className={Item.cName}>
                <i className={Item.icon}></i>
                {Item.title}
                <img src={Item.img} alt="" className={Item.cName} />
              </a>
            </li>
          );
        })}
        {
          auth ? <Logout /> : <ProtectedRoutes />  
        }
      </ul>
        {/* <div className="mbl" >
          <img src="src/assets/logo_boxed.svg" alt="" className="mbl-img" />
        </div> */}
      {/* <div className="mbl" >
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"10px"}}>
          <img src="src/assets/profile_dark.svg" alt="" className="b-img" />
        <Link></Link>
          <img src="src/assets/cart_dark.svg" alt="" className="b-img" />
          <img src="src/assets/search_icon.svg" alt="" className="b-img" />
        </div>
      </div> */}
    </nav>
    </>;
};
export default Navbar1;
