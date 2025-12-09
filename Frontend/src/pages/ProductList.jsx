import React, { useState  } from "react";
import Navbar1 from "../Component/Navbar1";
import MegaMenu from "../Component/mega";
import Footer from "../Component/Footer";
import Product from "../Component/data";
import { Link } from "react-router-dom";
import DropdownWithCheckboxes from "../Component/Toggle";

const ProductList = (props) => {
  const [allProducts, setAlllProducts] = useState(Product || [])
  // let generate = [];
  // function duplicate () {
  //    for (let i=0; i<Product.length;i++){
  //         let allSize = Product[i].Size;
  //      for (let j=0; j<allSize.length;j++){         
  //           if(!generate.includes(allSize[j])){
  //           generate.push(allSize[j])
  //     }}}}
  // duplicate()
  // console.log("generate",generate)
  return <>
      <div>
        <Navbar1 />
        <MegaMenu />
        <div className="bg-hero">
          <div className="main-border inter-uniquifier">
            <h1 className="head-bg">OUTLET</h1>
            <p className="para-bg">
              Shop our outlet page for premium Combat Corner BJJ, MMA, Muay Thai
              and Boxing Gear at reduced prices. Because our CRNR Outlet
              products have limited quantities and availability, our outlet
              product deals are always changing.</p>
          </div>
        </div>
        <section className="containerabc inter-uniquifier">
          <a href="/" style={{textDecoration: "none",fontSize: "25px",fontStyle: "italic",
          color: "#737373",}}>Home</a>
          <br />
          <h1 style={{fontSize: "30px",fontWeight: "800",marginBottom: "20px",}}>
          PRODUCT LIST</h1>
          <DropdownWithCheckboxes setAlllProducts={setAlllProducts} />
          <div className="main-list">
            {allProducts.map((item, index) => {
              return (
                <div key={index}>
                  <div style={{ position: "relative" }}>
                    <Link to={`/product/${item._id}`}>
                      <img src={item.img1} className="av" alt="" />
                    </Link>
                    <div style={{ position: "absolute", bottom: "0px" }}>
                      <span>{" "}<del style={{ color: "red" }}>{" "}{item.del_price}{" "}
                        </del> |{" "}</span>
                      <span>{item.price}</span>
                    </div>
                  </div>
                  <Link to={`/product/${item._id}`}
                    style={{ textDecoration: "none" }}>
                    <a href="" style={{textDecoration: "none",color: "black",fontSize: "16px",fontWeight: "500",}}>{item.name}</a>
                  </Link>
                  <p>{item.description}</p>
                </div>
              );
            })}
          </div>
        </section>
        <Footer />
      </div>
    </>
};
export default ProductList;
