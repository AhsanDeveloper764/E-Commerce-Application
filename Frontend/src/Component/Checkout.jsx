import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Navbar1 from "./Navbar1";
import MegaMenu from "./mega";
// import SignInB from "./SignInB";
import Edit1 from "../assets/paypalLogo.svg";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [check, setCheck] = useState(false);
  const [Summary, setSummary] = useState(
    JSON.parse(localStorage.getItem("Products")) || []
  );
  const [Sum, setSum] = useState(
    JSON.parse(localStorage.getItem("Sub_Total Of All Product")) || []
  );

  const sign = () => {
    if (check) {
      setCheck(false);
    } else {
      setCheck(true);
    }
    console.log(check);
  };
  return (
    <>
      <div>
        <Navbar1 />
        <MegaMenu />
        {
          // check ? <Hero /> : ""
          check && <SignInB />
        }
        <section className="container pro-chk-main">
          <div>
            <div>
              <h2 className="abc-check">Customers</h2>
            </div>
            <div className="main-email ">
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
              </Form>
              <div style={{ paddingTop: "20px" }}>
                <button className="btn-chk">Continue</button>
              </div>
            </div>
            <Form>
              {["checkbox"].map((type) => (
                <div key={`default-${type}`} className="mb-3 abc63">
                  <Form.Check // prettier-ignore
                    type={type}
                    id={`${type}`}
                    label={`Subscribe our newsletter ${type}`}
                  />
                </div>
              ))}
            </Form>
            <div>
              <span style={{ fontWeight: "550" }}>
                Already Have an Account?
              </span>
            </div>
            <div>
              <button className="signInB-btn" onClick={() => sign()}>
                Sign In Now
              </button>
            </div>
            <div className="maintalbay">
              <div className="paymain">
                <a href="https://www.paypal.com/">
                  <img src={Edit1} alt="" className="paybt" />
                </a>
              </div>
              <div className="paymain">
                <a href="https://www.paypal.com/">
                  <img src={Edit1} alt="" className="paybt" />
                </a>
              </div>
            </div>
          </div>
          <div style={{ paddingTop: "50px" }}>
            <div className="bord-ord-sum">
              <p style={{fontSize:"25px"}}>Order Summary</p>
              <Link to={"/cart"}>
                <p style={{textDecoration:"none",color:"black"}} >Edit Cart</p>
              </Link>
            </div>
            <div className="big-chk">
              {Summary.map((item, index) => (
                <div key={index}>
                  <div className="main-local">
                    <div className="acha-local">
                      <img src={item.img} alt="" className="img-chk" />
                      <div className="text-local">
                        {item.Quantity} x {item.name}
                      </div>
                    </div>
                    <div>${item.Total}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="sub-chk">
              <p style={{fontWeight:"bold"}}>SubTotal</p>
              <span style={{fontWeight:"bold"}}>${Sum}</span>
            </div>
            <div className="sub-chk">
              <p style={{fontWeight:"bold"}}>Shipping</p>
              <span style={{fontWeight:"bold"}}>--</span>
            </div>
            <div className="sub-chk">
              <p style={{fontWeight:"bold"}} >Tax</p>
              <span style={{fontWeight:"bold"}}>$00</span>
            </div>
            <div className="sub-chk1">
              <p style={{fontWeight:"bold",fontSize:"30px"}}>Total(USD)</p>
              <span style={{fontWeight:"bold",fontSize:"20px"}}>${Sum}</span>
            </div>
          </div>
      </section>
      </div>
    </>
  );
};
export default Checkout;
