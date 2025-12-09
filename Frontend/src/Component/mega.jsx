import React, { useState } from "react";
import CI1 from '../assets/search_icon.svg'
import Logo from '../assets/logo_boxed.svg'
const MegaMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuItems = [
    {
      title: "GIS",
      subMenu: [
        { title: "Electronics", link: "/electronics" },
        { title: "Clothing", link: "/clothing" },
        { title: "Books", link: "/books" },
      ],
    },
    {
      title: "Gloves",
      subMenu: [
        { title: "Consulting", link: "/consulting" },
        { title: "Repair", link: "/repair" },
        { title: "Delivery", link: "/delivery" },
      ],
    },
    {
      title: "Gym Equipment",
      subMenu: [
        { title: "Support", link: "/support" },
        { title: "Feedback", link: "/feedback" },
        { title: "Locations", link: "/locations" },
      ],
    },
    {
      title: "Protection",
      subMenu: [
        { title: "Support", link: "/support" },
        { title: "Feedback", link: "/feedback" },
        { title: "Locations", link: "/locations" },
      ],
    },
    {
      title: "Apparel",
      subMenu: [
        { title: "Support", link: "/support" },
        { title: "Feedback", link: "/feedback" },
        { title: "Locations", link: "/locations" },
      ],
    },
    {
      title: "For Trainers",
      subMenu: [
        { title: "Support", link: "/support" },
        { title: "Feedback", link: "/feedback" },
        { title: "Locations", link: "/locations" },
      ],
    },
    {
      title: "Bags & More",
      subMenu: [
        { title: "Support", link: "/support" },
        { title: "Feedback", link: "/feedback" },
        { title: "Locations", link: "/locations" },
      ],
    },
  ];

  return (
    <nav className="mega-menu inter-uniquifier">
      <div>
      <a href="/"><img src={Logo} className="img-boxed" alt="" /></a> 
      </div>
      <ul className="menu">
        {menuItems.map((menuItem, index) => (
          <li key={index} className="menu-item" onMouseEnter={() => setShowMenu(menuItem.title)}
            onMouseLeave={() => setShowMenu(false)}>
            <span>{menuItem.title}</span>
            {showMenu === menuItem.title && (
              <div className="dropdown">
                {menuItem.subMenu.map((subItem, subIndex) => (
                  <a key={subIndex} href={subItem.link} className="dropdown-item">
                    {subItem.title}
                  </a>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
      <div className="main-box">
        <input type="text" placeholder="Search" className="border-boxed" />
        <img src={CI1} alt="" className="search-icon" />
      </div>
     
    </nav>
  );
};

export default MegaMenu;
