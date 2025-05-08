import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import { useEffect, useRef } from "react";
import { useState } from "react";
import "swiper/css";
import "swiper/css/autoplay";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import logo from "../assests/svg/oriflame logo.svg";
import SearchIcon from "../assests/svg/search.svg";
import StoreIcon from "../assests/svg/store.svg";
import Heart from "../assests/svg/heart.svg";
import FullStar from "../assests/svg/full-star.svg";
import EmptyStar from "../assests/svg/empty-star.svg";
import BlackStore from "../assests/svg/black-store.svg";
import PinkHeart from "../assests/svg/pink-heart.svg";
import Email from "../assests/svg/email.svg";
import OriflameApp1 from "../assests/svg/oriflame app 1.svg";
import OriflameApp2 from "../assests/svg/oriflame app 2.svg";
import OriflameApp3 from "../assests/svg/oriflame app 3.svg";
import FaceBook from "../assests/svg/facebook.svg";
import YouTube from "../assests/svg/youtube.svg";
import Instagram from "../assests/svg/insta.svg";
import Visa from "../assests/svg/visa.svg";
import CirclePay from "../assests/svg/circles-pay.svg";
import PayPal from "../assests/svg/paypal.svg";
import GPay from "../assests/svg/gpay.svg";
import Prev from "../assests/svg/btn-prev.svg";
import Next from "../assests/svg/btn-next.svg";
import FlowerSwiper from "../assests/images/flower-cream-swiper.webp";
import NovageSwiper from "../assests/images/novage-swiper.webp";
import OptSwiper from "../assests/images/opt-swiper.webp";
import WhatsNew from "../assests/images/what's-new.webp";
import OptWhatsNew from "../assests/images/opt-whats-new.webp";
import OptWhatsNew2 from "../assests/images/opt-whats-new-2.webp";
import TheOneWhatsNew from "../assests/images/theone-whats-new.webp";
import IconOfOurTime from "../assests/images/icon of our time.webp";
import MilkandHoney from "../assests/images/milk and honey gold.webp";
import TenderCare from "../assests/images/tender care.webp";
import RoyalVelvet from "../assests/images/royal velvet.webp";
import BestOfferCover from "../assests/images/best offer cover.webp";
import AmberElixer from "../assests/images/amber elixer.webp";
import FacialOil from "../assests/images/facial oil.webp";
import LipBalm from "../assests/images/lip balm.webp";
import Possess from "../assests/images/possess.webp";
import Healthy from "../assests/images/healthier gut, happier day.webp";
import TheOneBrand from "../assests/images/the one.webp";
import GiordaniGoldBrand from "../assests/images/giordani gold.webp";
import NoageBrand from "../assests/images/novage.webp";
import WillosophyBrand from "../assests/images/wllosophy.webp";
import WellosphyRed from "../assests/images/wellosphy red.webp";
import WellosphyGreen from "../assests/images/willosphy green.webp";
import One from "../assests/images/oriflame on me/1.jpg";
import Two from "../assests/images/oriflame on me/2.jpg";
import Three from "../assests/images/oriflame on me/3.jpg";
import Four from "../assests/images/oriflame on me/4.jpg";
import Five from "../assests/images/oriflame on me/5.jpg";
import Six from "../assests/images/oriflame on me/6.jpg";
import Eleven from "../assests/images/oriflame on me/11.jpg";
import Twelve from "../assests/images/oriflame on me/12.jpg";
import { FaRegHeart } from "react-icons/fa";
import { Karim } from "./Icons";
import { IoIosHeart } from "react-icons/io";

const Home = () => {
  const inputRef = useRef(null);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [isTyping, setIsTyping] = useState(false);
  const [data, setData] = useState([]);

  const [isStoreHovered, setIsStoreHovered] = useState(false);
  const [isHeartHovered, setIsHeartHovered] = useState(false);

  const handleClear = () => {
    inputRef.current.value = "";
    inputRef.current.focus();
    inputRef.current.dispatchEvent(new Event("input", { bubbles: true }));
  };

  const handleInput = () => {
    const xIcon = document.getElementById("clear-btn");
    const hasText = inputRef.current.value !== "";
    setIsTyping(hasText);
    hasText ? xIcon.classList.remove("hidden") : xIcon.classList.add("hidden");
  };

  useEffect(() => {
    const GETphoto = () => {
      axios
        .get("https://jsonplaceholder.typicode.com/photos")
        .then((response) => {
          console.log(response.data);
          
          setData(response.data);
        })
        .catch((error) => {
         
          console.error("Error:", error);
        });
    };

    GETphoto();
  }, []);

  return (
    // start
    <>
      <div className="container-fluid m-00 p-00 overflow-x-hidden">
        {/* header start */}
        {isTyping && (
          <div
            className={`fixed w-full h-full backdrop-blur-[2px] bg-black/40 z-40 box-border pointer-events-none transition-opacity duration-[5000ms] delay-[2000ms] ${
              isTyping ? "opacity-70" : "opacity-0"
            }`}
          />
        )}
        <div className="w-full h-9 bg-blue-100 flex items-center justify-center">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            className="w-full h-full flex items-center justify-center text-center"
          >
            <SwiperSlide>
              <p className="text-14 text-gray-700 leading-9 font-700">
                You've been invited! Join now to enjoy the perks.
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <p className="text-14 text-gray-700 leading-9 font-700">
                Shop Icons: Our most loved products
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <p className="text-14 text-gray-700 leading-9 font-700">
                Get a personalised routine – Scan your skin!
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <p className="text-14 text-gray-700 leading-9 font-700">
                Discover our Best Offers!
              </p>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* menu-top */}
        <div className="w-full h-16 flex items-center mx-11">
          <div className="w-1/6 h-11 flex items-center gap-6">
            <div className="w-8 h-9 flex flex-col items-center justify-center text-center">
              <div className="w-6 h-0.1 bg-gray-700 mb-2"></div>
              <div className="w-6 h-0.2 bg-gray-700"></div>
              <div className="w-6 h-0.1 bg-gray-700 mt-2"></div>
            </div>
            <img src={logo} className="w-28 h-8" alt="logo" />
          </div>
          <div className="w-5/6 h-11 flex justify-between gap-10">
            <div className="relative z-50 h-full w-3/5">
              <div className="bg-gray-200 h-full w-900 rounded-full flex items-center pl-4">
                <img src={SearchIcon} alt="search" className="mt-2" />
                <input
                  type="text"
                  ref={inputRef}
                  onInput={handleInput}
                  placeholder="Search 60+ brands, 1000+ beauty and nutrition products"
                  className="bg-transparent py-0.1 px-0 w-[94%] font-400 focus:outline-none focus:ring-0 border-none"
                ></input>
                <button
                  id="clear-btn"
                  onClick={handleClear}
                  className="hidden text-gray-600 hover:text-black text-20 mb-1"
                >
                  &times;
                </button>
              </div>
            </div>
            <div className="h-full w-2/5 flex justify-center gap-10 items-center">
              <div className="h-6 text-18 font-400 cursor-pointer ml-20">join us</div>
              <div className="h-6 text-18 font-400 cursor-pointer">sign in</div>
              <div className="w-11 h-11 p-1.5 cursor-pointer">
                <img src={StoreIcon} alt="store" className="" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-0.1 bg-gray-200"></div>
        {/* header end */}
        {/* body start */}
        {/* swiper */}
        <div className="w-full h-68 bg-red-200 flex items-center justify-center">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            className="w-full h-full flex items-center text-center"
          >
            <SwiperSlide className="relative">
              <img src={FlowerSwiper} alt="flower" />
              <div className=" h-full w-63 absolute left-900 bottom-900 top-0.1 flex items-center justify-center">
                <div className="h-39">
                  <p className="text-12 font-500 text-gray-700">
                    Children on the Edge
                  </p>
                  <h3 className="text-50 w-63 h-37 mb-4 text-gray-700 font-500">
                    50p donation for every Tender Care sold
                  </h3>
                  <button
                    type="button"
                    className="w-31 h-12 bg-black rounded-full text-white hover:bg-gray-500"
                  >
                    Discover now
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative">
              <img src={NovageSwiper} alt="flower" />
              <div className=" h-full w-63 absolute left-900 bottom-900 top-0.1 flex items-center justify-center">
                <div className="h-39">
                  <p className="text-12 font-500 text-gray-700">
                    OFFER ENDS 16.04{" "}
                  </p>
                  <h3 className="text-50 w-63 h-29 mb-4 text-gray-700 font-500">
                    Up to 50% OFF selected skincare
                  </h3>
                  <button
                    type="button"
                    className="w-31 h-12 bg-black rounded-full text-white hover:bg-gray-500"
                  >
                    Shop now
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative">
              <img src={OptSwiper} alt="flower" />
              <div className=" h-full w-63 absolute left-900 bottom-900 top-0.1 flex items-center justify-center">
                <div className="h-39">
                  <p className="text-12 font-500 text-gray-700">
                    NEW! EXPERIENCE OPTIMALS HYDRA
                  </p>
                  <h3 className="text-50 w-63 h-29 mb-4 text-gray-700 font-500 ">
                    1-2-3 to amazing skin!
                  </h3>
                  <button
                    type="button"
                    className="w-31 h-12 bg-black rounded-full text-white hover:bg-gray-500"
                  >
                    Shop now
                  </button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="container">
        {/* list items */}
        <div className="w-full h-13 flex justify-center items-center gap-7">
          <button className="text-14 text-gray-800 font-600">ECATALOGUE</button>
          <button className="text-14 text-gray-800 font-600">NUTRITION</button>
          <button className="text-14 text-gray-800 font-600">SKIN CARE</button>
          <button className="text-14 text-gray-800 font-600">MAKE UP</button>
          <button className="text-14 text-gray-800 font-600">FRAGRANCE</button>
          <button className="text-14 text-gray-800 font-600">
            BATH & BODY
          </button>
          <button className="text-14 text-gray-800 font-600">HAIR</button>
          <button className="text-14 text-gray-800 font-600">
            ACCESSORIES
          </button>
          <button className="text-14 text-gray-800 font-600">MEN</button>
          <button className="text-14 text-gray-800 font-600">
            KIDS & BABY
          </button>
        </div>
        {/* what's new */}
        <div className="w-full h-0.1 bg-gray-200 mb-15"></div>
        <div className="w-full h-64.5 flex justify-center mb-15">
          <div className="h-full w-full">
            <div className=" h-13 mb-7 relative flex items-center justify-center">
              <h3 className="text-40 font-500 text-gray-800">What's new</h3>
              <button
                type="btn"
                className="w-27 h-11 rounded-full py-3 px-8 text-black text-14 border-gray-800 border-solid border-2 absolute right-0 font-500 leading-3 hover:bg-gray-200"
              >
                View all
              </button>
            </div>
            <div className="w-full h-55 flex  items-center gap-10">
              <div className="h-full w-[545px] relative">
                <img
                  src={WhatsNew}
                  alt="what's new"
                  className="h-55  rounded-lg"
                />
                <button className="w-36 h-12 rounded-full bg-black text-white font-500 absolute bottom-8 left-33 hover:bg-gray-500">
                  BROWSE ECATALOGUE
                </button>
              </div>
              <div className="h-full w-[721px] flex justify-between items-center">
                {data.splice(2, 3).map((item) => {
                  return (
                    <div className="w-39.3 h-full bg-gray-100">
                      <div className="group overflow-hidden w-39.3 h-39.3 relative cursor-pointer">
                        <img
                          src={item.thumbnailUrl}
                          alt="opt"
                          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                        />
                        <span className="absolute w-14 h-8 bg-emerald-200 opacity-90 px-3 m-auto rounded-md leading-[32px] text-16 font-500 text-gray-800 top-2 left-2">
                          New
                        </span>
                        <div className="absolute w-11 h-11 bg-white bottom-2 right-2 rounded-full flex justify-center items-center p-1.5 shadow-xl">
                          <img
                            src={StoreIcon}
                            alt="store"
                            className="w-7 h-7"
                          />
                        </div>
                        <div className="absolute w-11 h-11 bg-white bottom-16 right-2 rounded-full flex justify-center items-center p-1.5 shadow-xl">
                          <img src={Heart} alt="heart" className="w-7 h-7" />
                        </div>
                      </div>
                      <div className="w-full h-5 py-0 px-2.5"></div>
                      <div className="w-full h-5 flex justify-start items-center gap-2 mb-2">
                        <div className="flex justify-end items-center">
                          <img
                            alt="star-full"
                            src={FullStar}
                            className="w-5 h-5"
                          />
                          <img
                            alt="star-full"
                            src={FullStar}
                            className="w-5 h-5"
                          />
                          <img
                            alt="star-full"
                            src={FullStar}
                            className="w-5 h-5"
                          />
                          <img
                            alt="star-full"
                            src={FullStar}
                            className="w-5 h-5"
                          />
                          <img
                            alt="star-full"
                            src={EmptyStar}
                            className="w-5 h-5"
                          />
                        </div>
                        <span className="text-12 text-gray-700">(1)</span>
                      </div>
                      <p className="h-4 text-gray-600 flex justify-start items-center text-12 font-100 mb-3">
                        OPTIMALS
                      </p>
                      <div className="h-10 text-14 text-gray-900 font-400">
                        Opt Optimals Daily Glow Multi-Protector SPF50
                      </div>
                      <div className="h-5 flex items-center gap-4 mt-3">
                        <p className="text-orange-600 font-500">£12.99</p>
                        <span className="line-through text-gray-400 font-100">
                          £20.00
                        </span>
                      </div>
                    </div>
                  );
                })}
                {/* <div className="w-39.3 h-full bg-gray-100">
                  <div className="group overflow-hidden w-39.3 h-39.3 relative cursor-pointer">
                    <img
                      src={OptWhatsNew}
                      alt="opt"
                      className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                    <span className="absolute w-14 h-8 bg-emerald-200 opacity-90 px-3 m-auto rounded-md leading-[32px] text-16 font-500 text-gray-800 top-2 left-2">
                      New
                    </span>
                    <div className="absolute w-11 h-11 bg-white bottom-2 right-2 rounded-full flex justify-center items-center p-1.5 shadow-xl">
                      <img src={StoreIcon} alt="store" className="w-7 h-7" />
                    </div>
                    <div className="absolute w-11 h-11 bg-white bottom-16 right-2 rounded-full flex justify-center items-center p-1.5 shadow-xl">
                      <img src={Heart} alt="heart" className="w-7 h-7" />
                    </div>
                  </div>
                  <div className="w-full h-5 py-0 px-2.5"></div>
                  <div className="w-full h-5 flex justify-start items-center gap-2 mb-2">
                    <div className="flex justify-end items-center">
                      <img alt="star-full" src={FullStar} className="w-5 h-5" />
                      <img alt="star-full" src={FullStar} className="w-5 h-5" />
                      <img alt="star-full" src={FullStar} className="w-5 h-5" />
                      <img alt="star-full" src={FullStar} className="w-5 h-5" />
                      <img
                        alt="star-full"
                        src={EmptyStar}
                        className="w-5 h-5"
                      />
                    </div>
                    <span className="text-12 text-gray-700">(1)</span>
                  </div>
                  <p className="h-4 text-gray-600 flex justify-start items-center text-12 font-100 mb-3">
                    OPTIMALS
                  </p>
                  <div className="h-10 text-14 text-gray-900 font-400">
                    Opt Optimals Daily Glow Multi-Protector SPF50
                  </div>
                  <div className="h-5 flex items-center gap-4 mt-3">
                    <p className="text-orange-600 font-500">£12.99</p>
                    <span className="line-through text-gray-400 font-100">
                      £20.00
                    </span>
                  </div>
                </div>
                <div className="w-39.3 h-full bg-gray-100">
                  <div className="group overflow-hidden w-39.3 h-39.3 relative cursor-pointer">
                    <img
                      src={OptWhatsNew2}
                      alt="opt"
                      className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                    <span className="absolute w-14 h-8 bg-emerald-200 opacity-90 px-3 m-auto rounded-md leading-[32px] text-16 font-500 text-gray-800 top-2 left-2">
                      New
                    </span>
                    <div className="absolute w-11 h-11 bg-white bottom-2 right-2 rounded-full flex justify-center items-center p-1.5 shadow-xl">
                      <img src={StoreIcon} alt="store" className="w-7 h-7" />
                    </div>
                    <div className="absolute w-11 h-11 bg-white bottom-16 right-2 rounded-full flex justify-center items-center p-1.5 shadow-xl">
                      <img src={Heart} alt="heart" className="w-7 h-7" />
                    </div>
                  </div>
                  <div className="w-full h-5 py-0 px-2.5"></div>
                  <div className="w-full h-5 flex justify-start items-center gap-2 mb-2">
                    <div className="flex justify-end items-center">
                      <img
                        alt="star-full"
                        src={EmptyStar}
                        className="w-5 h-5"
                      />
                      <img
                        alt="star-full"
                        src={EmptyStar}
                        className="w-5 h-5"
                      />
                      <img
                        alt="star-full"
                        src={EmptyStar}
                        className="w-5 h-5"
                      />
                      <img
                        alt="star-full"
                        src={EmptyStar}
                        className="w-5 h-5"
                      />
                      <img
                        alt="star-full"
                        src={EmptyStar}
                        className="w-5 h-5"
                      />
                    </div>
                    <span className="text-12 text-gray-700">(0)</span>
                  </div>
                  <p className="h-4 text-gray-600 flex justify-start items-center text-12 font-100 mb-3">
                    OPTIMALS
                  </p>
                  <div className="h-10 text-14 text-gray-900 font-400">
                    Opt Optimals Hydra Radiance Rich Cream
                  </div>
                  <div className="h-5 flex items-center gap-4 mt-3">
                    <p className="text-orange-600 font-500">£12.99</p>
                    <span className="line-through text-gray-400 font-100">
                      £17.00
                    </span>
                  </div>
                </div>
                <div className="w-39.3 h-full bg-gray-100">
                  <div className="group overflow-hidden w-39.3 h-39.3 relative cursor-pointer">
                    <img
                      src={TheOneWhatsNew}
                      alt="opt"
                      className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                    <span className="absolute w-14 h-8 bg-emerald-200 opacity-90 px-3 m-auto rounded-md leading-[32px] text-16 font-500 text-gray-800 top-2 left-2">
                      New
                    </span>
                    <div className="absolute w-11 h-11 bg-white bottom-2 right-2 rounded-full flex justify-center items-center p-1.5 shadow-xl">
                      <img src={StoreIcon} alt="store" className="w-7 h-7" />
                    </div>
                    <div className="absolute w-11 h-11 bg-white bottom-16 right-2 rounded-full flex justify-center items-center p-1.5 shadow-xl">
                      <img src={Heart} alt="heart" className="w-7 h-7" />
                    </div>
                  </div>
                  <div className="w-full h-5 py-0 px-2.5"></div>
                  <div className="w-full h-5 flex justify-start items-center gap-2 mb-2">
                    <div className="flex justify-end items-center">
                      <img alt="star-full" src={FullStar} className="w-5 h-5" />
                      <img alt="star-full" src={FullStar} className="w-5 h-5" />
                      <img alt="star-full" src={FullStar} className="w-5 h-5" />
                      <img alt="star-full" src={FullStar} className="w-5 h-5" />
                      <img
                        alt="star-full"
                        src={EmptyStar}
                        className="w-5 h-5"
                      />
                    </div>
                    <span className="text-12 text-gray-700">(1)</span>
                  </div>
                  <p className="h-4 text-gray-600 flex justify-start items-center text-12 font-100 mb-3">
                    THE ONES
                  </p>
                  <div className="h-10 text-14 text-gray-900 font-400">
                    5 in 1 Wonder Lash Prom Queen Mascara - Black
                  </div>
                  <div className="h-5 flex items-center gap-4 mt-3">
                    <p className="text-orange-600 font-500">£6.99</p>
                    <span className="line-through text-gray-400 font-100">
                      £13.00
                    </span>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* icons of our time */}
        <div className="w-full flex justify-center mb-15 ">
          <div className="w-full h-full ">
            <div className="h-27 felx justify-center items-center relative mb-4">
              <div className="w-[600px] h-full flex-col items-center justify-between mx-auto">
                <h3 className="text-40 font-700 text-gray-800 flex justify-center items-center mb-3">
                  Icons of our time
                </h3>
                <p className="text-center text-gray-700 font-100">
                  Say hello to our legendary products—iconic essentials you
                  trust and reach for again and again. Discover the time-tested
                  favourites our customers love most.
                </p>
              </div>
              <button
                type="btn"
                className="w-27 h-11 rounded-full py-3 px-8 text-black text-14 border-gray-800 border-solid border-2 absolute right-0 bottom-0 font-500 leading-3 hover:bg-gray-200"
              >
                View all
              </button>
            </div>
            <div className="flex justify-between items-center h-[455px] gap-5">
              <img
                src={IconOfOurTime}
                alt=""
                className="w-1/5 h-full rounded-md"
              />
              <div className="w-4/5 h-full grid grid-cols-4 gap-x-3">
                <div className="h-full bg-gray-100">
                  <div className="group overflow-hidden w-39.3 h-39.3 relative cursor-pointer">
                    <img
                      src={TheOneWhatsNew}
                      alt="opt"
                      className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                    <span className="absolute w-14 h-8 bg-emerald-200 opacity-90 px-3 m-auto rounded-md leading-[32px] text-16 font-500 text-gray-800 top-2 left-2">
                      New
                    </span>
                    <div
                      className="absolute w-11 h-11 bg-white bottom-2 right-2 rounded-full flex justify-center items-center p-1.5 shadow-xl"
                      onMouseEnter={() => setIsStoreHovered(true)}
                      onMouseLeave={() => setIsStoreHovered(false)}
                    >
                      <img
                        src={isStoreHovered ? BlackStore : StoreIcon}
                        alt="store"
                        className="w-7 h-7 transition-colors duration-300"
                      />
                    </div>
                    <div
                      className="absolute w-11 h-11 bg-white bottom-16 right-2 rounded-full flex justify-center items-center p-1.5 shadow-xl"
                      onMouseEnter={() => setIsHeartHovered(true)}
                      onMouseLeave={() => setIsHeartHovered(false)}
                    >
                      <img
                        src={isHeartHovered ? PinkHeart : Heart}
                        alt="heart"
                        className="w-7 h-7 transition-colors duration-300"
                      />
                    </div>
                  </div>
                  <div className="w-full h-5 py-0 px-2.5"></div>
                  <div className="w-full h-5 flex justify-start items-center gap-2 mb-2">
                    <div className="flex justify-end items-center">
                      <img alt="star-full" src={FullStar} className="w-5 h-5" />
                      <img alt="star-full" src={FullStar} className="w-5 h-5" />
                      <img alt="star-full" src={FullStar} className="w-5 h-5" />
                      <img alt="star-full" src={FullStar} className="w-5 h-5" />
                      <img
                        alt="star-full"
                        src={EmptyStar}
                        className="w-5 h-5"
                      />
                    </div>
                    <span className="text-12 text-gray-700">(1)</span>
                  </div>
                  <p className="h-4 text-gray-600 flex justify-start items-center text-12 font-100 mb-3">
                    THE ONES
                  </p>
                  <div className="h-10 text-14 text-gray-900 font-400">
                    5 in 1 Wonder Lash Prom Queen Mascara - Black
                  </div>
                  <div className="h-5 flex items-center gap-4 mt-3">
                    <p className="text-orange-600 font-500">£6.99</p>
                    <span className="line-through text-gray-400 font-100">
                      £13.00
                    </span>
                  </div>
                </div>
                <div className="h-full bg-gray-100">
                  <div className="group overflow-hidden w-39.3 h-39.3 relative cursor-pointer">
                    <img
                      src={MilkandHoney}
                      alt="opt"
                      className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                    <div className="absolute w-11 h-11 bg-white bottom-2 right-2 rounded-full flex justify-center items-center p-1.5 shadow-xl">
                      <img src={StoreIcon} alt="store" className="w-7 h-7" />
                    </div>
                    <div className="absolute w-11 h-11 bg-white bottom-16 right-2 rounded-full flex justify-center items-center p-1.5 shadow-xl">
                      <FaRegHeart size={24} className="hover:text-red-900" />
                    </div>
                  </div>
                  <div className="w-full h-5 py-0 px-2.5"></div>
                  <div className="w-full h-5 flex justify-start items-center gap-2 mb-2">
                    <div className="flex justify-end items-center">
                      <img alt="star-full" src={FullStar} className="w-5 h-5" />
                      <img alt="star-full" src={FullStar} className="w-5 h-5" />
                      <img alt="star-full" src={FullStar} className="w-5 h-5" />
                      <img alt="star-full" src={FullStar} className="w-5 h-5" />
                      <img alt="star-full" src={FullStar} className="w-5 h-5" />
                    </div>
                    <span className="text-12 text-gray-700">(672)</span>
                  </div>
                  <p className=" text-gray-600 flex justify-start items-center text-12 font-100 mb-3">
                    MILK & HONEY GOLD
                  </p>
                  <div className=" text-14 text-gray-900 font-400">
                    Nourishing Hand & Body Cream
                  </div>
                  <div className="h-5 flex items-center gap-4 mt-3">
                    <p className="text-orange-600 font-500">£12.99</p>
                  </div>
                </div>
                <div className="h-full bg-gray-100">
                  <div className="group overflow-hidden w-39.3 h-39.3 relative cursor-pointer">
                    <img
                      src={TenderCare}
                      alt="opt"
                      className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                    <div className="absolute w-11 h-11 bg-white bottom-2 right-2 rounded-full flex justify-center items-center p-1.5 shadow-xl">
                      <img src={StoreIcon} alt="store" className="w-7 h-7" />
                    </div>
                    <div className="absolute w-11 h-11 bg-white bottom-16 right-2 rounded-full flex justify-center items-center p-1.5 shadow-xl">
                      <img src={Heart} alt="heart" className="w-7 h-7" />
                    </div>
                  </div>
                  <div className="w-full h-5 py-0 px-2.5"></div>
                  <div className="w-full h-5 flex justify-start items-center gap-2 mb-2">
                    <div className="flex justify-end items-center">
                      <img alt="star-full" src={FullStar} className="w-5 h-5" />
                      <img alt="star-full" src={FullStar} className="w-5 h-5" />
                      <img alt="star-full" src={FullStar} className="w-5 h-5" />
                      <img alt="star-full" src={FullStar} className="w-5 h-5" />
                      <img alt="star-full" src={FullStar} className="w-5 h-5" />
                    </div>
                    <span className="text-12 text-gray-700">(517)</span>
                  </div>
                  <p className="h-4 text-gray-600 flex justify-start items-center text-12 font-100 mb-3">
                    TTENDER CARE
                  </p>
                  <div className=" text-14 text-gray-900 font-400">
                    Sweet Mandarin Multi-purpose Balm
                  </div>
                  <div className="h-5 flex items-center gap-4 mt-3">
                    <p className="text-orange-600 font-500">£8.50</p>
                  </div>
                </div>
                <div className="h-full bg-gray-100">
                  <div className="group overflow-hidden w-39.3 h-39.3 relative cursor-pointer">
                    <img
                      src={RoyalVelvet}
                      alt="opt"
                      className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                    <div className="absolute w-11 h-11 bg-white bottom-2 right-2 rounded-full flex justify-center items-center p-1.5 shadow-xl">
                      <img src={StoreIcon} alt="store" className="w-7 h-7" />
                    </div>
                    <div className="absolute w-11 h-11 bg-white bottom-16 right-2 rounded-full flex justify-center items-center p-1.5 shadow-xl">
                      <img src={Heart} alt="heart" className="w-7 h-7" />
                    </div>
                  </div>
                  <div className="w-full h-5 py-0 px-2.5"></div>
                  <div className="w-full h-5 flex justify-start items-center gap-2 mb-2">
                    <div className="flex justify-end items-center">
                      <img alt="star-full" src={FullStar} className="w-5 h-5" />
                      <img alt="star-full" src={FullStar} className="w-5 h-5" />
                      <img alt="star-full" src={FullStar} className="w-5 h-5" />
                      <img alt="star-full" src={FullStar} className="w-5 h-5" />
                      <img alt="star-full" src={FullStar} className="w-5 h-5" />
                    </div>
                    <span className="text-12 text-gray-700">(561)</span>
                  </div>
                  <p className="h-4 text-gray-600 flex justify-start items-center text-12 font-100 mb-3">
                    THE ONES
                  </p>
                  <div className="h-10 text-14 text-gray-900 font-400">
                    5 in 1 Wonder Lash Prom Queen Mascara - Black
                  </div>
                  <div className="h-5 flex items-center gap-4 mt-3">
                    <p className="text-orange-600 font-500">£6.99</p>
                    <span className="line-through text-gray-400 font-100">
                      £13.00
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* best offers */}
        <div className="w-full flex justify-center mb-15">
          <div className="w-full h-full">
            <div className=" felx justify-center items-center relative mb-4">
              <div className="w-[600px] h-full flex-col items-center justify-between mx-auto">
                <h3 className="text-40 font-700 text-gray-800 flex justify-center items-center mb-3">
                  Best offers
                </h3>
              </div>
              <button
                type="btn"
                className="w-27 h-11 rounded-full py-3 px-8 text-black text-14 border-gray-800 border-solid border-2 absolute bottom-0 font-500 leading-3 hover:bg-gray-200"
              >
                View all
              </button>
            </div>
            <div className="flex justify-between items-center h-[455px] gap-5">
              <div className="w-4/5 h-full grid grid-cols-4 gap-x-3">
                <div className="h-full bg-gray-100">
                  <div className="group overflow-hidden w-39.3 h-39.3 relative cursor-pointer">
                    <img
                      src={Possess}
                      alt="opt"
                      className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                    <div
                      className="absolute w-11 h-11 bg-white bottom-2 right-2 rounded-full flex justify-center items-center p-1.5 shadow-xl"
                      onMouseEnter={() => setIsStoreHovered(true)}
                      onMouseLeave={() => setIsStoreHovered(false)}
                    >
                      <img
                        src={isStoreHovered ? BlackStore : StoreIcon}
                        alt="store"
                        className="w-7 h-7 transition-colors duration-300"
                      />
                    </div>
                    <div
                      className="absolute w-11 h-11 bg-white bottom-16 right-2 rounded-full flex justify-center items-center p-1.5 shadow-xl"
                      onMouseEnter={() => setIsHeartHovered(true)}
                      onMouseLeave={() => setIsHeartHovered(false)}
                    >
                      <img
                        src={isHeartHovered ? PinkHeart : Heart}
                        alt="heart"
                        className="w-7 h-7 transition-colors duration-300"
                      />
                    </div>
                  </div>
                  <div className="w-full h-5 py-0 px-2.5"></div>
                  <div className="w-full h-5 flex justify-start items-center gap-2 mb-2">
                    <div className="flex justify-end items-center">
                      <img alt="star-full" src={FullStar} className="w-5 h-5" />
                      <img alt="star-full" src={FullStar} className="w-5 h-5" />
                      <img alt="star-full" src={FullStar} className="w-5 h-5" />
                      <img alt="star-full" src={FullStar} className="w-5 h-5" />
                      <img alt="star-full" src={FullStar} className="w-5 h-5" />
                    </div>
                    <span className="text-12 text-gray-700">(352)</span>
                  </div>
                  <p className="h-4 text-gray-600 flex justify-start items-center text-12 font-100 mb-3">
                    possess
                  </p>
                  <div className=" text-14 text-gray-900 font-400">
                    Absolute Eau de Parfum
                  </div>
                  <div className="h-5 flex items-center gap-4 mt-3">
                    <p className="text-orange-600 font-500">£27.99</p>
                    <span className="line-through text-gray-400 font-100">
                      £47.00
                    </span>
                  </div>
                </div>
                <div className="h-full bg-gray-100">
                  <div className="group overflow-hidden w-39.3 h-39.3 relative cursor-pointer">
                    <img
                      src={LipBalm}
                      alt="opt"
                      className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                    <div className="absolute w-11 h-11 bg-white bottom-2 right-2 rounded-full flex justify-center items-center p-1.5 shadow-xl">
                      <img src={StoreIcon} alt="store" className="w-7 h-7" />
                    </div>
                    <div className="absolute w-11 h-11 bg-white bottom-16 right-2 rounded-full flex justify-center items-center p-1.5 shadow-xl">
                      <FaRegHeart size={24} className="hover:text-red-900" />
                    </div>
                  </div>
                  <div className="w-full h-5 py-0 px-2.5"></div>
                  <div className="w-full h-5 flex justify-start items-center gap-2 mb-2">
                    <div className="flex justify-end items-center">
                      <img alt="star-full" src={FullStar} className="w-5 h-5" />
                      <img alt="star-full" src={FullStar} className="w-5 h-5" />
                      <img alt="star-full" src={FullStar} className="w-5 h-5" />
                      <img alt="star-full" src={FullStar} className="w-5 h-5" />
                      <img
                        alt="star-full"
                        src={EmptyStar}
                        className="w-5 h-5"
                      />
                    </div>
                    <span className="text-12 text-gray-700">(1652)</span>
                  </div>
                  <p className=" text-gray-600 flex justify-start items-center text-12 font-100 mb-3">
                    TENDER CARE
                  </p>
                  <div className=" text-14 text-gray-900 font-400">
                    Natural Multi-purpose Balm
                  </div>
                  <div className="h-5 flex items-center gap-4 mt-3">
                    <p className="text-orange-600 font-500">£3.49</p>
                    <span className="line-through text-gray-400 font-100">
                      £8.50
                    </span>
                  </div>
                </div>
                <div className="h-full bg-gray-100">
                  <div className="group overflow-hidden w-39.3 h-39.3 relative cursor-pointer">
                    <img
                      src={FacialOil}
                      alt="opt"
                      className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                    <div className="absolute w-11 h-11 bg-white bottom-2 right-2 rounded-full flex justify-center items-center p-1.5 shadow-xl">
                      <img src={StoreIcon} alt="store" className="w-7 h-7" />
                    </div>
                    <div className="absolute w-11 h-11 bg-white bottom-16 right-2 rounded-full flex justify-center items-center p-1.5 shadow-xl">
                      <img src={Heart} alt="heart" className="w-7 h-7" />
                    </div>
                  </div>
                  <div className="w-full h-5 py-0 px-2.5"></div>
                  <div className="w-full h-5 flex justify-start items-center gap-2 mb-2">
                    <div className="flex justify-end items-center">
                      <img alt="star-full" src={FullStar} className="w-5 h-5" />
                      <img alt="star-full" src={FullStar} className="w-5 h-5" />
                      <img alt="star-full" src={FullStar} className="w-5 h-5" />
                      <img alt="star-full" src={FullStar} className="w-5 h-5" />
                      <img alt="star-full" src={FullStar} className="w-5 h-5" />
                    </div>
                    <span className="text-12 text-gray-700">(482)</span>
                  </div>
                  <p className="h-4 text-gray-600 flex justify-start items-center text-12 font-100 mb-3">
                    NOVAGE +
                  </p>
                  <div className=" text-14 text-gray-900 font-400">
                    Intense Nourishment Facial Oil Capsules
                  </div>
                  <div className="h-5 flex items-center gap-4 mt-3">
                    <p className="text-orange-600 font-500">£24.99</p>
                    <span className="line-through text-gray-400 font-100">
                      £50.00
                    </span>
                  </div>
                </div>
                <div className="h-full bg-gray-100">
                  <div className="group overflow-hidden w-39.3 h-39.3 relative cursor-pointer">
                    <img
                      src={AmberElixer}
                      alt="opt"
                      className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                    <div className="absolute w-11 h-11 bg-white bottom-2 right-2 rounded-full flex justify-center items-center p-1.5 shadow-xl">
                      <img src={StoreIcon} alt="store" className="w-7 h-7" />
                    </div>
                    <div className="absolute w-11 h-11 bg-white bottom-16 right-2 rounded-full flex justify-center items-center p-1.5 shadow-xl">
                      <img src={Heart} alt="heart" className="w-7 h-7" />
                    </div>
                  </div>
                  <div className="w-full h-5 py-0 px-2.5"></div>
                  <div className="w-full h-5 flex justify-start items-center gap-2 mb-2">
                    <div className="flex justify-end items-center">
                      <img alt="star-full" src={FullStar} className="w-5 h-5" />
                      <img alt="star-full" src={FullStar} className="w-5 h-5" />
                      <img alt="star-full" src={FullStar} className="w-5 h-5" />
                      <img alt="star-full" src={FullStar} className="w-5 h-5" />
                      <img alt="star-full" src={FullStar} className="w-5 h-5" />
                    </div>
                    <span className="text-12 text-gray-700">(561)</span>
                  </div>
                  <p className="h-4 text-gray-600 flex justify-start items-center text-12 font-100 mb-3">
                    AMBER ELIXER
                  </p>
                  <div className=" text-14 text-gray-900 font-400">
                    Eau de Parfum
                  </div>
                  <div className="h-5 flex items-center gap-4 mt-3">
                    <p className="text-orange-600 font-500">£6.99</p>
                    <span className="line-through text-gray-400 font-100">
                      £13.00
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative w-1/5 h-full">
                <img
                  src={BestOfferCover}
                  alt=""
                  className="h-full rounded-md"
                />
                <div className="w-full h-35 absolute py-7.5 px-10 bottom-0 flex flex-col justify-between gap-y-2">
                  <p className="w-33 h-20 text-center text-30 mb-1 font-500 text-gray-100">
                    BEST RIGHT NOW
                  </p>
                  <button
                    type="btn"
                    className="w-33 h-12 bg-black rounded-full text-gray-100 font-500 text-16 hover:bg-gray-500"
                  >
                    SEIZE THE DEALS
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* oriflame on me */}
        <div className="w-full h-17 mb-10">
          <div className="w-full h-full">
            <div className="h-12 flex-col items-center justify-between mx-auto relative">
              <h3 className="text-40 font-500 text-gray-800 flex justify-center items-center">
                #OriflameOnMe
              </h3>
              <button
                type="btn"
                className="w-27 h-11 rounded-full py-3 px-8 text-black text-14 border-gray-800 border-solid border-2 absolute bottom-0 font-500 leading-3 right-0 top-2 hover:bg-gray-200"
              >
                View all
              </button>
            </div>
            <p className="mb-10 font-300 text-12 text-gray-700 text-center mt-5">
              Share your amazinig looks with{" "}
              <span className="font-700">@oriflame</span> and{" "}
              <span className="font-900">#Oriflame On Me</span>
            </p>
          </div>
        </div>
        {/* swiper oriflame on me */}
        <div className="mt-10 mb-10 h-71 w-full relative">
          <Swiper
            slidesPerView={5}
            spaceBetween={30}
            modules={[Navigation]}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="w-41 h-71 flex items-center justify-center cursor-pointer relative group overflow-hidden">
                <div className="w-41 h-41 relative">
                  <img
                    src={One}
                    alt="orifalme"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className=" w-full h-full absolute inset-0 bg-gray-700 bg-opacity-0 group-hover:bg-opacity-50 flex justify-center items-center transition duration-300">
                    <span className="text-gray-300 text-8 opacity-0 group-hover:opacity-100 transition duration-300">
                      @Oriflame
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-41 h-71 flex flex-col items-center justify-center cursor-pointer gap-7.5">
                <div className="w-41 h-41 bg-rose-300 overflow-hidden relative group">
                  <img
                    src={Two}
                    alt="orifalme"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className=" w-full h-full absolute inset-0 bg-gray-700 bg-opacity-0 group-hover:bg-opacity-50 flex justify-center items-center transition duration-300">
                    <span className="text-gray-300 text-8 opacity-0 group-hover:opacity-100 transition duration-300">
                      @Oriflame
                    </span>
                  </div>
                </div>
                <div className="w-41 h-41 bg-rose-300 overflow-hidden relative group">
                  <img
                    src={Three}
                    alt="orifalme"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className=" w-full h-full absolute inset-0 bg-gray-700 bg-opacity-0 group-hover:bg-opacity-50 flex justify-center items-center transition duration-300">
                    <span className="text-gray-300 text-8 opacity-0 group-hover:opacity-100 transition duration-300">
                      @Oriflame
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-41 h-71 flex  items-start justify-center cursor-pointer pt-10">
                <div className="w-41 h-41 bg-rose-300 overflow-hidden relative group">
                  <img
                    src={Four}
                    alt="orifalme"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className=" w-full h-full absolute inset-0 bg-gray-700 bg-opacity-0 group-hover:bg-opacity-50 flex justify-center items-center transition duration-300">
                    <span className="text-gray-300 text-8 opacity-0 group-hover:opacity-100 transition duration-300">
                      @Oriflame
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-41 h-71 flex items-end justify-center cursor-pointer pb-10">
                <div className="w-41 h-41 bg-rose-300 overflow-hidden relative group">
                  <img
                    src={Five}
                    alt="orifalme"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className=" w-full h-full absolute inset-0 bg-gray-700 bg-opacity-0 group-hover:bg-opacity-50 flex justify-center items-center transition duration-300">
                    <span className="text-gray-300 text-8 opacity-0 group-hover:opacity-100 transition duration-300">
                      @Oriflame
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-41 h-71 flex items-center justify-center cursor-pointer">
                <div className="w-41 h-41 bg-rose-300 overflow-hidden relative group">
                  <img
                    src={Six}
                    alt="orifalme"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className=" w-full h-full absolute inset-0 bg-gray-700 bg-opacity-0 group-hover:bg-opacity-50 flex justify-center items-center transition duration-300">
                    <span className="text-gray-300 text-8 opacity-0 group-hover:opacity-100 transition duration-300">
                      @Oriflame
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-41 h-71 flex flex-col items-center justify-center cursor-pointer gap-7.5">
                <div className="w-41 h-41 bg-rose-300 overflow-hidden relative group">
                  <img
                    src={Eleven}
                    alt="orifalme"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className=" w-full h-full absolute inset-0 bg-gray-700 bg-opacity-0 group-hover:bg-opacity-50 flex justify-center items-center transition duration-300">
                    <span className="text-gray-300 text-8 opacity-0 group-hover:opacity-100 transition duration-300">
                      @Oriflame
                    </span>
                  </div>
                </div>
                <div className="w-41 h-41 bg-rose-300 overflow-hidden relative group">
                  <img
                    src={Twelve}
                    alt="orifalme"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className=" w-full h-full absolute inset-0 bg-gray-700 bg-opacity-0 group-hover:bg-opacity-50 flex justify-center items-center transition duration-300">
                    <span className="text-gray-300 text-8 opacity-0 group-hover:opacity-100 transition duration-300">
                      @Oriflame
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-41 h-71 flex  items-start justify-center cursor-pointer pt-10">
                <div className="w-41 h-41 bg-rose-300 overflow-hidden relative group">
                  <img
                    src={One}
                    alt="orifalme"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className=" w-full h-full absolute inset-0 bg-gray-700 bg-opacity-0 group-hover:bg-opacity-50 flex justify-center items-center transition duration-300">
                    <span className="text-gray-300 text-8 opacity-0 group-hover:opacity-100 transition duration-300">
                      @Oriflame
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-41 h-71 flex items-end justify-center cursor-pointer pb-10">
                <div className="w-41 h-41 bg-rose-300 overflow-hidden relative group">
                  <img
                    src={Two}
                    alt="orifalme"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className=" w-full h-full absolute inset-0 bg-gray-700 bg-opacity-0 group-hover:bg-opacity-50 flex justify-center items-center transition duration-300">
                    <span className="text-gray-300 text-8 opacity-0 group-hover:opacity-100 transition duration-300">
                      @Oriflame
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-41 h-71 flex  items-start justify-center cursor-pointer pt-10">
                <div className="w-41 h-41 bg-rose-300 overflow-hidden relative group">
                  <img
                    src={Three}
                    alt="orifalme"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className=" w-full h-full absolute inset-0 bg-gray-700 bg-opacity-0 group-hover:bg-opacity-50 flex justify-center items-center transition duration-300">
                    <span className="text-gray-300 text-8 opacity-0 group-hover:opacity-100 transition duration-300">
                      @Oriflame
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-41 h-71 flex flex-col items-center justify-center cursor-pointer gap-7.5">
                <div className="w-41 h-41 bg-rose-300 overflow-hidden relative group">
                  <img
                    src={Four}
                    alt="orifalme"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className=" w-full h-full absolute inset-0 bg-gray-700 bg-opacity-0 group-hover:bg-opacity-50 flex justify-center items-center transition duration-300">
                    <span className="text-gray-300 text-8 opacity-0 group-hover:opacity-100 transition duration-300">
                      @Oriflame
                    </span>
                  </div>
                </div>
                <div className="w-41 h-41 bg-rose-300 overflow-hidden relative group">
                  <img
                    src={Five}
                    alt="orifalme"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className=" w-full h-full absolute inset-0 bg-gray-700 bg-opacity-0 group-hover:bg-opacity-50 flex justify-center items-center transition duration-300">
                    <span className="text-gray-300 text-8 opacity-0 group-hover:opacity-100 transition duration-300">
                      @Oriflame
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-41 h-71 flex  items-start justify-center cursor-pointer pt-10">
                <div className="w-41 h-41 bg-rose-300 overflow-hidden relative group">
                  <img
                    src={Six}
                    alt="orifalme"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className=" w-full h-full absolute inset-0 bg-gray-700 bg-opacity-0 group-hover:bg-opacity-50 flex justify-center items-center transition duration-300">
                    <span className="text-gray-300 text-8 opacity-0 group-hover:opacity-100 transition duration-300">
                      @Oriflame
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <button
              ref={prevRef}
              className="w-11 h-11 rounded-full absolute bottom-0 left-0 z-10 bg-white p-2.5 cursor-pointer"
            >
              <img src={Prev} alt="prev btn" />
            </button>
            <button
              ref={nextRef}
              className="w-11 h-11 rounded-full absolute bottom-0 right-5 z-10 bg-white p-2.5 cursor-pointer"
            >
              <img src={Next} alt="next btn" />
            </button>
          </Swiper>
        </div>
        {/* healthier gut, happier day */}
        <div className="w-full flex justify-center mb-15">
          <div className="w-full h-full">
            <div className=" felx justify-center items-center relative mb-10">
              <div className="w-[600px] h-full flex-col items-center justify-between mx-auto">
                <h3 className="text-40 font-700 text-gray-800 flex justify-center items-center mb-3">
                  Healthier gut, happier day
                </h3>
                <p className="text-center text-gray-700 font-100 text-14">
                  A healthy and diverse gut microbiome impacts health in many
                  ways, including the immune system, metabolism, appetite and
                  emotions. Support yours by combining probiotics (the good
                  bacteria needed in your gut) and prebiotics (food that the
                  good bacteria needs to thrive).
                </p>
              </div>
              <button
                type="btn"
                className="w-29 h-11 rounded-full py-3 text-black text-14 border-gray-800 border-solid border-2 absolute right-0 bottom-0 font-500 leading-3 hover:bg-gray-200"
              >
                LEARN HOW
              </button>
            </div>
            <div className="flex justify-between items-center h-[455px] gap-5">
              <div className="relative w-2/4 h-full">
                <img src={Healthy} alt="" className="h-full rounded-md" />
                <div className="w-full h-30 absolute py-7.5 px-10 bottom-0 flex flex-col  items-center">
                  <p className="w-53 text-center text-30 mb-1 font-500 text-gray-100">
                    Forget tummy trouble
                  </p>
                  <button
                    type="btn"
                    className="w-33 h-12 bg-black rounded-full text-gray-100 font-500 text-16 hover:bg-gray-500"
                  >
                    LEARN HOW
                  </button>
                </div>
              </div>
              <div className="w-3/4 h-full grid grid-cols-3 gap-x-5">
                <div className="h-full  bg-gray-100">
                  <div className="group overflow-hidden w-39.3 h-39.3 relative cursor-pointer m-auto">
                    <img
                      src={WellosphyRed}
                      alt="opt"
                      className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                    <div
                      className="absolute w-11 h-11 bg-white bottom-2 right-2 rounded-full flex justify-center items-center p-1.5 shadow-xl"
                      onMouseEnter={() => setIsStoreHovered(true)}
                      onMouseLeave={() => setIsStoreHovered(false)}
                    >
                      <img
                        src={isStoreHovered ? BlackStore : StoreIcon}
                        alt="store"
                        className="w-7 h-7 transition-colors duration-300"
                      />
                    </div>
                    <div
                      className="absolute w-11 h-11 bg-white bottom-16 right-2 rounded-full flex justify-center items-center p-1.5 shadow-xl"
                      onMouseEnter={() => setIsHeartHovered(true)}
                      onMouseLeave={() => setIsHeartHovered(false)}
                    >
                      <img
                        src={isHeartHovered ? PinkHeart : Heart}
                        alt="heart"
                        className="w-7 h-7 transition-colors duration-300"
                      />
                    </div>
                  </div>
                  <div className="w-full h-5 py-0 px-2.5"></div>
                  <div className="w-full h-5 flex justify-start items-center gap-2 mb-2">
                    <div className="flex justify-end items-center">
                      <img alt="star-full" src={FullStar} className="w-5 h-5" />
                      <img alt="star-full" src={FullStar} className="w-5 h-5" />
                      <img alt="star-full" src={FullStar} className="w-5 h-5" />
                      <img alt="star-full" src={FullStar} className="w-5 h-5" />
                      <img alt="star-full" src={FullStar} className="w-5 h-5" />
                    </div>
                    <span className="text-12 text-gray-700">(427)</span>
                  </div>
                  <p className="h-4 text-gray-600 flex justify-start items-center text-12 font-100 mb-3">
                    WELLOSPHY
                  </p>
                  <div className="text-14 text-gray-900 font-400">
                    Astaxanthin & Bilberry Extract
                  </div>
                  <div className="h-5 flex items-center gap-4 mt-3">
                    <p className="text-orange-600 font-500">£19.99</p>
                    <span className="line-through text-gray-400 font-100">
                      £24.99
                    </span>
                  </div>
                </div>
                <div className="h-full  bg-gray-100">
                  <div className="group overflow-hidden w-39.3 h-39.3 relative cursor-pointer m-auto">
                    <img
                      src={WellosphyGreen}
                      alt="opt"
                      className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                    <div className="absolute w-11 h-11 bg-white bottom-2 right-2 rounded-full flex justify-center items-center p-1.5 shadow-xl">
                      <img src={StoreIcon} alt="store" className="w-7 h-7" />
                    </div>
                    <div className="absolute w-11 h-11 bg-white bottom-16 right-2 rounded-full flex justify-center items-center p-1.5 shadow-xl">
                      <FaRegHeart size={24} className="hover:text-red-900" />
                    </div>
                  </div>
                  <div className="w-full h-5 py-0 px-2.5"></div>
                  <div className="w-full h-5 flex justify-start items-center gap-2 mb-2">
                    <div className="flex justify-end items-center">
                      <img alt="star-full" src={FullStar} className="w-5 h-5" />
                      <img alt="star-full" src={FullStar} className="w-5 h-5" />
                      <img alt="star-full" src={FullStar} className="w-5 h-5" />
                      <img alt="star-full" src={FullStar} className="w-5 h-5" />
                      <img alt="star-full" src={FullStar} className="w-5 h-5" />
                    </div>
                    <span className="text-12 text-gray-700">(152)</span>
                  </div>
                  <p className=" text-gray-600 flex justify-start items-center text-12 font-100 mb-3">
                    WELLOSPHY
                  </p>
                  <div className=" text-14 text-gray-900 font-400">
                    Prebiotic Fibre Drink
                  </div>
                  <div className="h-5 flex items-center gap-4 mt-3">
                    <p className="text-orange-600 font-500">£13.99</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* body end */}
        {/* footer start */}
        {/* reach your happy place */}
        <div className="w-full h-55 py-12.5 flex flex-col justify-between gap-y-5 items-center">
          <h3 className="text-40 text-gray-700 font-700">
            Reach your happy place
          </h3>
          <span className="text-14 text-gray-500 font-400 w-[600px] h-32 text-center">
            The art of living well, it’s personal. We believe true wellbeing
            feels different to everyone – and let’s be honest, it often means
            different things at different moments. Sometimes you need a cosy
            night in watching your fave TV series with a nourishing face mask
            on, while other days you want to be surrounded by friends and be
            active. It’s really about feeling confident to live life on your
            terms, free of judgement or expectations. We’re a people-powered
            wellbeing and beauty community with an entrepreneurial spirit – a
            supportive cheer squad ready to empower your journey with the beauty
            of your wellbeing. Together, we’ll help you carve out your own path
            to wellbeing – so you can enjoy the ride. Because happiness looks
            good on everyone!{" "}
          </span>
          <div className="w-22 h-0 bg-blue-400"></div>
        </div>
        {/* our top brands*/}
        <div className="w-full h-[433px] py-12.5 flex flex-col justify-between gap-y-5 items-center">
          <h3 className="text-40 text-gray-700 font-700">Our top brands</h3>
          <div className="w-[950px] h-35 flex justify-evenly items-center">
            <img
              src={GiordaniGoldBrand}
              alt="brand"
              className="w-35 h-35 rounded-full"
            />
            <img
              src={NoageBrand}
              alt="brand"
              className="w-35 h-35 rounded-full"
            />
            <img
              src={TheOneBrand}
              alt="brand"
              className="w-35 h-35 rounded-full"
            />
            <img
              src={WillosophyBrand}
              alt="brand"
              className="w-35 h-35 rounded-full"
            />
          </div>
          <button
            type="btn"
            className="w-29 h-11 rounded-full py-3 text-black text-14 border-gray-800 border-solid border-2 font-500 leading-3 hover:bg-gray-200"
          >
            LEARN HOW
          </button>
        </div>
      </div>
      <div className="container-fluid m-00 p-00 overflow-x-hidden">
        {/* subscribe */}
        <div className="w-full h-14 bg-purpl-400 py-4 mt-10 flex items-center justify-center gap-2.5 text-gray-800 bg-emerald-200">
          <img alt="email" src={Email} />
          <p className="text-16 font-600">
            Subscribe to our newsletter for inspiration & news!
          </p>
        </div>
        {/* cards in footer */}
        <div className="h-45 mb-7.5 py-7.5 bg-gray-100 flex justify-center items-center">
          <div className="w-[984px] h-40 flex justify-center items-center gap-2">
            <div className="w-1/4 h-full flex flex-col items-center">
              <div className=" flex flex-col items-center gap-5">
                <p className="text-gray-800 font-700 text-14">SUPPORT/HELP</p>
                <div className="flex flex-col items-start justify-evenly gap-4">
                  <p className="text-14 font-400 text-gray-600">
                    Support Center
                  </p>
                  <p className="text-14 font-400 text-gray-600">Contact Us</p>
                  <p className="text-14 font-400 text-gray-600">
                    Track your order
                  </p>
                  <p className="text-14 font-400 text-gray-600">
                    Claims & returns
                  </p>
                </div>
              </div>
            </div>
            <div className="w-1/4 h-full flex flex-col items-center">
              <div className=" flex flex-col gap-5">
                <p className="text-gray-800 font-700 text-14">CORPORATE INFO</p>
                <div className="flex flex-col items-start justify- stretch gap-4">
                  <p className="text-14 font-400 text-gray-600">Work With Us</p>
                  <p className="text-14 font-400 text-gray-600">
                    Reach Your Happy Place
                  </p>
                  <p className="text-14 font-400 text-gray-600">
                    Sustainability
                  </p>
                  <p className="text-14 font-400 text-gray-600">
                    Investor Relations
                  </p>
                  <p className="text-14 font-400 text-gray-600">Oriflame.com</p>
                  <p className="text-14 font-400 text-gray-600">
                    EU Declarations of Conformity
                  </p>
                </div>
              </div>
            </div>
            <div className="w-1/4 h-full flex flex-col items-center">
              <div className=" flex flex-col gap-5">
                <p className="text-gray-800 font-700 text-14">DISCOVER</p>
                <div className="flex flex-col items-start justify-evenly gap-4">
                  <p className="text-14 font-400 text-gray-600">
                    Join us as a Brand Partner
                  </p>
                  <p className="text-14 font-400 text-gray-600">
                    Join us as a VIP Customer
                  </p>
                  <p className="text-14 font-400 text-gray-600">eCatalogue</p>
                </div>
              </div>
            </div>
            <div className="w-1/4 h-full flex flex-col items-center justify-start gap-2">
              <h5 className="text-25 text-gray-900 font-600">Our apps</h5>
              <div className="flex justify-between items-center gap-3">
                <img
                  src={OriflameApp1}
                  alt="oriflame app"
                  className="w-9 h-9"
                />
                <img
                  src={OriflameApp2}
                  alt="oriflame app"
                  className="w-9 h-9"
                />
                <img
                  src={OriflameApp3}
                  alt="oriflame app"
                  className="w-9 h-9"
                />
              </div>
              <a
                href="..."
                className="underline font-600 text-gray-700 hover:text-emerald-600"
              >
                Read more & download
              </a>
            </div>
          </div>
        </div>
        {/* follow us */}
        <div className="mb-7.5 flex flex-col justify-evenly items-center gap-8 ">
          <div className="flex flex-col gap-3">
            <h5 className="text-25 text-center text-gray-800 font-600">
              Follow Us
            </h5>
            <div className="flex justify-between items-center gap-3">
              <img src={FaceBook} alt="facebook" className="w-9 h-9" />
              <img src={YouTube} alt="youtube" className="w-9 h-9" />
              <img src={Instagram} alt="insta" className="w-9 h-9" />
            </div>
          </div>
          <div className="w-[600px]">
            <p className="text-center text-14 font-400 text-gray-600">
              Oriflame is a leading beauty company selling direct. We are
              present in more than 60 countries, of which we are the market
              leader in more than a half. Oriflame has its origin in Sweden with
              corporate offices in Switzerland. We offer a wide range of
              high-quality beauty products as well as a unique opportunity to
              join our sales force and start your own business.
            </p>
          </div>
          <div className="w-[530px]">
            <p className="text-center text-gray-600 text-14 font-400">
              Copyright © 2025 Oriflame Cosmetics Global SA. All rights
              reserved.
            </p>
            <div className="flex items-center justify-between">
              <p className="underline cursor-pointer text-gray-600 text-14 font-400">
                Terms and Conditions for VIP Customers
              </p>
              <p className="underline cursor-pointer text-gray-600 text-14 font-400">
                Terms and Conditions for Brand Partners
              </p>
            </div>
          </div>
          <div className="flex justify-between gap-5">
            <img src={Visa} alt="visa" />
            <img src={CirclePay} alt="circlepay" />
            <img src={PayPal} alt="paypal" />
            <img src={GPay} alt="gpay" />
          </div>
        </div>
      </div>
      <Karim/>
      <IoIosHeart className="hover:fill-rose-600" />
    </>
    // end
  );
};
export default Home;
