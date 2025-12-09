import React, { useEffect, useState } from "react";
import MegaMenu from "../Component/mega";
import Navbar1 from "../Component/Navbar1";
import Footer from "../Component/Footer";
// import Sliderabc from "../Component/Sliderabc";
import data from "../Component/slide1";
import Accordian from "../Component/Accordian";
import { useParams } from "react-router-dom";
import Product from "../Component/data";
import { Rate } from "antd";
import Aimg from "../assets/ANGLE.jpg";
import Bimg from "../assets/ANGLE_2.jpg";
import Cimg from "../assets/DETAIL1.jpg";
import Dimg from "../assets/STANCE7.jpg";
import Eimg from "../assets/STOCK_SET.jpg";
import C1 from "../assets/download.jfif";
import C2 from "../assets/download (1).jfif";
import C3 from "../assets/download (2).jfif";
import C4 from "../assets/download (3).jfif";
import C5 from "../assets/download (4).jfif";
import C6 from "../assets/download (5).jfif";
import C7 from "../assets/download (4).jfif";
import C8 from "../assets/download (3).jfif";
import C9 from "../assets/download (2).jfif";
import C10 from "../assets/download (1).jfif";
import CartSlider from "../Component/CartSlider";


const SingleProduct = () => {
  const [category, setCategory] = useState([]);
  const [ProductData, setProductData] = useState([]);
  const [getCount, setCount] = useState(1);
  const { id } = useParams();

  // btn disabled working for loggedIN
  const [btnDisable, setbtnDisable] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const dataDis = JSON.parse(localStorage.getItem("LoggedIn"));

  const sizeBtn = (__size) => {
    setSelectedSize(__size); //btn disable work
    // const existing = JSON.parse(localStorage.getItem("Products")) || [];
    // // console.log("existing", existing);
    // console.log("ProductData?.id", ProductData?._id);
    // const ind = existing.findIndex((item) => item._id === ProductData._id);
    // console.log("ind", ind);
    // if (ind !== -1) {
    //    existing[ind].Size = menu;
    //    console.log("existing", existing);
    //    localStorage.setItem("Products", JSON.stringify(existing));
    //    console.log(ind);
    // }
  };

  // if(!existing.includes(menu)){
  //   existing.push(menu);
  //   localStorage.setItem("Products",JSON.stringify(existing))
  // }
  // console.log("existing",existing);
  // sbsay phlay product get krni hay pro ka index get krna hay uksay bad us
  // specific index par jo object hay us object kay andr size add krdein.
  // useEffect(() => {
  //   let existing = JSON.parse(localStorage.getItem("Products")) || [];
  //   const ind = existing.findIndex((item) => item.id === ProductData?.id);
  //   if (ind !== -1) {
  //     setSelectedSize(existing[ind].Size);
  // }
  // }, []);

  const Proget = () => {
    const Productfilter = Product.find((a) => a._id == id);
    // a kay Andar Array kay object arha hein or one by one check horha hein just like parameter
    setProductData(Productfilter);
  };

  const filteredProducts = () => {
    const newzproducts = Product.filter((a) => a.Category == ProductData.Category);
    setCategory(newzproducts);
  };

  useEffect(() => {
    Proget();
    filteredProducts();
  }, [ProductData, id]);

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("Products")) || [];
    let isProductIndex = cart.findIndex((item) => item._id === ProductData._id 
    && item.Size == selectedSize);

    // Product found
    // Means yay product with selected size cart main hay
    if (isProductIndex !== -1) {
      cart[isProductIndex].Quantity += getCount;
      cart[isProductIndex].Total = parseInt(cart[isProductIndex].Quantity) * parseInt(cart[isProductIndex].price);
    } else {
      // Product Not found
      // Means yay product with selected size cart main hay
      let productPrice = parseInt(ProductData.price) || 0;
      cart.push({...ProductData,Quantity: getCount,Total: getCount * productPrice, Size: selectedSize});
    }
    localStorage.setItem("Products", JSON.stringify(cart));
    window.location.href = "/cart";
  };

  function add() {
    setCount(getCount + 1);
  }

  function sub() {
    if (getCount > 1) {
      setCount(getCount - 1);
    }
  }

  return (
    <>
      <Navbar1 />
      <MegaMenu />
      <div
        className="row"
        style={{ display: "flex", alignItems: "flex-start" }}
      >
        <div className="col-lg-9 col-md-12">
          <img src={ProductData.img1} className="img-single-main" />
          <div className="main-pro">
            <img src={Bimg} className="img-single" alt="" />
            <img src={Cimg} className="img-single" alt="" />
            <img src={Dimg} className="img-single" alt="" />
            <img src={Eimg} className="img-single" alt="" />
          </div>
          <div style={{ paddingTop: "20px" }}>
            <Accordian />
          </div>
          <div className="abc-product">
            <CartSlider data={category} />
          </div>
        </div>
        <div
          className="col-lg-3  col-md-12"
          style={{ position: "sticky", top: "0px" }}
        >
          <div
            className=""
            style={{ paddingTop: "40px", marginBottom: "10px" }}
          >
            <Rate allowHalf value={ProductData?.key} />
          </div>
          <div style={{ lineHeight: "32px" }}>
            <p className="text-SKU">{ProductData?.code || "Ahsan Ali"}</p>
            <p className="head-SKU">{ProductData?.name || "Ahsan Ali"}</p>
            <p className="num-SKU">
              <del> {ProductData?.price || "Ahsan Ali"} </del>|
              {ProductData?.del_price || "Ahsan Ali"}
            </p>
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <span>Size:(Required)</span>
            <span>Category:{ProductData.Category}</span>
          </div>
          <div className="grid-container">
            {ProductData?.Size?.map((__size, index) => (
              <div key={index}>
                <button onClick={() => sizeBtn(__size)} className="grid-button">
                  {__size}
                </button>
              </div>
            ))}
          </div>
          <div className="main-char">
            <a href="" className="chart-text">
              [SIZE CHART]
            </a>
          </div>
          <div className="main-Navy">
            <span>
              Color: <span style={{ fontWeight: "500" }}>Navy</span>
            </span>
            <div style={{ display: "flex", gap: "20px" }}>
              <img src={Aimg} className="img-navy" alt="" />
              <img src={Bimg} className="img-navy" alt="" />
            </div>
          </div>
          <div style={{ paddingTop: "30px" }}>
            <p style={{ color: "#737373", fontSize: "18px" }}>Quantity:</p>
            <div style={{ display: "flex", gap: "0px" }}>
              <button className="add-btn" onClick={() => sub()}>
                -
              </button>
              <button className="add-btn1">{getCount}</button>
              <button className="add-btn" onClick={() => add()}>
                +
              </button>
            </div>
          </div>
          <div style={{ paddingTop: "20px" }}>
            <button
              className="btn-cart "
              onClick={() => addToCart()}
              disabled={!dataDis || (!selectedSize && !btnDisable)}>
              {dataDis ? "Add To Cart" : "Please LoggedIn"}
            </button>
          </div>
        </div>
      </div>
      <div className="abc-product1">
        <CartSlider data={category} />
      </div>
      <div className="hyp-text-main" style={{ paddingTop: "80px" }}>
        <h1 className="hyp-text inter-uniquifier">
          Join us in the
          <a
            href=""
            style={{
              textDecoration: "none",
              color: "black",
              fontWeight: "bold",
            }}
          >
            @CombatCrnr
          </a>
        </h1>
      </div>
      <section>
        <div className="main-hyp">
          <div className="card">
            <img src={C1} className="hyp-img" alt="" />
            <div className="card-content">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt exercitationem iste, voluptatum, quia explicabo
                laboriosam rem adipisci voluptates cumque, veritatis atque
                nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
              </p>
              <a href="#" className="button">
                Find out more
                <span className="material-symbols-outlined">
                  arrow_right_alt
                </span>
              </a>
            </div>
          </div>
          <div className="card">
            <img src={C2} className="hyp-img" alt="" />
            <div className="card-content">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt exercitationem iste, voluptatum, quia explicabo
                laboriosam rem adipisci voluptates cumque, veritatis atque
                nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
              </p>
              <a href="#" className="button">
                Find out more
                <span className="material-symbols-outlined">
                  arrow_right_alt
                </span>
              </a>
            </div>
          </div>
          <div className="card">
            <img src={C3} className="hyp-img" alt="" />
            <div className="card-content">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt exercitationem iste, voluptatum, quia explicabo
                laboriosam rem adipisci voluptates cumque, veritatis atque
                nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
              </p>
              <a href="#" className="button">
                Find out more
                <span className="material-symbols-outlined">
                  arrow_right_alt
                </span>
              </a>
            </div>
          </div>
          <div className="card">
            <img src={C4} className="hyp-img" alt="" />
            <div className="card-content">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt exercitationem iste, voluptatum, quia explicabo
                laboriosam rem adipisci voluptates cumque, veritatis atque
                nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
              </p>
              <a href="#" className="button">
                Find out more
                <span className="material-symbols-outlined">
                  arrow_right_alt
                </span>
              </a>
            </div>
          </div>
          <div className="card">
            <img src={C5} className="hyp-img" alt="" />
            <div className="card-content">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt exercitationem iste, voluptatum, quia explicabo
                laboriosam rem adipisci voluptates cumque, veritatis atque
                nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
              </p>
              <a href="#" className="button">
                Find out more
                <span className="material-symbols-outlined">
                  arrow_right_alt
                </span>
              </a>
            </div>
          </div>
          <div className="card">
            <img src={C6} className="hyp-img" alt="" />
            <div className="card-content">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt exercitationem iste, voluptatum, quia explicabo
                laboriosam rem adipisci voluptates cumque, veritatis atque
                nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
              </p>
              <a href="#" className="button">
                Find out more
                <span className="material-symbols-outlined">
                  arrow_right_alt
                </span>
              </a>
            </div>
          </div>
          <div className="card">
            <img src={C7} className="hyp-img" alt="" />
            <div className="card-content">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt exercitationem iste, voluptatum, quia explicabo
                laboriosam rem adipisci voluptates cumque, veritatis atque
                nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
              </p>
              <a href="#" className="button">
                Find out more
                <span className="material-symbols-outlined">
                  arrow_right_alt
                </span>
              </a>
            </div>
          </div>
          <div className="card">
            <img src={C8} className="hyp-img" alt="" />
            <div className="card-content">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt exercitationem iste, voluptatum, quia explicabo
                laboriosam rem adipisci voluptates cumque, veritatis atque
                nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
              </p>
              <a href="#" className="button">
                Find out more
                <span className="material-symbols-outlined">
                  arrow_right_alt
                </span>
              </a>
            </div>
          </div>
          <div className="card">
            <img src={C9} className="hyp-img" alt="" />
            <div className="card-content">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt exercitationem iste, voluptatum, quia explicabo
                laboriosam rem adipisci voluptates cumque, veritatis atque
                nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
              </p>
              <a href="#" className="button">
                Find out more
                <span className="material-symbols-outlined">
                  arrow_right_alt
                </span>
              </a>
            </div>
          </div>
          <div className="card">
            <img src={C10} className="hyp-img" alt="" />
            <div className="card-content">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt exercitationem iste, voluptatum, quia explicabo
                laboriosam rem adipisci voluptates cumque, veritatis atque
                nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
              </p>
              <a href="#" className="button">
                Find out more
                <span className="material-symbols-outlined">
                  arrow_right_alt
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default SingleProduct;

// Ye error is wajah se aa raha hai kyunki isProduct localStorage se find() method ka use karke aya hai, aur ye ek object ka reference nahi balki ek copy hota hai.
// Jab aap find() method ka use karte hain, wo matching product ka copy return karta hai, jo ki mutable nahi hota. Is wajah se aap isProduct.Quantity += 1; likh rahe hain, lekin wo update nahi ho raha.
// Solution:
// Aapko original array me se matching product ko update karna hoga. Iske liye aap map() ya forEach() ka use kar sakte hain.
// Agar aap chahte hain ke quantity update ho, toh aapko localStorage ka original array modify karna padega aur localStorage.setItem se wapas save karna hoga.
