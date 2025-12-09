import React, { useEffect, useState } from "react";
import Navbar1 from "./Navbar1";
import MegaMenu from "./mega";
import Footer from "./Footer";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
// import Product from "./data";

const EditCart = () => {
  
  const [getcounter,setCounter] = useState(JSON.parse(localStorage.getItem("Products")) || []);
  const headers = [
    {
      Price: "Price",
      Quantity: "Quantity",
      Total: "Total",
    },
  ];
  
  const [totalAmount,setTotalAmount] = useState(0)
  function addC(index){
    console.log('add_index',index)
    let updatedcart = [...getcounter]
    updatedcart[index].Quantity +=1;
    updatedcart[index].Total = parseInt(updatedcart[index].Quantity) * parseInt(updatedcart[index].price)
    setCounter(updatedcart);
    localStorage.setItem("Products", JSON.stringify(updatedcart));
    sbtotal()
  }
  
  function subC(index){
    console.log("sub_index",index);
    let updatedcart = [...getcounter]
    if(updatedcart[index].Quantity>1){
      updatedcart[index].Quantity -=1;
      updatedcart[index].Total = parseInt(updatedcart[index].Quantity) * parseInt(updatedcart[index].price)
      setCounter(updatedcart);
      localStorage.setItem("Products", JSON.stringify(updatedcart));
    }
    sbtotal()
  }

  const delt = (index) => {
    const newlist = [...getcounter]
    newlist.splice(index,1);
    setCounter(newlist);
    localStorage.setItem("Products",JSON.stringify(newlist));
  }
  
  const sbtotal = () => {
    let temp=0
    getcounter.forEach((item)=>{
      let t = parseInt(item.price)*parseInt(item.Quantity)
      temp += t
      localStorage.setItem("Sub_Total Of All Product",JSON.stringify(temp));
    })
    setTotalAmount(temp)
  }

  useEffect(()=>{
    sbtotal()
  },[])
  
  const check = () => {
    window.location.href = "/checkout";
  }

  return (
    <>
      <Navbar1></Navbar1>
      <MegaMenu></MegaMenu>
      <div className="containerabc">
        <h1 className="same-text">Your Cart(2 items)</h1>
        <div className="main-same">
          <div className="same-cart">
            <i
              class="fa-solid fa-circle-check"
              style={{ color: "rgb(251, 147, 75)", fontSize: "25px" }}
            ></i>
            <div style={{ lineHeight: "10px", paddingTop: "10px" }}>
              <h6 style={{ fontWeight: "bold" }}>FREE Shipping</h6>
              <p>On Retail Orders $150+</p>
            </div>
          </div>
          <div className="same-cart">
            <i
              class="fa-solid fa-lock"
              style={{ color: "#fb934b", fontSize: "25px" }}
            ></i>
            <div style={{ lineHeight: "10px", paddingTop: "10px" }}>
              <h6 style={{ fontWeight: "bold" }}>Secure Shopping</h6>
              <p>256 Bit SSL Encryption</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row container">
        {/* Table Section */}
        <div className="col-lg-9 col-md-12">
          <Table responsive>
            <thead>
              <tr className="">
                <th>Item</th>
                {headers.map((header, index) => (
                  <th key={index} className="">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",}}>
                      <span>{header.Price}</span>
                      <span>{header.Quantity}</span>
                      <span>{header.Total}</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {getcounter.map((item, index) => (
                <tr key={index} className="">
                  <td>
                    <div className="sub-item" style={{ display: "flex", alignItems: "center" }}>
                      <img src={item.img} className={item.del} alt={item.nameA} />
                      <div className="set-pet" style={{ lineHeight: "1.5" }}>
                        <span>{item.nameA}</span>
                        <Link to={`/product/${item._id}`}>
                        <a href={item.nameLink} className={item.classA}> {item.name} </a>
                        </Link>
                        <p>Size : {item.Size}</p>
                        <button  className={item.classA} 
                        style={{width:"50%",backgroundColor:"black",color:"white",borderRadius:"5px"}} 
                        onClick={()=>delt(index)}>{item.link1}</button>
                      </div>
                    </div>
                  </td>
                  <td
                    style={{ display: "flex",justifyContent: "space-between",
                      alignItems: "center",borderBottom: "none",padding: "20px 0"}}>
                    <span>${item.price}</span>
                    <div style={{ display: "flex", alignItems: "center",marginLeft:"20px",
                      marginRight:"20px"}}>
                      <button style={{ marginRight: "10px", fontSize: "16px",border: "1px solid #000",
                          background: "#fff",borderRadius: "4px",padding: "4px 8px",
                          cursor: "pointer"}}
                        onClick={()=>subC(index)} > - </button>
                      <span>{item.Quantity}</span>
                      <button style={{ marginLeft: "10px",fontSize: "16px",border: "1px solid #000",
                          background: "#fff", borderRadius: "4px",padding: "4px 8px",
                          cursor: "pointer",}}
                        onClick={()=>addC(index)}> + </button>
                    </div>
                    {/* <span>${parseInt(item.Quantity)*parseInt(item.price)}</span> */}
                    <span>${item.Total}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <div className="col-lg-3 col-md-12" 
        style={{ paddingTop: "20px", lineHeight: "35px" }}>
          <h1 className="check-head">Order Summary</h1>
          <div style={{display: "flex", alignItems: "center",
          justifyContent: "space-between"}}>
            <span>SubTotal:</span>
            <p>${totalAmount}</p>
          </div>
          <button className="btn-checkout" onClick={()=>check()} >CHECKOUT</button>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default EditCart;
