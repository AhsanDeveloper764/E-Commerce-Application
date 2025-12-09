import React from "react";
import Navbar1 from "../Component/Navbar1";
import MegaMenu from "../Component/mega";
import Hero from "../Component/hero";
import Sliderabc from "../Component/Sliderabc";
import Video from "../Component/video";
import Footer from "../Component/Footer";
// import { Test } from "../Component/test";
import data from "../Component/slide1";
import data1 from "../Component/slide2data";
import data2 from "../Component/slide3";
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
import desktop from "../assets/4-Desktop.png";
import desktopB from "../assets/5-Desktop.png";
import desktopA from "../assets/Desktop.png";

const Home = () => {
  const videoUrl = "https://www.youtube.com/embed/-ApxrZidE-E"
  return (
    <div>
      <Navbar1 />
      <MegaMenu />
      <Hero />
      <Sliderabc data={data} />
      <Video videoUrl={videoUrl} />
      <Sliderabc data={data1} />
      <div>
        <img src={desktopA} className="img-fight" alt="desktop.png" />
      </div>
      <Sliderabc data={data2} />
      <div>
        <img src={desktop} className="img-fight" style={{ paddingTop: "80px" }} alt="" />
      </div>
      <Sliderabc data={data} />
      <div>
        <img src={desktopB} className="img-fight" style={{ paddingTop: "80px" }} alt="" />
      </div>
      {/* next section */}
      <div className="hyp-text-main">
        <h1 className="hyp-text inter-uniquifier">Join us in the
          <a href="" style={{textDecoration: "none",color: "black",fontWeight: "bold",}}>@CombatCrnr</a>
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
            </div>
          </div>
          <div className="card">
            <img
              src={C8}
              className="hyp-img"
              alt=""
            />
            <div className="card-content">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt exercitationem iste, voluptatum, quia explicabo
                laboriosam rem adipisci voluptates cumque, veritatis atque
                nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src={C9}
              className="hyp-img"
              alt=""
            />
            <div className="card-content">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt exercitationem iste, voluptatum, quia explicabo
                laboriosam rem adipisci voluptates cumque, veritatis atque
                nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src={C10}
              className="hyp-img"
              alt=""
            />
            <div className="card-content">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt exercitationem iste, voluptatum, quia explicabo
                laboriosam rem adipisci voluptates cumque, veritatis atque
                nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="container check-dev">
        <div>
          <h1 className="dev-h montserrat-uniquifier">
            Combat Corner Professional – Quality MMA Gear since 2007
          </h1>
          <p className="inter uniquifier dev-p">
            Established in 2007 by a team of professional fighters, Combat
            Corner Professional has built its reputation as a premier martial
            arts equipment manufacturer by delivering the best value-for-money
            gear on the market, period. Our commitment to using only the finest
            raw materials, combined with innovative and cutting-edge designs,
            has made us the go-to choice for many of the world’s most respected
            fighters and teams. We pride ourselves on our ability to stay
            connected and relevant to the needs of all athletes, from beginners
            to professionals, because we don’t just make this gear, we train
            with it day in and day out.
          </p>
        </div>
        <div>
          <h1 className="dev-h montserrat-uniquifier">
            A Brand Transforming Martial Arts Apparel Culture
          </h1>
          <p className="inter uniquifier dev-p">
            At Combat Corner Professional, we understand the importance of
            having reliable equipment for both training and competition. Our
            dedication to quality and performance has led us to create a diverse
            range of MMA, BJJ, Boxing and Muay Thai gear that caters to the
            unique requirements of each athlete and sport. With our eyes, ears,
            and fists in the gym, we’re able to continuously improve and adapt
            our products based on the ever-evolving needs of the martial arts
            community. When you choose Combat Corner, you’re not just choosing
            top-of-the-line equipment – you’re choosing a partner that will be
            with you every step of the way. Who’s in your corner?
          </p>
        </div>
      </div>
      <br />
      <br />
      <div
        className="main-get"
        style={{ backgroundColor: "red", width: "100%", marginBottom: "10px" }}
      >
        <div>
          <h1 className="montserrat-uniquifier get-h">
            GET 10% OFF YOUR NEXT ORDER
          </h1>
        </div>
        <button className="now-btn montserrat-uniquifier">
          SUBSCRIBE NOW{" "}
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
