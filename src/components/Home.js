import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import { useState } from "react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import logo from "../assests/svg/oriflame logo.svg";
import SearchIcon from "../assests/svg/search.svg";
import StoreIcon from "../assests/svg/store.svg";
import Heart from "../assests/svg/heart.svg";
import FullStar from "../assests/svg/full-star.svg";
import EmptyStar from "../assests/svg/empty-star.svg";
import FlowerSwiper from "../assests/images/flower-cream-swiper.webp";
import NovageSwiper from "../assests/images/novage-swiper.webp";
import OptSwiper from "../assests/images/opt-swiper.webp";
import WhatsNew from "../assests/images/what's-new.webp";
import OptWhatsNew from "../assests/images/opt-whats-new.webp";
import OptWhatsNew2 from "../assests/images/opt-whats-new-2.webp";
import TheOneWhatsNew from "../assests/images/theone-whats-new.webp";

const Home = () => {
  const inputRef = useRef(null);

  const [isTyping, setIsTyping] = useState(false);

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

  return (
    // start
    <div className="container">
      {/* header start */}
      {isTyping && (
        <div
          className={`fixed w-full h-full bg-zinc-900 z-40 box-border pointer-events-none transition-opacity duration-[5000ms] delay-[2000ms] ${
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
      <div className="w-full h-16 px-8 flex items-center gap-x-10">
        <div className="w-1/6 h-11 flex items-center justify-between">
          <div className="w-8 h-9 flex flex-col items-center justify-center text-center">
            <div className="w-6 h-0.1 bg-gray-700 mb-2"></div>
            <div className="w-6 h-0.2 bg-gray-700"></div>
            <div className="w-6 h-0.1 bg-gray-700 mt-2"></div>
          </div>
          <img src={logo} className="w-28 h-8" alt="logo" />
        </div>
        <div className="w-5/6 h-11 flex justify-between gap-10">
          <div className="relative z-50 h-full w-4/5 m-auto">
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
          <div className="h-full w-1/5 flex justify-between items-center">
            <div className="h-6 text-18 font-400 cursor-pointer">join us</div>
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
                  className="w-31 h-12 bg-black rounded-full text-white"
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
                  className="w-31 h-12 bg-black rounded-full text-white"
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
                <h3 className="text-50 w-63 h-29 mb-4 text-gray-700 font-500">
                  1-2-3 to amazing skin!
                </h3>
                <button
                  type="button"
                  className="w-31 h-12 bg-black rounded-full text-white"
                >
                  Shop now
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="w-full h-13 flex justify-center items-center gap-7">
        <button className="text-14 text-gray-800 font-600">ECATALOGUE</button>
        <button className="text-14 text-gray-800 font-600">NUTRITION</button>
        <button className="text-14 text-gray-800 font-600">SKIN CARE</button>
        <button className="text-14 text-gray-800 font-600">MAKE UP</button>
        <button className="text-14 text-gray-800 font-600">FRAGRANCE</button>
        <button className="text-14 text-gray-800 font-600">BATH & BODY</button>
        <button className="text-14 text-gray-800 font-600">HAIR</button>
        <button className="text-14 text-gray-800 font-600">ACCESSORIES</button>
        <button className="text-14 text-gray-800 font-600">MEN</button>
        <button className="text-14 text-gray-800 font-600">KIDS & BABY</button>
      </div>
      <div className="w-full h-0.1 bg-gray-200 mb-15"></div>
      <div className="w-full h-64.5 flex justify-center mb-40">
        {" "}
        {/* remove mb-40 */}
        <div className="w-[1346px] h-full mx-7">
          <div className="w-[1346px] h-13 mb-7 relative flex items-center justify-center">
            <h3 className="text-40 font-500 text-gray-800">What's new</h3>
            <button
              type="btn"
              className="w-27 h-11 rounded-full py-3 px-8 text-black text-14 border-gray-800 border-solid border-2 absolute right-0 font-500 leading-3"
            >
              View all
            </button>
          </div>
          <div className="w-[1346px] h-55 flex  items-center gap-10">
            <div className="h-full w-[545px] relative">
              <img
                src={WhatsNew}
                alt="what's new"
                className="h-55  rounded-lg"
              />
              <button className="w-36 h-12 rounded-full bg-black text-white font-500 absolute bottom-8 left-33 hover:bg-gray-600">
                BROWSE ECATALOGUE
              </button>
            </div>
            <div className="h-full w-[721px] flex justify-between items-center">
              <div className="w-39.3 h-full bg-gray-100">
                <div className="group overflow-hidden w-39.3 h-39.3 relative cursor-pointer">
                  <img src={OptWhatsNew} alt="opt" className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" />
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
                    <img alt="star-full" src={FullStar} className="w-5 h-5"/>
                    <img alt="star-full" src={FullStar} className="w-5 h-5"/>
                    <img alt="star-full" src={FullStar} className="w-5 h-5"/>
                    <img alt="star-full" src={FullStar} className="w-5 h-5"/>
                    <img alt="star-full" src={EmptyStar} className="w-5 h-5"/>
                  </div>
                  <span className="text-12 text-gray-700">(1)</span>
                </div>
                <p className="h-4 text-gray-600 flex justify-start items-center text-12 font-100 mb-3">OPTIMALS</p>
                <div className="h-10 text-14 text-gray-900 font-400">Opt Optimals Daily Glow Multi-Protector SPF50</div>
                <div className="h-5 flex items-center gap-4 mt-3">
                  <p className="text-orange-600 font-500">£12.99</p>
                  <span className="line-through text-gray-400 font-100">£20.00</span>
                </div>
              </div>
              <div className="w-39.3 h-full bg-gray-100">
                <div className="group overflow-hidden w-39.3 h-39.3 relative cursor-pointer">
                  <img src={OptWhatsNew2} alt="opt" className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" />
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
                    <img alt="star-full" src={EmptyStar} className="w-5 h-5"/>
                    <img alt="star-full" src={EmptyStar} className="w-5 h-5"/>
                    <img alt="star-full" src={EmptyStar} className="w-5 h-5"/>
                    <img alt="star-full" src={EmptyStar} className="w-5 h-5"/>
                    <img alt="star-full" src={EmptyStar} className="w-5 h-5"/>
                  </div>
                  <span className="text-12 text-gray-700">(0)</span>
                </div>
                <p className="h-4 text-gray-600 flex justify-start items-center text-12 font-100 mb-3">OPTIMALS</p>
                <div className="h-10 text-14 text-gray-900 font-400">Opt Optimals Hydra Radiance Rich Cream</div>
                <div className="h-5 flex items-center gap-4 mt-3">
                  <p className="text-orange-600 font-500">£12.99</p>
                  <span className="line-through text-gray-400 font-100">£17.00</span>
                </div>
              </div>
              <div className="w-39.3 h-full bg-gray-100">
                <div className="group overflow-hidden w-39.3 h-39.3 relative cursor-pointer">
                  <img src={TheOneWhatsNew} alt="opt" className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" />
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
                    <img alt="star-full" src={FullStar} className="w-5 h-5"/>
                    <img alt="star-full" src={FullStar} className="w-5 h-5"/>
                    <img alt="star-full" src={FullStar} className="w-5 h-5"/>
                    <img alt="star-full" src={FullStar} className="w-5 h-5"/>
                    <img alt="star-full" src={EmptyStar} className="w-5 h-5"/>
                  </div>
                  <span className="text-12 text-gray-700">(1)</span>
                </div>
                <p className="h-4 text-gray-600 flex justify-start items-center text-12 font-100 mb-3">THE ONES</p>
                <div className="h-10 text-14 text-gray-900 font-400">5 in 1 Wonder Lash Prom Queen Mascara - Black</div>
                <div className="h-5 flex items-center gap-4 mt-3">
                  <p className="text-orange-600 font-500">£6.99</p>
                  <span className="line-through text-gray-400 font-100">£13.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* body end */}
    </div>
    // end
  );
};
export default Home;
