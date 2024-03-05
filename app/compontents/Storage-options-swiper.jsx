"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";
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
        <div className="laotop:w-10/12  xl:hidden lg:hidden laptop:hidden md:visible sm:visible">
          <h3 className="laptop:text-6xl md:text-5xl sm:text-3xl  text-myblue text-center font-bold mb-1">
            Storage Containers
          </h3>
          <p className="laptop:w-9/12 md:w-10/12 sm:w-11/12 mx-auto text-center font-semibold laptop:text-xl md:text-lg sm:text-lg text-myblack">
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
            speed={900}
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
                    <div className="bg-cardmobilebgcolor py-8 px-4 rounded-lg xl:hidden lg:hidden laptop:hidden md:visible sm:visible">
                      <div>
                        <h5 className="md:text-6xl sm:text-6xl text-myblue text-center font-black mb-1">
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
                      <div className="grid grid-rows-2 justify-items-center gap-0 mt-8 pb-6">
                        <div>
                          <buttom className="px-10 py-3 rounded-xl text-mywhite text-base font-medium bg-myblue hover:bg-hoverbtnblue border-2 border-myblue">
                            Get Quote
                          </buttom>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </div>
            </div>
          </Swiper>
          <div className="mt-8 xl:hidden lg:hidden md:block sm:block">
            <div className="flex justify-end">
              <div className="mr-4">
                <button onClick={() => swiperRef.current.slidePrev()}>
                  <Lefticon />
                </button>
              </div>
              <div>
                <button onClick={() => swiperRef.current.slideNext()}>
                  <Righticon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Lefticon() {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        cx="25"
        cy="25.4902"
        rx="25"
        ry="24.5098"
        transform="rotate(-180 25 25.4902)"
        fill="#3745B6"
      />
      <path
        d="M23.2594 16.2857C23.1703 16.1951 23.0644 16.1233 22.9478 16.0743C22.8313 16.0252 22.7063 16 22.5802 16C22.454 16 22.329 16.0252 22.2125 16.0743C22.0959 16.1233 21.99 16.1951 21.9009 16.2857L14.2825 24.0158C14.237 24.0615 14.1968 24.1121 14.1624 24.1668C14.1463 24.1901 14.1319 24.2145 14.1192 24.2399C14.1192 24.274 14.0856 24.3032 14.0712 24.3373L14.0424 24.4347C14.0316 24.4614 14.0235 24.4891 14.0184 24.5175C13.9939 24.6429 13.9939 24.772 14.0184 24.8975C14.0235 24.9258 14.0316 24.9536 14.0424 24.9803L14.0712 25.0777C14.0712 25.1118 14.1048 25.141 14.1192 25.1751C14.1319 25.2005 14.1463 25.2249 14.1624 25.2482C14.1968 25.3029 14.237 25.3535 14.2825 25.3992L21.9009 33.1293C21.9902 33.2205 22.0964 33.2928 22.2134 33.3421C22.3304 33.3914 22.4559 33.4168 22.5826 33.4167C22.7728 33.4168 22.9589 33.3596 23.1171 33.2523C23.2752 33.1449 23.3984 32.9923 23.4709 32.8138C23.5435 32.6353 23.5621 32.4389 23.5244 32.2497C23.4868 32.0604 23.3945 31.8868 23.2594 31.7508L17.278 25.6817H35.0399C35.2945 25.6817 35.5387 25.579 35.7188 25.3963C35.8988 25.2137 36 24.9659 36 24.7075C36 24.4491 35.8988 24.2013 35.7188 24.0186C35.5387 23.836 35.2945 23.7333 35.0399 23.7333H17.278L23.2594 17.6642C23.3487 17.5737 23.4195 17.4663 23.4678 17.348C23.5161 17.2297 23.541 17.103 23.541 16.9749C23.541 16.8469 23.5161 16.7202 23.4678 16.6019C23.4195 16.4836 23.3487 16.3762 23.2594 16.2857Z"
        fill="#FEFEFE"
      />
    </svg>
  );
}
function Righticon() {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="25" cy="24.5098" rx="25" ry="24.5098" fill="#3745B6" />
      <path
        d="M26.7406 32.1303C26.8297 32.2209 26.9356 32.2927 27.0522 32.3418C27.1687 32.3908 27.2937 32.416 27.4198 32.416C27.546 32.416 27.671 32.3908 27.7875 32.3418C27.9041 32.2927 28.01 32.2209 28.0991 32.1303L35.7175 24.4002C35.763 24.3545 35.8032 24.3039 35.8376 24.2492C35.8537 24.2259 35.8681 24.2015 35.8808 24.1761C35.8808 24.142 35.9144 24.1128 35.9288 24.0787L35.9576 23.9813C35.9684 23.9546 35.9765 23.9269 35.9816 23.8985C36.0061 23.7731 36.0061 23.644 35.9816 23.5186C35.9765 23.4902 35.9684 23.4624 35.9576 23.4357L35.9288 23.3383C35.9288 23.3042 35.8952 23.275 35.8808 23.2409C35.8681 23.2155 35.8537 23.1911 35.8376 23.1678C35.8032 23.1131 35.763 23.0625 35.7175 23.0169L28.0991 15.2867C28.0098 15.1956 27.9036 15.1232 27.7866 15.0739C27.6696 15.0246 27.5441 14.9992 27.4174 14.9994C27.2272 14.9992 27.0411 15.0564 26.8829 15.1638C26.7248 15.2711 26.6016 15.4237 26.5291 15.6022C26.4565 15.7807 26.4379 15.9771 26.4756 16.1663C26.5132 16.3556 26.6055 16.5292 26.7406 16.6652L32.722 22.7343L14.9601 22.7343C14.7055 22.7343 14.4613 22.837 14.2812 23.0197C14.1012 23.2024 14 23.4501 14 23.7085C14 23.9669 14.1012 24.2147 14.2812 24.3974C14.4613 24.5801 14.7055 24.6827 14.9601 24.6827L32.722 24.6827L26.7406 30.7518C26.6513 30.8423 26.5805 30.9498 26.5322 31.068C26.4839 31.1863 26.459 31.313 26.459 31.4411C26.459 31.5691 26.4839 31.6959 26.5322 31.8141C26.5805 31.9324 26.6513 32.0398 26.7406 32.1303Z"
        fill="#FEFEFE"
      />
    </svg>
  );
}
