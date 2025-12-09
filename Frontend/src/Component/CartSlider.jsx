import React from "react";
import { useState , useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Product from "./data";
import { Link } from "react-router-dom";



const CartSlider = (props) => {
    return <>
        <div style={{ padding: "20px", marginTop: "51px" }}>
            <div className="main-slide">
              <div>
                <h1 className="montserrat-uniquifier pro-text">
                  Featuredabc Products
                </h1>
                <p className="para-pro">
                  A meticulously curated selection of our newest, hottest and most
                  innovative gear, apparel, and training equipment, all designed to
                  unleash your full potential on the streets, on the mats or in the
                  cage.
                </p>
              </div>
              <div className="navigation-container">
                <button className="swiper-button-prev">
                  <i className="ri-arrow-left-line"></i>
                </button>
                <button className="swiper-button-next">
                  <i className="ri-arrow-right-line"></i>
                </button>
              </div>
            </div>
            <Swiper
              modules={[Navigation]}
              navigation={{
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next",
              }}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
                1500: {
                  slidesPerView: 4,
                },
              }}>
              {props.data.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Link to={`/product/${item._id}`}>
                    <div className="slide-item" style={{gap:"10px"}}>
                      <img src={item.img} className={item.class} alt="" />
                      {/* <img src={item.img1} className={item.class} alt="" /> */}
                    </div>
                    </Link> 
                </SwiperSlide>
                );
              })}
            </Swiper>
            <style jsx>
              {`
                @import url("https://fonts.googleapis.com/css2?family=Domine:wght@400..700&family=Inria+Serif:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Lexend:wght@100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
                .montserrat-uniquifier {
                  font-family: "Montserrat", serif;
                  font-optical-sizing: auto;
                  font-style: normal;
                }
                .main-slide {
                  position: relative;
                }
                .pro-text {
                  font-weight: 800;
                  font-size: 30px;
                }
                .para-pro {
                  font-size: 16px;
                  font-weight: 550;
                  width: 65%;
                }
                .slide-item {
                  display: flex;
                }
                .black-img {
                  width: 320px;
                }
                .swiper-slide,
                .swiper-slide-active {
                  padding-top: 20px;
                  width: 307.667px !important;
                  margin-right: 20px !important;
                }
                .navigation-container {
                  display: flex;
                  justify-content: end;
                  gap: 20px;
                }
                .swiper-button-prev {
                  position: absolute;
                  top: 70px;
                  left: 88%;
                }
                .swiper-button-next {
                  position: absolute;
                  top: 70px;
                  right: 6%;
                }
                .swiper-button-prev:after {
                  content: "prev";
                  font-size: 29px;
                  font-weight: bolder;
                }
                .swiper-button-next:after {
                  content: "next";
                  font-size: 29px;
                  font-weight: bolder;
                }
                .swiper-button-prev,
                .swiper-button-next {
                  background: transparent;
                  color: black;
                  border: none;
                  padding: 10px 20px;
                  border-radius: 5px;
                  cursor: pointer;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                }
                .swiper-button-prev i,
                .swiper-button-next i {
                  font-size: 20px;
                }
                .swiper-button-prev:hover,
                .swiper-button-next:hover {
                  // background: #0056b3;
                }
                @media screen and (max-width: 1024px) {
                  .swiper-button-prev {
                    position: absolute;
                    top: 70px;
                    left: 78%;
                  }
                  .swiper-button-next {
                    position: absolute;
                    top: 70px;
                    right: 13%;
                  }
                }
                @media screen and (max-width: 1024px) {
                  .swiper-button-prev {
                    position: absolute;
                    top: 70px;
                    left: 78%;
                  }
                  .swiper-button-next {
                    position: absolute;
                    top: 70px;
                    right: 7%;
                  }
                }
                  @media screen and (max-width: 640px) {
                  .swiper-button-prev {
                    position: absolute;
                    top: 170px;
                    left: 82%;
                  }
                  .swiper-button-next {
                    position: absolute;
                    top: 170px;
                    right: 2%;
                  }
                } 
               @media screen and (max-width: 426px) {
                  .swiper-button-prev {
                    position: absolute;
                    top: 210px;
                    left: 72%;
                  }
                  .swiper-button-next {
                    position: absolute;
                    top: 210px;
                    right: 2%;
                  }
                }    
              `}
            </style>
        </div>
    </>;
};
export default CartSlider;