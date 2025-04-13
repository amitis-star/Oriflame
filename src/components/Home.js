import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import { useState } from "react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import logo from "../assests/svg/oriflame logo.svg";
import SearchIcon from "../assests/svg/search.svg";
import StoreIcon from "../assests/svg/store.svg"

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
      {/* swiper */}
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
          autoplay={{ delay: 2000, disableOnInteraction: false }}
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
              <img src={StoreIcon} alt="store" className=""/>
            </div>
          </div>
        </div>
      </div>
      {/* header end */}
    </div>
    // end
  );
};
export default Home;
