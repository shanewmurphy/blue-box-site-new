"use client";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const sliderData = [
  {
    id: "01",
    size: "10FT",
    imgURL: "/",
    Description: "",
  },
  {
    id: "02",
    size: "20FT",
    imgURL: "/",
    Description: "",
  },
  {
    id: "03",
    size: "40FT",
    imgURL: "/",
    Description: "",
  },
];

export default function StorageContainersSlider() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  const initAnimations = () => {
    gsap.from(".slide-content", {
      duration: 0.5,
      opacity: 0,
      y: 100,
      stagger: 0.4,
      ease: "power2.out", // Use a different easing function for smoother animation
      scale: 0.5, // Scale the elements from 50% size
      rotation: 360, // Rotate the elements during animation
      scrollTrigger: {
        trigger: ".mySwiper",
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });
  };

  return (
    <div>
      <div className="lg:w-10/12 md:w-11/12 sm:w-11/12 mx-auto xl:my-[30%] lg:my-[30%]">
        <Swiper
          onSwiper={(swiper) => {
            // Ensure Swiper is fully initialized before setting up animations
            initAnimations();
          }}
          spaceBetween={20}
          slidesPerView={"auto"}
          grabCursor={true}
          // autoplay={{
          //   delay: 8500,
          //   disableOnInteraction: false,
          // }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1240: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1300: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          // modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {sliderData.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="bg-cardbggray slide-content">
                <div>
                  <h4>{slide.size}</h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
