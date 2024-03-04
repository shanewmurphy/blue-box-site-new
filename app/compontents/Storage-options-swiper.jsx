"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";

const containerData = [
  {
    id: "01",
    size: "10FT",
    imgURL: "/Storage-imgs/10ft-container.png",
    description:
      "Typically holds the contents of a studio apartment or a small office.",
    containerPageURL: "/",
  },
  {
    id: "02",
    size: "20FT",
    imgURL: "/Storage-imgs/20ft-container.png",
    description: "Typically holds contents of one-to-two-bedroom apartment.",
    containerPageURL: "/",
  },
  {
    id: "03",
    size: "40FT",
    imgURL: "/Storage-imgs/40ft-container.png",
    description: "Typically holds contents of three-to-four-bedroom house.",
    containerPageURL: "/",
  },
];

export default function StorageOptionsSwiper() {
  const swiperRef = useRef();
  return (
    <div>
      <div className="w-11/12 mx-auto laptop:my-[30%] md:my-[30%] sm:my-[60%]">
        <div className="laotop:w-10/12  xl:hidden lg:hidden laptop:visible md:visible sm:visible">
          <h3 className="laptop:text-6xl md:text-5xl sm:text-3xl  text-myblue text-center font-bold mb-1">
            Storage Containers
          </h3>
          <p className="laptop:w-9/12 md:w-10/12 sm:w-10/12 mx-auto text-center font-semibold laptop:text-xl md:text-lg sm:text-base text-myblack">
            We offer a wide range of container sizes options 10FT, 20FT and 40FT
          </p>
        </div>
        <div className="mt-6">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            spaceBetween={20}
            slidesPerView={"auto"}
            grabCursor={true}
            speed={2000}
            autoplay={{
              delay: 8500,
              disableOnInteraction: false,
            }}
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
              1240: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <div className="">
              <div className="my-swiper">
                {containerData.map((destail) => (
                  <SwiperSlide key={destail.id}>
                    <div className="bg-cardmobilebgcolor py-6 px-4 rounded-lg">
                      <div>
                        <h5 className="md:text-5xl sm:text-5xl text-myblue text-center font-black mb-1">
                          {destail.size}
                        </h5>
                      </div>
                      <div className="w-9/12 mx-auto">
                        <picture>
                          <img src={destail.imgURL} />
                        </picture>
                      </div>
                      <div className="md:w-8/12 sm:w-11/12 mx-auto">
                        <p className="text-center text-myblack md:text-lg sm:text-sm font-semibold mt-3">
                          {destail.description}
                        </p>
                      </div>
                      <div className="grid grid-rows-2 justify-items-center mt-6">
                        <div>
                          <buttom className="px-10 py-2 rounded-xl text-mywhite text-sm font-medium bg-myblue hover:bg-hoverbtnblue border border-myblue">
                            Get Quote
                          </buttom>
                        </div>
                        <div className="mt-1">
                          <button className="px-10 py-2 rounded-xl text-myblue text-sm font-medium border border-myblue hover:hover:bg-myblue">
                            Learn More
                          </button>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </div>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
