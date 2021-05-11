import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import shape1 from "./images/Shape 1.png";
import shape2 from "./images/Shape 2.png";
import CardHeader from "./CardHeader";
import HeroImg1 from "../src/images/Hero Image 1.png";
import HeroImg2 from "../src/images/Hero Image 2.png";
import HeroImg3 from "../src/images/Hero Image 3.png";
import r1 from "../src/images/Reasons1.png";
import r2 from "../src/images/Reasons2.png";
import r3 from "../src/images/Reasons3.png";
import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import { NavLink } from "react-router-dom";
import ListItems from "./ListItems";
import Testimonials from "./Testimonials";
import customer from "./images/Customer Testimonial1.png";
import customer1 from "./images/Customer Testimonial2.png";
import customer2 from "./images/Customer Testimonial3.png";
import customer3 from "./images/Customer Testimonial4.png";
import Footer from "./Footer";

const Home = () => {
  const [show, setShow] = useState(true);
  const Show = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <section id="header">
        <img src={shape1} className="image img-fluid" alt="svg" />
        <div className="container-fluid ">
          <div className="row">
            <div className=" col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <div data-aos="fade-right" className="text">
                    <h1>Why Buy?</h1>
                    <h1>Just Borrow</h1>
                  </div>
                  <div className="search d-flex">
                    <input
                      data-aos="fade-left"
                      type="search"
                      placeholder="Search for an item near you"
                      name=""
                      id="search"
                    />
                    <button data-aos="fade-left">
                      <a href="">explore</a>
                    </button>
                  </div>
                  <div
                    data-aos="fade-up"
                    style={{ paddingLeft: "0" }}
                    className="cardHeader container-fluid d-flex"
                  >
                    <CardHeader span="1" name="small-card" overlay="overlay" />
                    <CardHeader
                      data-aos="fade-down"
                      span="2"
                      name={"small-card1"}
                      overlay="overlay lay1"
                    />
                    <CardHeader
                      data-aos="fade-up"
                      span="3"
                      name="small-card2"
                      overlay="overlay lay2"
                    />
                  </div>
                </div>

                <div
                  data-aos="fade-left"
                  className="col-lg-6 order1 order-lg-2 header"
                  style={{ zIndex: "-1" }}
                >
                  <img
                    src={HeroImg1}
                    className="img-fluid animated imaggg"
                    alt="alternate"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="SecondSection">
            <div className="slider">
              <div data-aos="fade-up" className="head d-flex">
                <span className="first">Most Commonly borrowed Items</span>
                <a className="btn-signUp" href="" onClick={Show}>
                  Show all
                </a>
              </div>
              {show ? (
                <div className="slide d-flex">
                  <Swiper
                    spacebetween={20}
                    slidesPerView={4}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggale: true }}
                    breakpoints={{
                      360: {
                        width: 360,
                        slidesPerView: 1,
                      },
                      640: {
                        width: 640,
                        slidesPerView: 2,
                        spaceBetween: 20,
                      },
                    }}
                  >
                    <SwiperSlide>
                      <Card />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Card />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Card />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Card />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Card />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Card />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Card />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Card />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Card />
                    </SwiperSlide>
                  </Swiper>
                </div>
              ) : (
                <div className="slide-still d-flex">
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <section id="middle">
        <img src={shape2} className="image2 img-fluid" alt="svg" />
        <div className="container-fluid">
          <div className="row row-middle">
            <div className="row">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <div data-aos="fade-up" className="left">
                  <div data-aos="flip-left" className="text">
                    <h1>LENDING HELPS YOU AND OUR PLANET</h1>
                    <p>Lending helps you, helps the community and our planet</p>
                  </div>
                  <img
                    data-aos="flip-left"
                    src={HeroImg2}
                    className="img-fluid animated image"
                    alt="alternate"
                  />
                </div>
              </div>
              <div className="col-lg-6 order1 order-lg-2">
                <div className="conatainer-fluid cont">
                  <div data-aos="fade-right" className="details">
                    <div data-aos="fade-left" className="pgraph">
                      <h1>All The Reasons To Share</h1>
                      <p>
                        Lending only has advantage, here are all the reasos why
                        with share my stuff you can lend your valuables
                      </p>
                    </div>
                    <div data-aos="fade-right" className="iconBx d-flex">
                      <div data-aos="fade-down" className="icon">
                        <img class="imgg" src={r1} alt="" />
                        <p>Reason 1: verified</p>
                        <p>and trusted borrowers</p>
                      </div>
                      <div data-aos="fade-down" className="icon">
                        <img class="imgg" src={r2} alt="" />
                        <p>Reason 1: verified</p>
                        <p>and trusted borrowers</p>
                      </div>
                      <div data-aos="fade-down" className="icon">
                        <img class="imgg" src={r3} alt="" />
                        <p>Reason 1: verified</p>
                        <p>and trusted borrowers</p>
                      </div>
                    </div>
                  </div>
                  <div className="button">
                    <NavLink to="/" className="btnI btnm btn-signIn">
                      FAQ
                    </NavLink>
                    <NavLink to="/" className=" btnII btnm btn-signUp">
                      I want to lend
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="head d-flex">
            <div className="lists">
              <div data-aos="fade-right" className="heading">
                <span>Popular categories</span>
                <p>Discover what you can borrow and what you can lend</p>
              </div>
              <ListItems />
              <ListItems />
              <ListItems />
              <ListItems />
            </div>
            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
              <div data-aos="fade-left" className="conatainer-fluid">
                <img
                  src={HeroImg3}
                  className="img-fluid animated hero"
                  alt="alternate"
                />
              </div>
            </div>
          </div>
          <div
            data-aos="fade-down"
            style={{ marginTop: "60px" }}
            className="head-test d-flex"
          >
            <h1 style={{ fontWeight: "bolder" }}>WHAT OUR CUSTOMERS SAY</h1>

            <button id="btn-search">
              <a href="" onClick={Show}>
                Show all
              </a>
            </button>
          </div>
          <div data-aos="flip-up" className="testimonials">
            <Testimonials
              data-aos="fade-down"
              para="Helped me so much that i am going on a month vacation with all the savaings"
              img={customer}
              header="Ben Award"
              span="MERNG dev"
            />
            <Testimonials
              data-aos="fade-up"
              para="Helped me so much that i am going on a month vacation with all the savaings"
              img={customer1}
              header="Bino Simons"
              span="Three.js dev"
            />
            <Testimonials
              data-aos="fade-down"
              para="Helped me so much that i am going on a month vacation with all the savaings"
              img={customer2}
              header="Swarnajit Bhowmick"
              span="Web Designer"
            />
            <Testimonials
              data-aos="fade-up"
              para="Helped me so much that i am going on a month vacation with all the savaings"
              img={customer3}
              header="Jean Thomas"
              span="MERN dev"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
