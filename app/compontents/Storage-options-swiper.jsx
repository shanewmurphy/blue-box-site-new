"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";

const containerData = [
  {
    id: "01",
    size: "10ft",
    imgURL: "/Storage-imgs/10ft-conatiner.png",
    description:
      "Typically holds the contents of a studio apartment or a small office.",
    containerPageURL: "/",
  },
  {
    id: "02",
    size: "20ft",
    imgURL: "/Storage-imgs/20ft-conatiner.png",
    description: "Typically holds contents of one-to-two-bedroom apartment.",
    containerPageURL: "/",
  },
  {
    id: "03",
    size: "40ft",
    imgURL: "/Storage-imgs/40ft-conatiner.png",
    description: "ypically holds contents of three-to-four-bedroom house.",
    containerPageURL: "/",
  },
];

export default function StorageOptionsSwiper() {
  return (
    <div>
      <div className="laotop:w-10/12 laptop:my-[30%] md:my-[30%] sm:my-[60%] xl:hidden lg:hidden laptop:visible md:visible sm:visible">
        <h3 className="laptop:text-6xl md:text-5xl sm:text-3xl  text-myblue text-center font-bold mb-1">
          Storage Containers
        </h3>
        <p className="laptop:w-9/12 md:w-10/12 sm:w-10/12 mx-auto text-center font-medium laptop:text-xl md:text-lg sm:text-base text-myblack">
          We offer a wide range of container sizes 10FT, 20FT and 40FT.
        </p>
      </div>
    </div>
  );
}
